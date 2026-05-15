'use client';

import Reveal from '../../components/Reveal';
import { useState } from 'react';
import Marquee from '@/components/Marquee';

export default function Inquiry() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const action = form.action;

    // Mailto fallback if action is not replaced
    if (action.includes('REPLACE_ME')) {
      const formData = new FormData(form);
      const subject = encodeURIComponent('New inquiry from ' + (formData.get('name') || 'website'));
      const body = encodeURIComponent(
        'Name: ' + (formData.get('name') || '') + '\n' +
        'Email: ' + (formData.get('email') || '') + '\n\n' +
        (formData.get('message') || '')
      );
      window.location.href = 'mailto:hello@pragyaan.in?subject=' + subject + '&body=' + body;
      return;
    }

    setStatus('submitting');
    fetch(action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
      .then((res) => {
        if (res.ok) {
          form.reset();
          setStatus('success');
        } else {
          alert('Something went wrong. Please email hello@pragyaan.in.');
          setStatus('idle');
        }
      })
      .catch(() => {
        alert('Network error. Please email hello@pragyaan.in.');
        setStatus('idle');
      });
  };

  return (
    <article aria-label="Inquiry" className="bg-[#FAFAFA] min-h-screen flex flex-col items-center justify-center p-0 relative">
      <div className="w-full flex-grow flex items-center justify-center p-6 py-12">
        <Reveal className="w-full max-w-[1100px] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)]">
          <section className="flex min-h-[600px] max-[920px]:flex-col overflow-hidden border border-black/5" aria-labelledby="inquiry-h">

            {/* Left Side: Cinematic Black + Sunburst */}
            <div className="w-[40%] bg-black relative flex flex-col justify-between p-10 py-12 max-[920px]:w-full max-[920px]:py-16">
              <div className="relative z-10">
                <h2 id="inquiry-h" className="text-[clamp(24px,2.5vw,36px)] leading-[1.2] font-bold text-white">
                  Got a project, a question, or an idea about <span className="text-[#FFD111]">your brand?</span>
                </h2>
              </div>

              {/* Sunburst Light Effect at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none overflow-hidden opacity-100">
                <svg viewBox="0 0 1000 1000" className="absolute bottom-[-280px] left-1/2 -translate-x-1/2 w-[220%] aspect-square">
                  <defs>
                    <radialGradient id="sunburst" cx="50%" cy="100%" r="50%">
                      <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="500" cy="1000" r="500" fill="url(#sunburst)" />
                  {/* Radial rays */}
                  {[...Array(50)].map((_, i) => {
                    const angle = (Math.PI * (i * 3.6)) / 180;
                    const x2 = (500 + 1000 * Math.cos(angle)).toFixed(2);
                    const y2 = (1000 - 1000 * Math.sin(angle)).toFixed(2);
                    return (
                      <line
                        key={i}
                        x1="500" y1="1000"
                        x2={x2}
                        y2={y2}
                        stroke="white"
                        strokeWidth="0.8"
                        className="opacity-[0.12]"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Right Side: Clean Form */}
            <div className="flex-1 bg-white flex items-center justify-center p-8 py-12">
              <div className="w-full max-w-[460px]">
                <p className="text-[13px] leading-[1.6] text-black/60 mb-8">
                  Whether it&apos;s strategy, storytelling, or exploring how we can bring your brand to life &mdash; reach out, and we&apos;ll figure it out together.
                </p>

                <form
                  action="https://formspree.io/f/REPLACE_ME"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="f-name" className="block text-[11px] font-space font-bold uppercase tracking-wider text-black/40 mb-1.5">Name</label>
                    <input
                      id="f-name"
                      name="name"
                      type="text"
                      required
                      className="w-full p-2.5 border border-black/10 bg-transparent text-black text-[14px] transition-colors focus:outline-none focus:border-[#FFD111]"
                    />
                  </div>

                  <div>
                    <label htmlFor="f-phone" className="block text-[11px] font-space font-bold uppercase tracking-wider text-black/40 mb-1.5">Mobile Number</label>
                    <div className="flex gap-2">
                      <select
                        name="countryCode"
                        className="w-[85px] p-2.5 border border-black/10 bg-transparent text-black text-[14px] focus:outline-none focus:border-[#FFD111] appearance-none cursor-pointer"
                      >
                        <option value="+91">IN +91</option>
                        <option value="+1">US +1</option>
                        <option value="+44">UK +44</option>
                        <option value="+971">AE +971</option>
                        <option value="+61">AU +61</option>
                        <option value="+81">JP +81</option>
                        <option value="+65">SG +65</option>
                        <option value="+49">DE +49</option>
                        <option value="+33">FR +33</option>
                        <option value="+1">CA +1</option>
                      </select>
                      <input
                        id="f-phone"
                        name="phone"
                        type="tel"
                        placeholder="99980 81399"
                        required
                        className="flex-1 p-2.5 border border-black/10 bg-transparent text-black text-[14px] transition-colors focus:outline-none focus:border-[#FFD111]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="f-email" className="block text-[11px] font-space font-bold uppercase tracking-wider text-black/40 mb-1.5">Email address</label>
                    <input
                      id="f-email"
                      name="email"
                      type="email"
                      required
                      className="w-full p-2.5 border border-black/10 bg-transparent text-black text-[14px] transition-colors focus:outline-none focus:border-[#FFD111]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-space font-bold uppercase tracking-wider text-black/40 mb-1.5">Service Interested In</label>
                    <select
                      name="service"
                      required
                      defaultValue=""
                      className="w-full p-2.5 border border-black/10 bg-transparent text-black text-[14px] focus:outline-none focus:border-[#FFD111] appearance-none cursor-pointer"
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

                  <div>
                    <label htmlFor="f-message" className="block text-[11px] font-space font-bold uppercase tracking-wider text-black/40 mb-1.5">Leave a message</label>
                    <textarea
                      id="f-message"
                      name="message"
                      required
                      className="w-full min-h-[90px] p-2.5 border border-black/10 bg-transparent text-black text-[14px] transition-colors focus:outline-none focus:border-[#FFD111] resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-[#FFD111] text-black py-3.5 px-8 font-space font-bold uppercase tracking-widest text-[12px] transition-all hover:scale-[1.01] active:scale-100 disabled:opacity-50 shadow-lg shadow-[#FFD111]/10"
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Submit'}
                    </button>
                    <div className="mt-4 text-center">
                      <p className="text-[10px] font-space font-bold uppercase tracking-[0.2em] inline-block bg-gradient-to-r from-[#1E3A8A] via-[#9D4EDD] to-[#1E3A8A] bg-[length:200%_auto] bg-clip-text text-transparent inquiry-shimmer">
                        We will give you a callback within 24 hours.
                      </p>
                    </div>
                    <style jsx>{`
                      @keyframes moveGradient {
                        0% { background-position: 0% 50%; }
                        100% { background-position: 200% 50%; }
                      }
                      .inquiry-shimmer {
                        animation: moveGradient 2s linear infinite;
                      }
                    `}</style>
                  </div>

                  {status === 'success' && (
                    <div className="p-3 bg-[#FFD111]/10 border border-[#FFD111] text-black text-center mt-4 text-[13px] font-medium animate-in fade-in slide-in-from-top-2 duration-500">
                      Thanks &mdash; we&apos;ve got it. You&apos;ll hear back from us soon.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </section>
        </Reveal>
      </div>

      {/* Marquee just above the footer */}
      <div className="w-full relative">
        <Marquee />
      </div>
    </article>
  );
}
