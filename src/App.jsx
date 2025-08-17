import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import OnTheMenuSection from "./components/OnTheMenuSection";
import WhyUcookSection from "./components/WhyUcookSection";
import PageCardCarousel from "./components/PageCardCarousel";
import TestimonialCardSection from "./components/TestimonialCardSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HowItWorksSection /> 
      <OnTheMenuSection />
      <WhyUcookSection/>
      <PageCardCarousel />  
      <TestimonialCardSection/>
      <Footer/>
    </div>
  );
}

export default App;
