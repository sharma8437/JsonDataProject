import React from "react";

/* ═══════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════ */
const SectionE = () => {
  return (
    <section
      className="w-full lg:rounded-t-[100px] py-16 px-5 md:px-12 lg:px-24 font-poppins"
      style={{
        borderTop: "3px solid transparent",
        background: `linear-gradient(white, white) padding-box, linear-gradient(90deg, #3b82f6, #06b6d4) border-box`,
      }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">

        {/* ── HEADER ── */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-[16px] leading-[150%]" style={{ color: "#3b82f6" }}>
            Why avua?
          </p>

          <h2 className="font-semibold text-[26px] leading-[140%] md:text-[42px] md:leading-[130%] tracking-[-0.9px] text-[#0f172a] max-w-xl">
            The Future of{" "}
            <span style={{ color: "#3b82f6" }}>Clean Energy</span>
            <br />
            Recruitment
          </h2>

          <p className="text-[#64748b] text-[16px] leading-6 max-w-[940px]">
            Revolutionizing how companies and professionals connect in the renewable energy sector with AI-powered matching and verified talent pools.
          </p>
        </div>

        {/* ── CARDS ROW ── */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6">

          {/* ── CARD 1 — Employers ── */}
          <div
            className="flex-1 flex flex-col gap-7 rounded-[20px] bg-[#f8fafc] py-5 px-3 md:p-8
              border-t-4
              shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
            style={{ borderTopColor: "#3b82f6" }}
          >
            {/* Card header */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center justify-center rounded-[10.13px] bg-[#FFFFFF] p-[10.13px] shrink-0 shadow-[0px_0.84px_1.69px_0px_rgba(0,0,0,0.05)]">
                <img src="https://via.placeholder.com/27x27?text=🏢" alt="" className="w-[27px] h-[27px]" />
              </div>
              <h3 className="font-semibold text-[20px] md:text-[24px] leading-[30.39px] tracking-[-0.63px] text-[#0f172a]">
                For Employers
              </h3>
            </div>

            {/* Description */}
            <p className="text-[#64748b] text-[14px] leading-[1.7]">
              Access pre-vetted renewable energy professionals and reduce hiring time by up to 85% with our AI-driven matching platform.
            </p>

            {/* Pills grid */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row md:flex-wrap gap-3">
                <div className="w-full md:flex-1 md:min-w-[140px] rounded-2xl bg-white border border-[rgba(0,0,0,0.1)] flex flex-col justify-center p-4 gap-1">
                  <p className="font-semibold text-[27.68px] leading-[27.68px] tracking-[-1.38px] md:text-[22px] md:leading-snug md:tracking-tighter text-[#0f172a]">
                    85%
                  </p>
                  <div className="flex items-center gap-2 opacity-70">
                    <img src="https://via.placeholder.com/16x16?text=📉" alt="" className="w-4 h-4 shrink-0" />
                    <p className="text-[12px] leading-[16.15px] md:text-[11px] md:leading-[1.4] text-black">
                      Reduction in time-to-hire
                    </p>
                  </div>
                </div>

                <div className="w-full md:flex-1 md:min-w-[140px] rounded-2xl bg-white border border-[rgba(0,0,0,0.1)] flex flex-col justify-center p-4 gap-1">
                  <p className="font-poppins font-semibold text-[16px] leading-[27.68px] tracking-[-0.5px] md:text-[15px] md:leading-snug md:tracking-tight text-[#0f172a]">
                    Access global talent
                  </p>
                  <div className="flex items-center gap-2 opacity-70">
                    <img src="https://via.placeholder.com/16x16?text=🌍" alt="" className="w-4 h-4 shrink-0" />
                    <p className="font-poppins text-[12px] leading-[16.15px] md:text-[11px] md:leading-[1.4] text-black">
                      In renewable energy sectors
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:flex-wrap gap-3">
                <div className="w-full md:flex-1 md:min-w-[140px] rounded-2xl bg-white border border-[rgba(0,0,0,0.1)] flex flex-col justify-center p-4 gap-1">
                  <p className="font-poppins font-semibold text-[16px] leading-[27.68px] tracking-[-0.5px] md:text-[15px] md:leading-snug md:tracking-tight text-[#0f172a]">
                    Lower recruitment costs
                  </p>
                  <div className="flex items-center gap-2 opacity-70">
                    <img src="https://via.placeholder.com/16x16?text=💰" alt="" className="w-4 h-4 shrink-0" />
                    <p className="font-poppins text-[12px] leading-[16.15px] md:text-[11px] md:leading-[1.4] text-black">
                      Compared to traditional agencies
                    </p>
                  </div>
                </div>

                <div className="w-full md:flex-1 md:min-w-[140px] rounded-2xl bg-white border border-[rgba(0,0,0,0.1)] flex flex-col justify-center p-4 gap-1">
                  <p className="font-poppins font-semibold text-[16px] leading-[27.68px] tracking-[-0.5px] md:text-[15px] md:leading-snug md:tracking-tight text-[#0f172a]">
                    Ensure compliance
                  </p>
                  <div className="flex items-center gap-2 opacity-70">
                    <img src="https://via.placeholder.com/16x16?text=✅" alt="" className="w-4 h-4 shrink-0" />
                    <p className="font-poppins text-[12px] leading-[16.15px] md:text-[11px] md:leading-[1.4] text-black">
                      With automated documentation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 2 — Professionals ── */}
          <div
            className="flex-1 flex flex-col gap-7 rounded-[20px] bg-[#f8fafc] py-5 px-3 md:p-8
              border-t-4 border-[#2563eb]
              shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
          >
            {/* Card header */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center justify-center rounded-[10.13px] bg-[#FFFFFF] p-[10.13px] shrink-0 shadow-[0px_0.84px_1.69px_0px_rgba(0,0,0,0.05)]">
                <img src="https://via.placeholder.com/27x27?text=👤" alt="" className="w-[27px] h-[27px]" />
              </div>
              <h3 className="font-semibold text-[20px] md:text-[24px] leading-[30.39px] tracking-[-0.63px] text-[#0f172a]">
                For Professionals
              </h3>
            </div>

            {/* Description */}
            <p className="text-[#64748b] text-[14px] leading-[1.7]">
              Connect with leading clean energy companies and access exclusive opportunities tailored to your expertise and career goals.
            </p>

            {/* Pills grid */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row md:flex-wrap gap-3">
                <div className="w-full md:flex-1 md:min-w-[140px] rounded-2xl bg-white border border-[rgba(0,0,0,0.1)] flex flex-col justify-center p-4 gap-1">
                  <p className="font-poppins font-semibold text-[16px] leading-[27.68px] tracking-[-0.5px] md:text-[15px] md:leading-snug md:tracking-tight text-[#0f172a]">
                    Direct access
                  </p>
                  <div className="flex items-center gap-2 opacity-70">
                    <img src="https://via.placeholder.com/16x16?text=🔑" alt="" className="w-4 h-4 shrink-0" />
                    <p className="font-poppins text-[12px] leading-[16.15px] md:text-[11px] md:leading-[1.4] text-black">
                      To verified clean energy sector employers
                    </p>
                  </div>
                </div>

                <div className="w-full md:flex-1 md:min-w-[140px] rounded-2xl bg-white border border-[rgba(0,0,0,0.1)] flex flex-col justify-center p-4 gap-1">
                  <p className="font-poppins font-semibold text-[16px] leading-[27.68px] tracking-[-0.5px] md:text-[15px] md:leading-snug md:tracking-tight text-[#0f172a]">
                    Industry-specific resume tools
                  </p>
                  <div className="flex items-center gap-2 opacity-70">
                    <img src="https://via.placeholder.com/16x16?text=🛠️" alt="" className="w-4 h-4 shrink-0" />
                    <p className="font-poppins text-[12px] leading-[16.15px] md:text-[11px] md:leading-[1.4] text-black">
                      For technical roles
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:flex-wrap gap-3">
                <div className="w-full md:flex-1 md:min-w-[140px] rounded-2xl bg-white border border-[rgba(0,0,0,0.1)] flex flex-col justify-center p-4 gap-1">
                  <p className="font-poppins font-semibold text-[16px] leading-[27.68px] tracking-[-0.5px] md:text-[15px] md:leading-snug md:tracking-tight text-[#0f172a]">
                    Project-based opportunities
                  </p>
                  <div className="flex items-center gap-2 opacity-70">
                    <img src="https://via.placeholder.com/16x16?text=📋" alt="" className="w-4 h-4 shrink-0" />
                    <p className="font-poppins text-[12px] leading-[16.15px] md:text-[11px] md:leading-[1.4] text-black">
                      With clear requirements
                    </p>
                  </div>
                </div>

                <div className="w-full md:flex-1 md:min-w-[140px] rounded-2xl bg-white border border-[rgba(0,0,0,0.1)] flex flex-col justify-center p-4 gap-1">
                  <p className="font-poppins font-semibold text-[16px] leading-[27.68px] tracking-[-0.5px] md:text-[15px] md:leading-snug md:tracking-tight text-[#0f172a]">
                    Career development resources
                  </p>
                  <div className="flex items-center gap-2 opacity-70">
                    <img src="https://via.placeholder.com/16x16?text=📈" alt="" className="w-4 h-4 shrink-0" />
                    <p className="font-poppins text-[12px] leading-[16.15px] md:text-[11px] md:leading-[1.4] text-black">
                      For clean energy careers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SectionE;