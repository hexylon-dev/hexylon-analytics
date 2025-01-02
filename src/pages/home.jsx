import React from "react";
import Navbar from "../components/Navbar1";
import HeroSection from "../components/HeroSection";
import HowWeWork from "../components/HowWeWork12";
import WhyUs from "../components/WhyUs4";
import IndustriesSection from "../components/IndustriesSection2";
import OurWorkSection from "../components/OurWork4";
import CommitmentSection from "../components/OurCommit1";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import SSEComponent from "../pages/SSEComponent";
function Home() {

  const navigate = useNavigate();

  const handleNavigateToContactPage = () => {
    window.location.href = "/contact-us";
  };

  const handleNavigateToCareersPage = () => {
    navigate("/careers");
  };

  const handleNavigateToBlogPage = () => {
    window.location.href = "/blogs";
  }

  return (
    <>
      <Navbar handleNavigateToContactPage={handleNavigateToContactPage} />
      <HeroSection handleNavigateToContactPage={handleNavigateToContactPage} />
      <HowWeWork />
      <SSEComponent />
      <WhyUs />
      <IndustriesSection />
      <OurWorkSection />
      <CommitmentSection handleNavigateToContactPage={handleNavigateToContactPage} />
      <Footer handleNavigateToContactPage={handleNavigateToContactPage} />

      {/* Career Navigation Button */}
      <div className="text-center py-8">
        <button
          onClick={handleNavigateToCareersPage}
          className="bg-[#FF6600] text-white py-3 px-8 rounded-full hover:bg-[#FF8533] transition duration-300"
        >
          Explore Careers
        </button>
      </div>
    </>
  );
}

export default Home;
