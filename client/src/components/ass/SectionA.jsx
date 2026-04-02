import React from "react";

const SectionA = () => {
  return (
    <section className="w-full font-poppins text-white overflow-hidden sm:mt-20" style={{ backgroundColor: "#0A1927" }}>

      {/* ── Trust bar ── */}
      <div className="w-full py-3 px-4" style={{ backgroundColor: "#0D2A33" }}>
        <div className="max-w-[1440px] mx-auto flex flex-row items-center justify-between sm:justify-center sm:gap-10 lg:gap-16">

          {/* Item 1: Trusted by job seekers */}
          <div className="flex flex-row items-center gap-2 sm:gap-3">
            <img src="https://placehold.co/20x20" alt="" className="w-5 h-5 shrink-0" />
            <span className="text-[12px] sm:text-[14px] text-white/90 tracking-[-0.01em] leading-[1.6] sm:whitespace-nowrap">
              Trusted by 100,000+ job seekers
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-4 bg-white/20 shrink-0" />

          {/* Item 2: Star rating */}
          <div className="flex flex-row items-center gap-2 sm:gap-3">
            <img src="https://placehold.co/20x20" alt="" className="w-5 h-5 shrink-0" />
            <div className="flex items-center gap-0.5">
              <span className="text-[14px] leading-none text-[#ffcf25]">★</span>
              <span className="text-[14px] leading-none text-[#ffcf25]">★</span>
              <span className="text-[14px] leading-none text-[#ffcf25]">★</span>
              <span className="text-[14px] leading-none text-[#ffcf25]">★</span>
              <span className="text-[14px] leading-none text-white/30">★</span>
            </div>
            <span className="hidden sm:inline text-[14px] text-[#ffcf25] tracking-[-0.01em] leading-[1.6] whitespace-nowrap font-medium">
              4.6/5 stars
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-4 bg-white/20 shrink-0" />

          {/* Item 3: GDPR */}
          <div className="hidden sm:flex flex-row items-center gap-3">
            <img src="https://placehold.co/20x20" alt="" className="w-5 h-5 shrink-0" />
            <span className="text-[14px] text-white/90 tracking-[-0.01em] leading-[1.6] whitespace-nowrap">
              GDPR certified data protection
            </span>
          </div>

        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[76px] pt-16 pb-20 lg:pt-[59px] lg:pb-28">

        {/* Two-column layout: left content + right mockup */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-10">

          {/* ── Left column ── */}
          <div className="flex-1 flex flex-col gap-[30px]">

            {/* Badge row */}
            <div className="flex items-center gap-2">
              <img src="https://placehold.co/34x34" alt="" className="w-[34px] h-[34px] shrink-0" />
              <div className="rounded-lg border border-white/10 px-3 py-1.5" style={{ backgroundColor: "#E8F4F0" }}>
                <span className="text-[14px] font-medium text-[#051F24] leading-[160%] tracking-normal">
                  TRUSTED SOLUTION
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-[42px] sm:text-[46px] lg:text-[52px] font-semibold tracking-[-2.77px] leading-[115%] lg:leading-[120%] text-[#051F24]">
              Streamline Your{" "}
              <span style={{ color: "#00C4B4" }}>Global </span>
              Hiring.
            </h1>

            {/* Description */}
            <p className="text-[14px] sm:text-[16px] font-normal leading-[160%] tracking-normal text-[#68656C] max-w-[520px]">
              AI-powered recruitment platform that helps you find, screen, and hire the best talent faster than ever before.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href="/employer-sign-up"
                className="w-full sm:w-auto rounded-[14px] text-[#FFFFFF] font-semibold text-[16px] sm:text-[14px] leading-[19.2px] tracking-normal py-5 sm:py-4 px-6 text-center hover:opacity-90 transition-opacity cursor-pointer"
                style={{ background: "linear-gradient(to right, #00C4B4, #008B80)" }}
              >
                Post a Job
              </a>
              <a
                href="/signup"
                className="w-full sm:w-auto rounded-[14px] border border-[rgba(0,0,0,0.06)] text-[#051F24] font-semibold text-[16px] sm:text-[14px] leading-[19.2px] tracking-normal text-center py-5 sm:py-4 px-6 transition-colors cursor-pointer"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                Sign Up Free
              </a>
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="flex-1 w-full lg:max-w-[609px] self-start mt-[20px] relative lg:right-12">
            <img
              src="https://placehold.co/609x487"
              alt="Tech hiring platform"
              className="w-full h-auto"
              width={609}
              height={487}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SectionA;