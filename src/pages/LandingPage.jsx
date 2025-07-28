import React from "react";
import Hero from "../components/Hero";
import AboutHome from "../components/AboutHome";
import Feature from "../components/Feature";
import ServicesHome from "../components/ServicesHome";
import DedicatedTeamHome from "../components/DedicatedTeamHome";
import PartnerText from "../components/PartnerText";
import HowWeWork from "../components/HowWeWork";
import TestimonialsHome from "../components/TestimonialsHome";
import PortfolioHome from "../components/PortfolioHome";
import GoogleServices from "../components/GoogleServices";
import ContactBanner from "../components/ContactBanner";

const LandingPage = () => {
  return (
    <div className="min-h-screen relative bg-[]">
      <Hero />
      <Feature />
      <AboutHome />
      <ServicesHome/>
      <DedicatedTeamHome/>
      <PartnerText/>
      <GoogleServices/>
      <HowWeWork/>
      <TestimonialsHome/>
      <PortfolioHome/>
      <ContactBanner/>
    </div>
  );
};

export default LandingPage;
