// Note: xlsx removed - Vercel serverless has no filesystem access, so we use static data directly.

export interface DataPoint {
  month: string;
  impressions: number;
  clicks: number;
  uniqueReached: number;
  engagementRate: number;
}

export interface AnalyticsSummary {
  monthlyData: DataPoint[];
  totalImpressions: string;
  totalUniqueReached: string;
  totalClicks: string;
  overallEngagementRate: string;
}

export function getAtcChainsAnalyticsData(): AnalyticsSummary {
  return getFallbackData();
}

function getFallbackData(): AnalyticsSummary {
  // Hardcoded fallback matching the exact calculated metrics from the excel files
  return {
    monthlyData: [
      { month: "Oct 2025", impressions: 2663, clicks: 81, uniqueReached: 892, engagementRate: 5.82 },
      { month: "Nov 2025", impressions: 5185, clicks: 1064, uniqueReached: 1869, engagementRate: 24.01 },
      { month: "Dec 2025", impressions: 4697, clicks: 601, uniqueReached: 1606, engagementRate: 16.33 },
      { month: "Jan 2026", impressions: 4709, clicks: 1108, uniqueReached: 1484, engagementRate: 27.08 },
      { month: "Feb 2026", impressions: 3253, clicks: 354, uniqueReached: 1140, engagementRate: 14.39 },
      { month: "Mar 2026", impressions: 3778, clicks: 213, uniqueReached: 1861, engagementRate: 8.92 },
      { month: "Apr 2026", impressions: 5029, clicks: 468, uniqueReached: 1602, engagementRate: 12.19 },
      { month: "May 2026", impressions: 7079, clicks: 388, uniqueReached: 1496, engagementRate: 7.30 }
    ],
    totalImpressions: "36,393",
    totalUniqueReached: "11,950",
    totalClicks: "4,277",
    overallEngagementRate: "14.77%"
  };
}
