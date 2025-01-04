import React from "react";
import OurWorkBusinessOperation from "../assets/svgs/OurWorkBusinessOperation";
import OurWorkWebDevelopment from "../assets/svgs/OurWorkWebDevelopment";
import OurWorkAiDriven from "../assets/svgs/OurWorkAiDriven";

function OurWork() {
  return (
    <div className="bg-black relative ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black p-10 pt-28 max-w-[1500px]">
        <div className="block rounded-3xl border border-[#2182DF] p-4 max-w-2xl">
          <h2 className="mt-2 font-semibold text-2xl text-white">
            Transforming Business Operations
          </h2>
          <div className="flex flex-col xl:flex-row mt-7">
            <p className="sm:mt-1 block text-sm sm:text-base text-[#B6B6B6] max-w-[350px] order-2 lg:order-2 ">
              Our solutions empower businesses to streamline processes across
              departments such as HR, Sales, and Purchasing. We integrate
              advanced automation and provide user-friendly dashboards for
              real-time insights, ensuring smooth operations and enhanced
              productivity in Assembly, Customer Support, and Admin functions.
            </p>
            <div className="inline-flex align-middle justify-center items-center select-none text-white order-1 lg:order-2">
              <OurWorkBusinessOperation className="h-[200px] w-[250px]" />
            </div>
          </div>
        </div>

        <div className="block rounded-3xl border border-[#2182DF] p-4 max-w-2xl">
          <h2 className="mt-2 font-semibold text-2xl text-white">
            Web Development & Empowering Platforms
          </h2>
          <div className="flex mt-7">
            <p className="sm:mt-1 block text-sm sm:text-base text-[#B6B6B6] max-w-[350px]">
              We create custom websites that elevate your online presence and
              streamline business operations. Tailored to meet your specific
              needs, our user-friendly solutions ensure a seamless digital
              experience. For instance, platforms like Reequitiz empower
              individuals to confidently navigate financial landscapes, offering
              a blend of education and practical strategies to transform
              beginners into informed contributors.
            </p>
            <div className="inline-flex align-middle justify-center items-center select-none text-white">
              <OurWorkWebDevelopment className="h-[200px] w-[250px]" />
            </div>
          </div>
        </div>

        <div className="block rounded-3xl border border-[#2182DF] p-4 sm:col-span-2 max-w-4xl">
          <h2 className="mt-2 font-semibold text-2xl text-white">
            AI-Driven Personalized Learning
          </h2>
          <div className="flex mt-7">
            <p className="sm:mt-1 block text-sm sm:text-base text-[#B6B6B6] max-w-[750px]">
              Our Education AI system is designed to create customized learning
              paths that adapt to each student's unique needs and strengths.
              Offering multilingual support, interactive learning environments,
              and continuous progress tracking, it ensures a tailored
              educational journey. The platform also includes career
              assessments, providing students with clarity and guidance as they
              navigate their path toward success.
            </p>
            <div className="inline-flex align-middle justify-center items-center select-none text-white">
              <OurWorkAiDriven className="h-[200px] w-[250px]" />
            </div>
            <div>
            <button className="group relative px-6 py-2 bg-black border border-blue-500 rounded-md ">
                      <div className="absolute inset-0 rounded-md bg-black  blur-md transition-all group-hover:blur-lg" />
                      <div className="relative flex items-center space-x-2 text-blue-500">
                        <span className="text-lg">read more</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </button>
            </div>
          </div>
            
        </div>
        
      </div>
    </div>
  );
}

export default OurWork;
