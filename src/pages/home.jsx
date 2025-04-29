import React from "react";
import Navbar from "../components/Navbar1";
import HeroSection from "../components/HerosectionV";
import HowWeWork from "../components/HowWeWork12";
import WhyUs from "../components/WhyUs4";
import IndustriesSection from "../components/IndustriesSection2";
import OurWorkSection from "../components/OurWork4";
import CommitmentSection from "../components/OurCommit1";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import OurServices from "../components/OurServices";
import OurWork from "./OurWork";
import ParticleAvatar from "../components/avatar";
import CallToAction from "../components/CallToAction";
import { Helmet } from 'react-helmet-async';

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
  };

  return (
    <>
      <div className="bg-black">

        {/* <Navbar handleNavigateToContactPage={handleNavigateToContactPage} /> */}
        <HeroSection
          handleNavigateToContactPage={handleNavigateToContactPage}
        />
        <HowWeWork />
        <OurServices />
        <OurWork />
        <CallToAction />
        {/* <WhyUs /> */}
        {/* <IndustriesSection /> */}
        {/* <OurWorkSection /> */}
        {/* <CommitmentSection handleNavigateToContactPage={handleNavigateToContactPage} /> */}
        {/* <Footer handleNavigateToContactPage={handleNavigateToContactPage} /> */}
        <Helmet>
          <title>AI Solutions for Business Growth | Hexylon Analytics</title>
          <meta
            name="description"
            content="Hexylon is a leading AI solutions provider in India offering NLP, Agentic AI, Data Analytics, Process Automation, Recommendation system and Automated ML for global enterprises."
          />
          <meta
            name="keywords"
            content="custom AI solutions, AI business automation, predictive analytics company, AI consulting services, machine learning integration, AI for manufacturing, data analytics, AI lifecycle, Hexylon Analytics"
          />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://hexylonanalytics.com",
              "name": "Hexylon Analytics",
              "url": "https://hexylonanalytics.com",
              "logo": "https://hexylonanalytics.com/logo.png",
              "description":
                "Custom AI solutions for business automation, predictive analytics, and end-to-end AI integration",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "B/410, Ganesh Plaza, Nr. Navrangpura Post Office",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380009",
                "addressCountry": "India"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "23.033863",
                "longitude": "72.585022"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Services",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Custom AI Development",
                    "itemListElement": {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Custom AI Models",
                        "description":
                          "Tailored machine learning solutions for your business workflows"
                      }
                    }
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "AI Integration",
                    "itemListElement": {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "System Deployment",
                        "description":
                          "Seamless integration with ERPs, CRMs, and legacy systems"
                      }
                    }
                  }
                ]
              },
              "makesOffer": {
                "@type": "Offer",
                "category": "AI Consulting",
                "eligibleRegion": {
                  "@type": "Country",
                  "name": "IN"
                }
              },
              "knowsAbout": [
                "Artificial Intelligence",
                "Predictive Analytics",
                "Computer Vision",
                "Natural Language Processing"
              ]
            })}
          </script>
        </Helmet>
      </div>
    </>
  );
}

export default Home;
