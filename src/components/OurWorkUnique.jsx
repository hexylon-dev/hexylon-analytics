import { Settings, Maximize2 } from "lucide-react";
import OurWorkCustomSolution from "../assets/svgs/OurWorkCustomSolution";
import OurWorkScalable from "../assets/svgs/OurWorkScalable";
import OurWorkResultOriented from "../assets/svgs/OurWorkResultOriented";
import OurWorkClientCentric from "../assets/svgs/OurWorkClientCentric";
import OurWorkContinuousImprovement from "../assets/svgs/OurWorkContinuousImprovement";

const items = [
  {
    title: "Custom-Fit Solutions",
    description:
      "We build AI tools that are perfectly aligned with your business objectives, ensuring a smooth integration into your existing processes without disruption.",
    icon: <OurWorkCustomSolution />,
  },
  {
    title: "Scalable",
    description:
      "Our solutions are built to evolve with your business, adapting to new challenges and opportunities as you grow.",
    icon: <OurWorkScalable />,
  },
  {
    title: "Result-Oriented",
    description:
      "We focus on delivering measurable outcomes, whether it's streamlining workflows, enhancing productivity, or improving decision-making through real-time insights.",
    icon: <OurWorkResultOriented />,
  },
  {
    title: "Continuous Improvement",
    description:
      "We constantly refine and optimize AI models based on real-world feedback, ensuring your solutions stay effective and up-to-date.",
    icon: <OurWorkResultOriented />,
  },

  {
    title: "Client-Centric",
    description:
      "Our dedicated support and personalized approach ensure that we're with you every step of the way, helping you achieve long-term success.",
    icon: <OurWorkClientCentric />,
  },
];

export default function OurWorkUnique() {
  return (
    <div className="bg-black text-white px-6 py-12 min-h-screen">
      <h2 className="2xl:text-7xl md:text-6xl text-4xl font-bold uppercase  mb-4 text-white pb-2 inline-block text-center w-[100%]">
        What Makes Us Unique{" "}
      </h2>
      <p className="md:text-lg text-sm  font-semibold  text-[#ABABAB] text-center mb-12">
        Unique, Scalable, and Results-Driven AI that Grows with You
      </p>
      <div className="max-w-[1500px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-0">
          {/* Custom-Fit Solutions Card */}
          <div className="px-3 border border-t-0 border-[#606060] py-10 relative ">
            <div className="absolute top-[6.7rem] left-0 h-[40px] w-[6px] bg-white rounded-tr-3xl rounded-br-3xl"></div>
            <div className="max-w-[400px] m-auto relative">
              <div className="mb-6">
                <OurWorkCustomSolution
                  className="w-12 h-12 text-white"
                  strokeWidth={1}
                />
              </div>
              <h2 className="md:text-2xl text-xl font-semibold mb-4 ">
                Custom-Fit Solutions
              </h2>

              <p className="text-[#868686] md:text-lg text-normal leading-relaxed">
                We build AI tools that are perfectly aligned with your business
                objectives, ensuring a smooth integration into your existing
                processes without disruption.
              </p>
            </div>
          </div>

          <div className="px-3 border border-t-0 border-[#606060] py-10  relative">
          <div className="absolute top-[6.7rem] left-0 h-[40px] w-[6px] bg-white rounded-tr-3xl rounded-br-3xl"></div>

            <div className="max-w-[400px] m-auto">
              <div className="mb-6">
                <OurWorkScalable
                  className="w-12 h-12 text-white"
                  strokeWidth={1}
                />
              </div>
              <h2 className="md:text-2xl text-xl font-semibold mb-4">
                Scalable
              </h2>
              <p className="text-[#868686] md:text-lg text-normal leading-relaxed">
                Our solutions are built to evolve with your business, adapting
                to new challenges and opportunities as you grow.
              </p>
            </div>
          </div>

          <div className="px-3 border border-t-0     border-[#606060] py-10  relative">
          <div className="absolute top-[6.7rem] left-0 h-[40px] w-[6px] bg-white rounded-tr-3xl rounded-br-3xl"></div>

            <div className="max-w-[400px] m-auto">
              <div className="mb-6">
                <OurWorkResultOriented
                  className="w-12 h-12 text-white"
                  strokeWidth={1}
                />
              </div>
              <h2 className="md:text-2xl text-xl font-semibold mb-4">
                Result-Oriented
              </h2>
              <p className="text-[#868686] text-lg md:text-lg text-normal leading-relaxed">
                We focus on delivering measurable outcomes, whether it's
                streamlining workflows, enhancing productivity, or improving
                decision-making through real-time insights.
              </p>
            </div>
          </div>

          <div className="px-3 border border-t-0 lg:border-b-0 border-b-[1px]  border-[#606060] py-10  relative">
          <div className="absolute top-[6.7rem] left-0 h-[40px] w-[6px] bg-white rounded-tr-3xl rounded-br-3xl"></div>

            <div className="max-w-[400px] m-auto">
              <div className="mb-6">
                <OurWorkContinuousImprovement
                  className="w-12 h-12 text-white"
                  strokeWidth={1}
                />
              </div>
              <h2 className="md:text-2xl text-xl font-semibold mb-4">
                Continuous Improvement{" "}
              </h2>
              <p className="text-[#868686] md:text-lg text-normal leading-relaxed">
                We constantly refine and optimize AI models based on real-world
                feedback, ensuring your solutions stay effective and up-to-date.
              </p>
            </div>
          </div>

          <div className="px-3 border border-t-0 border-b-0 border-[#606060] py-10  relative">
            <div className="absolute top-[6.7rem] left-0 h-[40px] w-[4px] bg-white"></div>
            <div className="max-w-[400px] m-auto">
              <div className="mb-6">
                <OurWorkClientCentric
                  className="w-12 h-12 text-white"
                  strokeWidth={1}
                />
              </div>
              <h2 className="md:text-2xl text-xl font-semibold mb-4">
                Client-Centric
              </h2>
              <p className="text-[#868686] md:text-lg text-normal leading-relaxed">
                Our dedicated support and personalized approach ensure that
                we're with you every step of the way, helping you achieve
                long-term success.
              </p>
            </div>
          </div>
          <div className="px-3 border border-t-0 border-b-0 border-[#606060] py-10 "></div>
        </div>
      </div>
    </div>
  );
}
