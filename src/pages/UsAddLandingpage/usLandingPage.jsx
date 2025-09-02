"use client"

import "./usLandingPage.css"
import Navigation from "./components/Navigation"
import HeroSection from "./components/HeroSection"
import MetricsSection from "./components/MetricsSection"
import AutoSlidingBrands from "./components/AutoSlidingBrands"
// import FeaturesSection from "./components/FeaturesSection"
import IncludedServicesSection from "./components/IncludedServicesSection"
import CaseStudiesSection from "./components/CaseStudiesSection"
import WorldClassBrands from "./components/WorldClassBrands"
import TestimonialsSection from "./components/TestimonialsSection"
import ScheduleCallSection from "./components/ScheduleCallSection.jsx"
import ComparisonSection from "./components/ComparisonSection"
import FAQSection from "./components/FAQSection"
import Footer from "./components/Footer"
import OurClients from "../UsAddLandingpage/components/TrustedBrands.jsx"


export default function LandingPage() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <AutoSlidingBrands />
      
      {/* <FeaturesSection /> */}
      <IncludedServicesSection />
      <CaseStudiesSection />
      <MetricsSection />
      <WorldClassBrands />
      <TestimonialsSection />
      <OurClients />
      <ScheduleCallSection />
      <ComparisonSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
