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
    <section aria-label="Inquiry" className="bg-[#FAFAFA] min-h-screen md:h-screen md:min-h-[850px] flex flex-col items-center justify-between p-0 md:pt-[90px] relative font-sans">
      <div className="w-full flex-grow flex items-center justify-center p-4 py-16 md:py-0 md:px-10">
        <Reveal className="w-full max-w-[1350px] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] bg-white">
          <div className="flex md:min-h-[720px] max-[920px]:flex-col overflow-hidden" role="region" aria-labelledby="inquiry-h">

            {/* Left Side: Solid Black (Top) & Radiating Texture (Bottom) */}
            <div className="w-[44%] bg-black flex flex-col max-[920px]:w-full md:min-h-[600px]">
              {/* Top Half: Yellow bold text in sentence case */}
              <div className="h-1/2 flex items-center p-8 md:p-12 bg-black md:min-h-[300px] py-12 max-[920px]:py-10">
                <h2 id="inquiry-h" className="text-[clamp(32px,4.3vw,64px)] leading-[1.1] font-extrabold text-[#FFD111] tracking-[-0.02em] font-sans">
                  <span className="block whitespace-nowrap">Got a project,</span>
                  <span className="block whitespace-nowrap">a question, or</span>
                  <span className="block whitespace-nowrap">an idea about</span>
                  <span className="block whitespace-nowrap">your brand?</span>
                </h2>
              </div>

              {/* Bottom Half: Radiating texture background */}
              <div className="h-1/2 flex-grow relative bg-black overflow-hidden md:min-h-[300px] max-[920px]:h-[200px]">
                {/* 
                  TO LINK YOUR OWN IMAGE:
                  Simply replace the "/assets/img/round.png" path below with your own image path!
                */}
                <img
                  src="/assets/img/sun.jpeg"
                  alt="Starburst Pattern"
                  className="w-full h-full object-cover opacity-90"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
            </div>

            {/* Right Side: Clean Form with Black Border Outer Box */}
            <div className="flex-1 bg-white flex items-center justify-center p-6 md:p-12">
              <div className="w-full max-w-[720px] border-[1.5px] border-black p-6 md:p-10 bg-white">
                <p className="text-[clamp(18px,1.4vw,22px)] leading-[1.7] text-black font-sans font-light mb-8">
                  Whether it&apos;s strategy, storytelling, or exploring how we can bring your brand to life &mdash; reach out, and we&apos;ll figure it out together.
                </p>

                <form
                  action="https://formspree.io/f/REPLACE_ME"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="f-name" className="block text-[18px] font-sans font-medium text-black mb-2">Name</label>
                    <input
                      id="f-name"
                      name="name"
                      type="text"
                      required
                      className="w-full p-3 border border-black/30 bg-transparent text-black text-[15px] rounded-[4px] transition-colors focus:outline-none focus:border-[#FFD111]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 max-[480px]:grid-cols-1">
                    <div>
                      <label htmlFor="f-email" className="block text-[18px] font-sans font-medium text-black mb-2">Email address</label>
                      <input
                        id="f-email"
                        name="email"
                        type="email"
                        required
                        className="w-full p-3 border border-black/30 bg-transparent text-black text-[15px] rounded-[4px] transition-colors focus:outline-none focus:border-[#FFD111]"
                      />
                    </div>

                    <div>
                      <label htmlFor="f-phone" className="block text-[18px] font-sans font-medium text-black mb-2">Mobile Number</label>
                      <div className="flex gap-2">
                        <select
                          name="countryCode"
                          className="w-[85px] p-3 border border-black/30 bg-transparent text-black text-[14px] rounded-[4px] focus:outline-none focus:border-[#FFD111] appearance-none cursor-pointer"
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
                          placeholder="99980 81399"
                          required
                          className="flex-1 p-3 border border-black/30 bg-transparent text-black text-[15px] rounded-[4px] transition-colors focus:outline-none focus:border-[#FFD111]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[18px] font-sans font-medium text-black mb-2">Service Interested In</label>
                    <select
                      name="service"
                      required
                      defaultValue=""
                      className="w-full p-3 border border-black/30 bg-transparent text-black text-[15px] rounded-[4px] focus:outline-none focus:border-[#FFD111] appearance-none cursor-pointer"
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
                    <label htmlFor="f-message" className="block text-[18px] font-sans font-medium text-black mb-2">Leave a message</label>
                    <textarea
                      id="f-message"
                      name="message"
                      required
                      className="w-full min-h-[105px] p-3 border border-black/30 bg-transparent text-black text-[15px] rounded-[4px] transition-colors focus:outline-none focus:border-[#FFD111] resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-[#FFD111] text-black py-4 px-8 font-space font-light text-[clamp(16px,1.1vw,19px)] tracking-[0.1em] uppercase rounded-[8px] hover:brightness-105 active:scale-[0.99] disabled:opacity-50 transition-all duration-300 shadow-lg shadow-[#FFD111]/10"
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Submit'}
                    </button>
                    <p className="text-[15px] font-sans font-semibold text-center mt-4 bg-gradient-to-r from-[#0a065c] via-[#4b3fd4] to-[#60a5fa] bg-[length:200%_auto] bg-clip-text text-transparent inquiry-shimmer">
                      We will give you a callback within 24 hours. Never submit passwords.
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
                    <div className="p-3 bg-[#FFD111]/10 border border-[#FFD111] text-black text-center mt-4 text-[14px] font-medium rounded-[4px] animate-in fade-in slide-in-from-top-2 duration-500 font-sans">
                      Thanks &mdash; we&apos;ve got it. You&apos;ll hear back from us soon.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="w-full z-10 hidden md:block">
        <Marquee />
      </div>
    </section>
  );
}
