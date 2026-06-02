'use client';

import Reveal from '../../components/Reveal';
import { useState, useRef } from 'react';
import Marquee from '@/components/Marquee';

export default function Inquiry() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

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
    <section aria-label="Inquiry" className="bg-[#FAFAFA] min-h-screen md:h-screen flex flex-col items-center justify-between pt-[100px] px-0 pb-0 md:pt-[45px] [@media(display-mode:fullscreen)]:md:pt-[60px] relative font-sans">
      <div className="w-full flex-grow flex items-center justify-center p-4 py-8 md:py-0 md:px-10">
        <Reveal className="w-full max-w-[1250px] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] bg-white [@media(display-mode:fullscreen)]:max-w-[1300px] transition-all duration-700">
          <div className="flex md:min-h-[430px] [@media(display-mode:fullscreen)]:md:min-h-[550px] max-[920px]:flex-col overflow-hidden transition-all duration-700" role="region" aria-labelledby="inquiry-h">

            {/* Left Side: Solid Black (Top) & Radiating Texture (Bottom) */}
            <div className="w-[44%] bg-black flex flex-col max-[920px]:w-full relative">
              <div className="section-noise-effect" />
              {/* Top Half: Yellow bold text in sentence case */}
              <div className="h-1/2 flex items-center p-4 md:p-6 [@media(display-mode:fullscreen)]:md:p-8 bg-black py-6 max-[920px]:py-6">
                <h2 id="inquiry-h" className="text-section-heading !font-extrabold text-white transition-all duration-700">
                  <span className="block whitespace-nowrap">Got a project,</span>
                  <span className="block whitespace-nowrap">a question, or</span>
                  <span className="block whitespace-nowrap">an idea about</span>
                  <span className="block whitespace-nowrap">your brand?</span>
                </h2>
              </div>

              {/* Bottom Half: Radiating texture background */}
              <div className="h-1/2 flex-grow relative bg-black overflow-hidden max-[920px]:h-[200px]">
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
            <div className="flex-1 bg-white flex items-center justify-center p-3 md:p-5 [@media(display-mode:fullscreen)]:md:p-8 transition-all duration-700">
              <div className="w-full max-w-[720px] border-[1.5px] border-black p-4 md:p-5 [@media(display-mode:fullscreen)]:md:p-6 bg-white transition-all duration-700">
                <p className="text-small-desc text-black mb-2 md:mb-3 [@media(display-mode:fullscreen)]:md:mb-4 transition-all duration-700">
                  Whether it&apos;s strategy, storytelling, or exploring how we can bring your brand to life &mdash; reach out, and we&apos;ll figure it out together.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-1.5 [@media(display-mode:fullscreen)]:space-y-3 transition-all duration-700"
                >
                  <div>
                    <label htmlFor="f-name" className="block text-nav-label text-black mb-0.5 [@media(display-mode:fullscreen)]:mb-1.5 transition-all duration-700">Name</label>
                    <input
                      id="f-name"
                      name="name"
                      type="text"
                      required
                      className="w-full p-1.5 [@media(display-mode:fullscreen)]:p-2.5 border border-black/30 bg-transparent text-black text-nav-label rounded-[4px] transition-all duration-700 focus:outline-none focus:border-[#FFD111]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2 [@media(display-mode:fullscreen)]:gap-3 max-[480px]:grid-cols-1 transition-all duration-700">
                    <div>
                      <label htmlFor="f-email" className="block text-nav-label text-black mb-0.5 [@media(display-mode:fullscreen)]:mb-1.5 transition-all duration-700">Email address</label>
                      <input
                        id="f-email"
                        name="email"
                        type="email"
                        required
                        className="w-full p-1.5 [@media(display-mode:fullscreen)]:p-2.5 border border-black/30 bg-transparent text-black text-nav-label rounded-[4px] transition-all duration-700 focus:outline-none focus:border-[#FFD111]"
                      />
                    </div>

                    <div>
                      <label htmlFor="f-phone" className="block text-nav-label text-black mb-0.5 [@media(display-mode:fullscreen)]:mb-1.5 transition-all duration-700">Mobile Number</label>
                      <div className="flex gap-2">
                        <select
                          name="countryCode"
                          className="w-[75px] [@media(display-mode:fullscreen)]:w-[80px] p-1.5 [@media(display-mode:fullscreen)]:p-2.5 border border-black/30 bg-transparent text-black text-nav-label rounded-[4px] focus:outline-none focus:border-[#FFD111] appearance-none cursor-pointer transition-all duration-700"
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
                          className="flex-1 p-1.5 [@media(display-mode:fullscreen)]:p-2.5 border border-black/30 bg-transparent text-black text-nav-label rounded-[4px] transition-all duration-700 focus:outline-none focus:border-[#FFD111]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-nav-label text-black mb-0.5 [@media(display-mode:fullscreen)]:mb-1.5 transition-all duration-700">Service Interested In</label>
                    <select
                      name="service"
                      required
                      defaultValue=""
                      className="w-full p-1.5 [@media(display-mode:fullscreen)]:p-2.5 border border-black/30 bg-transparent text-black text-nav-label rounded-[4px] focus:outline-none focus:border-[#FFD111] appearance-none cursor-pointer transition-all duration-700"
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
                    <label htmlFor="f-message" className="block text-nav-label text-black mb-0.5 [@media(display-mode:fullscreen)]:mb-1.5 transition-all duration-700">Leave a message</label>
                    <textarea
                      id="f-message"
                      name="message"
                      required
                      className="w-full min-h-[50px] [@media(display-mode:fullscreen)]:min-h-[70px] p-1.5 [@media(display-mode:fullscreen)]:p-2.5 border border-black/30 bg-transparent text-black text-nav-label rounded-[4px] transition-all duration-700 focus:outline-none focus:border-[#FFD111] resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-1.5 [@media(display-mode:fullscreen)]:pt-2 transition-all duration-700">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full btn-submit py-2 [@media(display-mode:fullscreen)]:py-3 px-8 text-nav-label tracking-[0.15em] uppercase rounded-full active:scale-[0.99] disabled:opacity-50"
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
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
