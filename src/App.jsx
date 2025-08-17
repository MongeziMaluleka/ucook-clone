import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import OnTheMenuSection from "./components/OnTheMenuSection";
import WhyUcookSection from "./components/WhyUcookSection";
import PageCardCarousel from "./components/PageCardCarousel";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HowItWorksSection /> 
      <OnTheMenuSection />
      <WhyUcookSection/>
      <PageCardCarousel />  
    </div>
  );
}

export default App;
