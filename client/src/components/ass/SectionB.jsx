import React from "react";

const SectionB = () => {
  return (
    <div className="w-full" style={{ background: "#f8fafc" }}>
      <section
        className="w-full rounded-t-[40px] sm:rounded-t-[100px] py-12 sm:py-16 lg:py-24 px-5 sm:px-10 lg:px-[120px]"
        style={{
          borderTop: "3px solid transparent",
          background: `linear-gradient(white, white) padding-box, linear-gradient(90deg, #6366f1, #8b5cf6) border-box`,
        }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[48px] md:gap-[64px]">

          {/* ============================================================ */}
          {/* HEADER                                                        */}
          {/* ============================================================ */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-poppins font-semibold text-[26px] md:text-[42px] tracking-[-0.9px] leading-[140%] md:leading-[40px] text-[#051F24]">
              Why the industry chooses{" "}
              <span style={{ color: "#6366f1" }}>avua</span>
            </h2>
            <p className="font-poppins text-[16px] leading-6 text-[#64748b] max-w-[576px]">
              Discover why leading companies choose avua for their renewable energy projects
            </p>
          </div>

          {/* ============================================================ */}
          {/* CARDS ROW                                                     */}
          {/* ============================================================ */}
          <div className="w-full flex flex-col md:flex-row items-stretch gap-6 md:gap-[24px]">
            
            {/* CARD 1 */}
            <div className="flex-1 relative">
              <div className="h-full flex flex-col justify-start pl-[30px] pr-[15px] py-[25px] rounded-2xl bg-white/70 backdrop-blur-sm border border-[rgba(226,232,240,0.8)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
                <img src="https://via.placeholder.com/48x48?text=Icon1" alt="" className="w-12 h-12" />
                <div className="mt-6">
                  <h3 className="font-poppins font-medium text-[18px] leading-7 text-[#0f172a] mb-2">
                    Industry Expertise
                  </h3>
                  <p className="font-poppins text-[14px] font-[400] leading-[22.75px] text-[#64748b]">
                    Deep domain knowledge in solar, wind, and energy storage sectors
                  </p>
                </div>
              </div>
              
              {/* Arrow connector */}
              <div className="flex items-center justify-center absolute -bottom-[32px] left-1/2 -translate-x-1/2 rotate-90 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:left-auto md:-right-8 md:rotate-0 z-10 w-10 h-10 rounded-full"
                style={{ background: "#6366f1", boxShadow: "0px 5px 20px rgba(99, 102, 241, 0.3)" }}>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex-1 relative">
              <div className="h-full flex flex-col justify-start pl-[30px] pr-[15px] py-[25px] rounded-2xl bg-white/70 backdrop-blur-sm border border-[rgba(226,232,240,0.8)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
                <img src="https://via.placeholder.com/48x48?text=Icon2" alt="" className="w-12 h-12" />
                <div className="mt-6">
                  <h3 className="font-poppins font-medium text-[18px] leading-7 text-[#0f172a] mb-2">
                    Verified Talent
                  </h3>
                  <p className="font-poppins text-[14px] font-[400] leading-[22.75px] text-[#64748b]">
                    Rigorous background checks and skill assessments
                  </p>
                </div>
              </div>
              
              {/* Arrow connector */}
              <div className="flex items-center justify-center absolute -bottom-[32px] left-1/2 -translate-x-1/2 rotate-90 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:left-auto md:-right-8 md:rotate-0 z-10 w-10 h-10 rounded-full"
                style={{ background: "#6366f1", boxShadow: "0px 5px 20px rgba(99, 102, 241, 0.3)" }}>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="flex-1 relative">
              <div className="h-full flex flex-col justify-start pl-[30px] pr-[15px] py-[25px] rounded-2xl bg-white/70 backdrop-blur-sm border border-[rgba(226,232,240,0.8)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
                <img src="https://via.placeholder.com/48x48?text=Icon3" alt="" className="w-12 h-12" />
                <div className="mt-6">
                  <h3 className="font-poppins font-medium text-[18px] leading-7 text-[#0f172a] mb-2">
                    Faster Matching
                  </h3>
                  <p className="font-poppins text-[14px] font-[400] leading-[22.75px] text-[#64748b]">
                    AI-powered algorithms connect you with the right opportunities
                  </p>
                </div>
              </div>
              
              {/* Arrow connector */}
              <div className="flex items-center justify-center absolute -bottom-[32px] left-1/2 -translate-x-1/2 rotate-90 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:left-auto md:-right-8 md:rotate-0 z-10 w-10 h-10 rounded-full"
                style={{ background: "#6366f1", boxShadow: "0px 5px 20px rgba(99, 102, 241, 0.3)" }}>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="flex-1 relative">
              <div className="h-full flex flex-col justify-start pl-[30px] pr-[15px] py-[25px] rounded-2xl bg-white/70 backdrop-blur-sm border border-[rgba(226,232,240,0.8)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
                <img src="https://via.placeholder.com/48x48?text=Icon4" alt="" className="w-12 h-12" />
                <div className="mt-6">
                  <h3 className="font-poppins font-medium text-[18px] leading-7 text-[#0f172a] mb-2">
                    End-to-End Support
                  </h3>
                  <p className="font-poppins text-[14px] font-[400] leading-[22.75px] text-[#64748b]">
                    Dedicated support throughout your project lifecycle
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default SectionB;