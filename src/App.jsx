import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import OnTheMenuSection from "./components/OnTheMenuSection";
import WhyUcookSection from "./components/WhyUcookSection";
import PageCardCarousel from "./components/PageCardCarousel";
import TestimonialCardSection from "./components/TestimonialCardSection";
import Footer from "./components/Footer";
import HowItWorksPage from "./components/HowItWorksPage";
import BannerSection from "./components/BannerSection";
import HowItWorks_about from "./components/HowItWorks_about";
import MealKitIntro from "./components/MealKitIntro";
import CookLikeAchef from "./components/CookLikeAchef";
import FreshIngredients from "./components/FreshIngredients";
import PauseSubscription from "./components/PauseSubscription";
import FoodPhilosophy from "./components/FoodPhilosophy";
import OurStory from "./components/OurStory";
import Partnerships from "./components/Partnerships";
import MealPlanFlow from "./components/MealPlanFlow";

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
      <HowItWorksPage/>
      <BannerSection />
      <HowItWorks_about />
      <MealKitIntro />
      <CookLikeAchef />
      <FreshIngredients />
      <PauseSubscription/>
      <FoodPhilosophy />
      <OurStory />
      <Partnerships />
      <MealPlanFlow />
      <Footer/>
    </div>
  );
}

export default App;
