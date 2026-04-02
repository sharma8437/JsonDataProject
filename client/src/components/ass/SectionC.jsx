import React from "react";

// Employer challenges data
const employerChallenges = [
  {
    title: "Talent Shortage",
    description: "Critical shortage of experienced engineers and specialized professionals."
  },
  {
    title: "Niche Requirements",
    description: "Highly specific technical skills across multiple energy sub-sectors."
  },
  {
    title: "Contract Complexity",
    description: "Project-based workforce with varying contract lengths and requirements."
  },
  {
    title: "Global Competition",
    description: "Competing worldwide for qualified, experienced energy professionals."
  },
  {
    title: "Slow Processes",
    description: "Extended time-to-hire delays critical project timelines and delivery."
  }
];

// Professional challenges data
const professionalChallenges = [
  {
    title: "Scattered Opportunities",
    description: "Difficulty finding relevant energy roles consolidated in one platform."
  },
  {
    title: "Unclear Expectations",
    description: "Inconsistent requirements across different energy sub-sectors."
  },
  {
    title: "Resume Complexity",
    description: "Structuring technical, project-based resumes for energy sector."
  },
  {
    title: "Limited Visibility",
    description: "Hard to connect with employers hiring for contract or project work."
  },
  {
    title: "Compliance Navigation",
    description: "Managing complex certifications and regulatory requirements."
  }
];

const ChallengeItem = ({ icon, title, description }) => (
  <div className="self-stretch rounded-[12px] bg-[#f8fafc] flex items-start p-4 gap-4">
    <img src={icon} alt="" className="flex-shrink-0 w-5 h-5" />
    <div className="flex-1 flex flex-col items-start gap-1">
      <div className="self-stretch flex flex-col items-start">
        <div className="relative font-poppins font-medium text-[14px] leading-5 text-[#0f172a]">{title}</div>
      </div>
      <div className="self-stretch flex flex-col items-start text-[12px] text-[#64748b]">
        <div className="self-stretch relative font-poppins font-normal leading-[19.5px]">{description}</div>
      </div>
    </div>
  </div>
);

const SectionC = () => {
 

  return (
    <div
      className="w-full relative overflow-hidden flex flex-col items-center py-12 md:py-24 px-5 md:px-[140px] box-border isolate gap-8 md:gap-12 text-center text-[42px] text-[#0f172a] font-poppins"
     
    >
      {/* Background blur blob */}
      <div
        className="w-[800px] h-[400px] absolute top-[calc(50%_-_200px)] left-[calc(50%_-_400px)] [filter:blur(80px)] rounded-[9999px] z-[0] pointer-events-none"
      />

      {/* Heading section */}
      <div className="self-stretch flex flex-col items-center relative isolate gap-4 z-[1]">
        {/* Title */}
        <div className="self-stretch flex flex-col items-center z-[0] shrink-0">
          <div className="relative font-poppins font-semibold text-[26px] leading-[140%] md:text-[42px] md:leading-[130%] tracking-[-0.9px] text-center">
            <span>Energy Talent is Complex.</span>
            <span className="text-[#12279e22]">Hiring</span>
            <span>Shouldn't Be.</span>
          </div>
        </div>

        {/* Accent blob behind heading */}
        <div
          className="w-[451px] h-[451px] absolute top-[-89px] left-[354.5px] [filter:blur(90.2px)] rounded-[9999px] mix-blend-multiply z-[1] shrink-0 pointer-events-none"
        />

        {/* Subtitle */}
        <div className="self-stretch relative font-poppins font-normal text-[16px] leading-6 text-[#64748b] text-center z-[2] shrink-0">
          The global energy sector is transforming at unprecedented speed. Traditional recruitment methods can't keep pace with the specialized, project-based nature of modern energy work.
        </div>
      </div>

      {/* Cards container */}
      <div className="w-full flex flex-col items-center max-w-[1440px] z-[2] text-left text-[24px]">
        <div className="self-stretch flex flex-col md:flex-row items-stretch relative isolate gap-2.5">
          {/* Employer card */}
          <div
            className="self-stretch flex-1 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[20px] bg-white border-solid border-t-[4px] flex flex-col items-start pt-6 px-3 pb-4 md:p-8 gap-8 z-[0]"
          >
            {/* Card header */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 p-2 rounded-[8px] flex-shrink-0 flex items-center justify-center">
                <img src="image" alt="" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col items-start">
                <div className="relative font-poppins font-semibold text-[20px] leading-7 md:text-[24px] md:leading-[28px] text-[#0f172a]">Employer Challenges</div>
              </div>
            </div>

            {/* Challenge items */}
            <div className="self-stretch flex flex-col items-start gap-4 shrink-0">
              {employerChallenges.map((item, index) => (
                <ChallengeItem 
                  key={index} 
                  
                  title={item.title} 
                  description={item.description} 
                />
              ))}
            </div>
          </div>

          {/* Center VS element (desktop only) */}
          <div className="flex items-center justify-center relative w-full h-[100px] md:w-28 lg:w-36 md:h-auto md:shrink-0 z-[1]">
            {/* Full-width horizontal gradient line */}
            <div
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px]"
            
            />

            {/* Rotated white card */}
            <div className="relative w-[60px] h-[60px] bg-white rounded-[20px] rotate-12" />

            {/* VS text */}
            <span
              className="absolute font-poppins font-semibold text-[17.68px] leading-[25.26px] z-[3]"
       
            >
              VS
            </span>
          </div>

          {/* Professional card */}
          <div className="self-stretch flex-1 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[20px] bg-white border-[#2563eb] border-solid border-t-[4px] flex flex-col items-start pt-6 px-3 pb-4 md:p-8 gap-8 z-[2]">
            {/* Card header */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 p-2 rounded-[8px] flex-shrink-0 flex items-center justify-center">
                <img src="" alt="" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col items-start">
                <div className="relative font-poppins font-semibold text-[20px] leading-7 md:text-[24px] md:leading-[28px] text-[#0f172a]">Professional Challenges</div>
              </div>
            </div>

            {/* Challenge items - using professional icons from employerIcons array */}
            <div className="self-stretch flex flex-col items-start gap-4 shrink-0">
              {professionalChallenges.map((item, index) => (
                <ChallengeItem 
                  key={index} 
              
                  title={item.title} 
                  description={item.description} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionC;