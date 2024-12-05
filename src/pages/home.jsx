import React from "react";
import Navbar from "../components/Navbar1";
import HeroSection from "../components/HeroSection";
import HowWeWork from "../components/HowWeWork12";
import WhyUs from "../components/WhyUs4";
import IndustriesSection from "../components/IndustriesSection2";
import OurWorkSection from "../components/OurWork4";
import CommitmentSection from "../components/OurCommit1";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";

function Home() {

  const handleNavigateToContactPage = () => {
    // navigate("/contact-us");
    window.location.href = "/contact-us";
  }

  const handleNavigateToBlogPage = () => {
    window.location.href = "/blogs";
  }

  return (
    <>
        <>
          {/* <Navbar handleNavigateToContactPage={handleNavigateToContactPage} handleNavigateToBlogPage={handleNavigateToBlogPage}/> */}
          <HeroSection handleNavigateToContactPage={handleNavigateToContactPage}/>
          <HowWeWork />
          <WhyUs />
          <IndustriesSection />
          <OurWorkSection />
          <CommitmentSection handleNavigateToContactPage={handleNavigateToContactPage} />
          {/* <Footer handleNavigateToContactPage={handleNavigateToContactPage}/> */}
        </>
    </>
  );
}

export default Home;
