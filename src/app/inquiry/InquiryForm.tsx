'use client';

import { useState } from 'react';

export default function InquiryForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return; // prevent duplicate submissions

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: (data.get('name') as string)?.trim(),
      email: (data.get('email') as string)?.trim(),
      phone: (data.get('phone') as string)?.trim(),
      countryCode: (data.get('countryCode') as string) || '+91',
      service: (data.get('service') as string)?.trim(),
      message: (data.get('message') as string)?.trim(),
    };

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        form.reset();
        setStatus('success');
      } else {
        setErrorMsg(json.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2.5 md:gap-3 transition-all duration-700"
    >
      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3">
        <div>
          <label htmlFor="f-name" className="block text-[11px] md:text-[12px] font-semibold text-black mb-1 transition-all duration-700">Name</label>
          <input
            id="f-name"
            name="name"
            type="text"
            required
            maxLength={100}
            className="w-full h-[40px] px-3 py-1.5 text-[13px] md:text-[14px] border border-black/30 bg-transparent text-black rounded-[4px] transition-all duration-700 focus:outline-none focus:border-[#FFD111]"
          />
        </div>

        <div>
          <label htmlFor="f-email" className="block text-[11px] md:text-[12px] font-semibold text-black mb-1 transition-all duration-700">Email address</label>
          <input
            id="f-email"
            name="email"
            type="email"
            required
            maxLength={100}
            className="w-full h-[40px] px-3 py-1.5 text-[13px] md:text-[14px] border border-black/30 bg-transparent text-black rounded-[4px] transition-all duration-700 focus:outline-none focus:border-[#FFD111]"
          />
        </div>
      </div>

      {/* Row 2: Mobile and Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3 transition-all duration-700">
        <div>
          <label htmlFor="f-phone" className="block text-[11px] md:text-[12px] font-semibold text-black mb-1 transition-all duration-700">Mobile Number</label>
          <div className="flex gap-2 w-full">
            <select
              name="countryCode"
              className="w-[85px] h-[40px] px-3 py-1.5 text-[13px] md:text-[14px] border border-black/30 bg-transparent text-black rounded-[4px] focus:outline-none focus:border-[#FFD111] appearance-none cursor-pointer transition-all duration-700"
            >
              <option value="+91">IN +91</option>
              <option value="+1">US +1</option>
              <option value="+44">UK +44</option>
              <option value="+971">AE +971</option>
              <option value="+61">AU +61</option>
              <option value="+81">JP +81</option>
            </select>
            <input
              id="f-phone"
              name="phone"
              type="tel"
              placeholder="99999 99999"
              required
              maxLength={20}
              className="flex-1 min-w-0 h-[40px] px-3 py-1.5 text-[13px] md:text-[14px] border border-black/30 bg-transparent text-black rounded-[4px] transition-all duration-700 focus:outline-none focus:border-[#FFD111]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] md:text-[12px] font-semibold text-black mb-1 transition-all duration-700">Service Interested In</label>
          <select
            name="service"
            required
            defaultValue=""
            className="w-full h-[40px] px-3 py-1.5 text-[13px] md:text-[14px] border border-black/30 bg-transparent text-black rounded-[4px] focus:outline-none focus:border-[#FFD111] appearance-none cursor-pointer transition-all duration-700"
          >
            <option value="" disabled>Select a service</option>
            <option value="Branding Strategy">Branding Strategy</option>
            <option value="Identity & Expression">Identity & Expression</option>
            <option value="Content & Communication">Content & Communication</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Social Community">Social Community</option>
            <option value="Personal Branding & Linkedin">Personal Branding & Linkedin</option>
            <option value="OOH ADVERTISING">OOH ADVERTISING</option>
          </select>
        </div>
      </div>

      {/* Row 3: Message */}
      <div>
        <label htmlFor="f-message" className="block text-[11px] md:text-[12px] font-semibold text-black mb-1 transition-all duration-700">Leave a message</label>
        <textarea
          id="f-message"
          name="message"
          required
          maxLength={2000}
          className="w-full h-[60px] min-h-[60px] max-h-[80px] px-3 py-2 text-[13px] md:text-[14px] border border-black/30 bg-transparent text-black rounded-[4px] transition-all duration-700 focus:outline-none focus:border-[#FFD111] resize-y"
        ></textarea>
      </div>

      <div className="pt-1.5 transition-all duration-700">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full btn-submit py-2 md:py-2.5 md:text-[14px] px-8 text-nav-label tracking-[0.15em] uppercase rounded-full active:scale-[0.99] disabled:opacity-50"
        >
          <span>{status === 'submitting' ? 'Submitting...' : 'Submit'}</span>
        </button>
        <p className="text-small-desc text-center mt-4 bg-gradient-to-r from-[#0a065c] via-[#4b3fd4] to-[#60a5fa] bg-[length:200%_auto] bg-clip-text text-transparent inquiry-shimmer">
          We will give you a callback within 24 hours.
        </p>
        <style>{`
    @keyframes moveGradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .inquiry-shimmer {
      animation: moveGradient 3s ease infinite;
    }
  `}</style>
      </div>

      {status === 'success' && (
        <div className="p-3 bg-[#FFD111]/10 border border-[#FFD111] text-black text-center mt-4 text-nav-label rounded-[4px] animate-in fade-in slide-in-from-top-2 duration-500">
          Thanks &mdash; we&apos;ve got it. You&apos;ll hear back from us soon.
        </div>
      )}

      {status === 'error' && errorMsg && (
        <div className="p-3 bg-red-50 border border-red-300 text-red-700 text-center mt-4 text-nav-label rounded-[4px] animate-in fade-in slide-in-from-top-2 duration-500">
          {errorMsg}
        </div>
      )}
    </form>
  );
}
