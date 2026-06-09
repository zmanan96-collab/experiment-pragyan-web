import { Metadata } from 'next';
import Reveal from '../../components/Reveal';
import HomeSmoothScroll from '../../components/HomeSmoothScroll';
import InquiryForm from './InquiryForm';

export const metadata: Metadata = {
  title: 'Inquiry — Pragyan',
  description: "Got a project, a question, or an idea about your brand? Let's figure it out together.",
  alternates: {
    canonical: 'https://www.mypragyan.com/inquiry',
  },
};

export default function Inquiry() {
  return (
    <>
      <HomeSmoothScroll />
      <div className="noise-effect" />
      <div id="smooth-wrapper" className="smooth-wrapper w-full bg-[#FAFAFA]">
        <div id="smooth-content" className="smooth-content w-full relative">
          <section aria-label="Inquiry" className="bg-[#FAFAFA] min-h-screen md:h-screen flex flex-col items-center justify-between pt-[100px] px-0 pb-0 md:pt-[80px] lg:pt-[100px] xl:pt-[45px] [@media(display-mode:fullscreen)]:md:pt-[60px] relative font-sans">
            <div className="w-full max-w-[1650px] mx-auto px-[4vw] flex-grow flex items-center justify-center p-4 py-8 md:py-0">
              <Reveal className="w-full max-w-[1250px] md:max-w-[1000px] lg:max-w-[1100px] xl:max-w-[1550px] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] bg-white rounded-[20px] transition-all duration-700 mx-auto">
                <div className="flex max-[920px]:min-h-[480px] md:h-[65vh] md:max-h-[650px] max-[920px]:flex-col overflow-hidden rounded-[20px] transition-all duration-700" role="region" aria-labelledby="inquiry-h">
                  
                  {/* Left Side */}
                  <div className="w-[44%] bg-black flex flex-col max-[920px]:w-full relative">
                    <div className="section-noise-effect" />
                    <div className="h-1/2 flex items-center p-4 md:p-8 bg-black py-6 max-[920px]:py-6">
                      <h2 id="inquiry-h" className="text-section-heading !font-extrabold text-white transition-all duration-700 md:text-[34px] lg:text-[40px] xl:text-[54px] md:leading-[1.1]">
                        <span className="block whitespace-nowrap">Got a project,</span>
                        <span className="block whitespace-nowrap">a question, or</span>
                        <span className="block whitespace-nowrap">an idea about</span>
                        <span className="block whitespace-nowrap">your brand?</span>
                      </h2>
                    </div>
                    <div className="h-1/2 flex-grow relative bg-black overflow-hidden max-[920px]:h-[200px]">
                      <img
                        src="/assets/img/Inquiry.webp"
                        alt="Inquiry Pragyan"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover opacity-90"
                      />
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="flex-1 bg-white flex items-center justify-center p-3 md:py-4 lg:py-6 xl:py-8 md:px-5 transition-all duration-700">
                    <div className="w-full max-w-[720px] md:max-w-[1000px] p-4 md:py-4 lg:py-6 xl:py-8 md:px-6 xl:px-10 bg-white transition-all duration-700">
                      <p className="text-small-desc md:text-[13px] lg:text-[14px] xl:text-[14px] md:leading-[1.3] text-[#6A6A6A] mb-2 md:mb-3 transition-all duration-700">
                        Whether it&apos;s strategy, storytelling, or exploring how we can bring your brand to life &mdash; reach out, and we&apos;ll figure it out together.
                      </p>
                      <InquiryForm />
                    </div>
                  </div>

                </div>
              </Reveal>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
