import React from "react";

const SectionD = () => {
  // Steps data object
  const sectionData = {
    steps: [
      {
        title: "Post Your Energy Role",
        description: "Create detailed job postings with technical requirements, certifications, and project specifics across all energy sectors. Your role goes live instantly to our network of qualified professionals."
      },
      {
        title: "AI Screens Candidates",
        description: "Our conversational AI conducts intelligent first-round interviews, assessing technical competencies, safety compliance, project experience, and availability—eliminating unqualified applicants automatically."
      },
      {
        title: "Review & Select",
        description: "Access standardized candidate profiles with structured data highlighting skills, certifications, project history, and references. Compare qualified candidates side-by-side and make informed decisions quickly."
      },
      {
        title: "Onboard & Manage",
        description: "Complete the full contractor lifecycle: generate contracts, handle payroll, ensure compliance, manage documentation, and process secure payments—all from one platform with audit-ready records."
      }
    ]
  };

  // Step icons array (you'll need to define these or import from icons object)
  

  return (
    <div className="w-full relative bg-white flex flex-col items-start py-12 md:py-24 px-5 md:px-[120px] font-poppins">
      {/* Mobile-only gradient top border */}
      <div
        className="lg:hidden absolute top-0 left-0 right-0 h-[3px] pointer-events-none"
      />
      <div className="w-full flex flex-col items-start gap-12 md:gap-20 max-w-[1440px] mx-auto">
        {/* Heading section */}
        <div className="self-stretch flex flex-col items-center relative isolate gap-4 text-center">
          {/* Tag */}
          <div
            className="relative text-[16px] leading-[150%] flex items-center justify-center z-[0] shrink-0"
           
          >
            For Employers
          </div>

          {/* Title */}
          <div className="z-[1] w-full max-w-[544px]">
            <div className="relative tracking-[-0.9px] text-[26px] leading-[140%] md:text-[42px] md:leading-[130%] font-semibold text-[#0f172a]">
              <span>Hire Energy Talent, Powered by AI</span>
            </div>
          </div>

          {/* Accent blur blob */}
          <div
            className="hidden md:block w-[451px] h-[451px] absolute top-[-129px] left-[-340px] [filter:blur(90.2px)] rounded-[9999px] mix-blend-multiply z-[2] shrink-0 pointer-events-none"
          />

          {/* Subtitle */}
          <div className="relative text-[16px] leading-6 text-[#64748b] z-[3] w-full max-w-[700px]">
            Connect with specialized energy professionals through intelligent matching, AI-driven screening, and streamlined contractor management.
          </div>
        </div>

        {/* Steps row */}
        <div className="self-stretch flex flex-wrap md:flex-nowrap items-start justify-center gap-8 md:gap-[21px] relative text-center text-[#0f172a]">
          {/* Connecting line (desktop only) */}
          <div 
            className="hidden md:block h-px w-full absolute top-[48px] left-0 right-0 z-[0] pointer-events-none"
            style={{ background: "linear-gradient(90deg, rgba(226,232,240,0), #e2e8f0 50%, rgba(226,232,240,0))" }}
          />

          {sectionData.steps.map((step, index) => (
            <div key={index} className="w-full md:flex-1 flex flex-col items-center relative z-[1]">
              {/* Icon */}
              <div className="w-24 h-24 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center shrink-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                <img src="" alt="" className="w-[32px] h-[32px]" />
              </div>

              {/* Step content */}
              <div className="flex flex-col items-center gap-1 mt-3">
                <div className="flex flex-col items-center pb-2">
                  <div className="text-[20px] leading-7 font-semibold">
                    {`${index + 1}.`} {step.title}
                  </div>
                </div>
                <div className="text-[14px] text-[#64748b] font-[400] leading-[22.75px] px-4">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionD;