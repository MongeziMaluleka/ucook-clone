import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import OnTheMenuSection from "./components/OnTheMenuSection";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HowItWorksSection /> 
      <OnTheMenuSection />
    </div>
  );
}

export default App;
