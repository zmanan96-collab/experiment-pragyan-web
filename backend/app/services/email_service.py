import smtplib
import os
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from concurrent.futures import ThreadPoolExecutor
import asyncio

logger = logging.getLogger(__name__)

# Contact constants — single source of truth
HR_NAME = "Aditi"
HR_PHONE = "+91 99980 81393"
AGENCY_EMAIL = "connect@mypragyan.com"


class EmailService:
    def __init__(self):
        self.smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
        self.smtp_port = int(os.getenv("SMTP_PORT", "587"))
        self.smtp_user = os.getenv("SMTP_USER", "")
        self.smtp_password = os.getenv("SMTP_PASSWORD", "")
        # Always route to connect@mypragyan.com regardless of env setting
        self.receiver_email = AGENCY_EMAIL
        self.executor = ThreadPoolExecutor(max_workers=2)

    def _build_hiring_email(self, lead_data: Dict[str, Any], summary: str) -> MIMEMultipart:
        """Builds the notification email for a job/internship applicant — routed to Aditi (HR)."""
        msg = MIMEMultipart()
        msg["From"] = self.smtp_user
        msg["To"] = self.receiver_email  # connect@mypragyan.com
        msg["Subject"] = f"New Job Application: {lead_data.get('name', 'Unknown')}"

        body = f"""New Job / Internship Application
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Applicant Name:
{lead_data.get('name', 'Not Provided')}

Email:
{lead_data.get('email', 'Not Provided')}

Phone:
{lead_data.get('phone', 'Not Provided')}

Position / Role Interested In:
{lead_data.get('service', 'Not Specified')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Conversation Summary:
{summary}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Action Required: {HR_NAME} (HR) — please follow up at {lead_data.get('email', '')}
HR Contact: {HR_NAME} | {HR_PHONE} | {AGENCY_EMAIL}
"""
        msg.attach(MIMEText(body, "plain", "utf-8"))
        return msg

    def _build_client_email(self, lead_data: Dict[str, Any], summary: str) -> MIMEMultipart:
        """Builds the notification email for a client business lead."""
        msg = MIMEMultipart()
        msg["From"] = self.smtp_user
        msg["To"] = self.receiver_email  # connect@mypragyan.com
        score = lead_data.get("lead_score", "LOW")
        msg["Subject"] = f"New Client Lead [{score}]: {lead_data.get('name', 'Unknown')}"

        body = f"""New Client Lead Captured
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:
{lead_data.get('name', 'Not Provided')}

Email:
{lead_data.get('email', 'Not Provided')}

Phone:
{lead_data.get('phone', 'Not Provided')}

Company / Brand:
{lead_data.get('company', 'Not Provided')}

Industry:
{lead_data.get('industry', 'Not Provided')}

Service / Business Need:
{lead_data.get('service', 'Not Provided')}

Budget:
{lead_data.get('budget', 'Not Provided')}

Timeline:
{lead_data.get('timeline', 'Not Provided')}

Lead Score:
{score}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Conversation Summary:
{summary}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Received via: Pragyan Chatbot | {AGENCY_EMAIL}
"""
        msg.attach(MIMEText(body, "plain", "utf-8"))
        return msg

    def _send_email_sync(self, lead_data: Dict[str, Any], summary: str) -> bool:
        """Synchronous email dispatch. Routes template based on lead_type."""
        if not self.smtp_user or not self.smtp_password:
            logger.warning("SMTP credentials not configured. Skipping email delivery.")
            return False

        lead_type = lead_data.get("lead_type", "client")
        try:
            if lead_type == "hiring":
                msg = self._build_hiring_email(lead_data, summary)
                log_label = (
                    f"Job application — {lead_data.get('name')} "
                    f"→ {HR_NAME} (HR) at {self.receiver_email}"
                )
            else:
                msg = self._build_client_email(lead_data, summary)
                log_label = (
                    f"Client lead [{lead_data.get('lead_score', 'LOW')}] — "
                    f"{lead_data.get('name')} → {self.receiver_email}"
                )

            logger.info(f"Connecting to SMTP {self.smtp_host}:{self.smtp_port} | {log_label}")
            server = smtplib.SMTP(self.smtp_host, self.smtp_port, timeout=10)
            if self.smtp_port == 587:
                server.starttls()
            server.login(self.smtp_user, self.smtp_password)
            server.sendmail(self.smtp_user, self.receiver_email, msg.as_string())
            server.quit()
            logger.info(f"✅ Email sent: {log_label}")
            return True
        except Exception as e:
            logger.error(f"❌ Failed to send email: {e}", exc_info=True)
            return False

    async def send_lead_email(self, lead_data: Dict[str, Any], summary: str) -> bool:
        """Asynchronously dispatch email using the thread pool."""
        loop = asyncio.get_running_loop()
        return await loop.run_in_executor(self.executor, self._send_email_sync, lead_data, summary)


# Global email service instance
email_service = EmailService()
