import React, { useState } from "react";
import "../css/MealPlanFlow.css";

const mealPlans = [
  { label: "Adventurous Foodie", desc: "Experiment with bold ingredients, new techniques and serious fun in the kitchen." },
  { label: "Quick & Easy", desc: "Enjoy effortless recipes that are ready chop-chop, but still packed with flavour." },
  { label: "Fan Faves", desc: "Find new favourites and make the dishes everyone is loving, week after week." },
  { label: "Veggie", desc: "Get more of the good stuff with Veggie dishes, including two plant-based dishes weekly." },
  { label: "*New Calorie Conscious", desc: "For those who want to savour delicious meals while keeping an eye on their calorie intake." },
  { label: "Carb Conscious", desc: "Plan your meals well with less than or equal to 10g of carbs per 100g." },
  { label: "Simple & Save", desc: "Our no-frills option. Spend less on dishes that don't compromise on quality and flavour." }
];

const MealPlanFlow = () => {
  const [step, setStep] = useState(1);
  const [servings, setServings] = useState(null);
  const [dishes, setDishes] = useState(null);
  const [plan, setPlan] = useState("Simple & Save");

  return (
    <div className="MealPlanFlow">
      {/* Progress Steps */}
      <div className="MealPlanFlow__steps">
        {["How many servings and how often?", "Pick a Plan", "Add Delivery Address", "Add Payment Details", "Confirm Details", "Select Meal Kits"].map((label, idx) => (
          <div key={label} className={"MealPlanFlow__step" + (step === idx+1 ? " MealPlanFlow__step--active" : "") + (step > idx+1 ? " MealPlanFlow__step--done" : "")}>
            <div className="MealPlanFlow__circle">{idx+1}</div>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Step 1: Servings & Dishes */}
      {step === 1 && (
        <div className="MealPlanFlow__cardGroup">
          <div className="MealPlanFlow__cardHeader">Get everything you need for dinner with no locked-in plan</div>
          <div className="MealPlanFlow__cardBody MealPlanFlow__cardBody--threeup">
            <div>
              <div className="MealPlanFlow__cardIcon"><span role="img" aria-label="cart">🛒</span></div>
              <div className="MealPlanFlow__cardTitle">Choose your plan</div>
              <div className="MealPlanFlow__cardDesc">Pick the category that fits your lifestyle, the number of people you’re cooking for, and how many dishes you want each week.</div>
            </div>
            <div>
              <div className="MealPlanFlow__cardIcon"><span role="img" aria-label="truck">🚚</span></div>
              <div className="MealPlanFlow__cardTitle">We deliver</div>
              <div className="MealPlanFlow__cardDesc">Receive perfectly pre-portioned ingredients and easy recipes delivered to your door weekly.</div>
            </div>
            <div>
              <div className="MealPlanFlow__cardIcon"><span role="img" aria-label="pan">🍳</span></div>
              <div className="MealPlanFlow__cardTitle">Flexibility is yours</div>
              <div className="MealPlanFlow__cardDesc">Swap dishes, update your plan, or pause whenever you like. No strings attached.</div>
            </div>
          </div>
        </div>
      )}

      {/* Step 1: How many servings/dishes */}
      {step === 1 && (
        <div className="MealPlanFlow__cardGroup">
          <div className="MealPlanFlow__cardHeader MealPlanFlow__cardHeader--small">How many servings and how often?</div>
          <div className="MealPlanFlow__cardBody">
            <div className="MealPlanFlow__question">How many people are you cooking for?</div>
            <div className="MealPlanFlow__choices">
              {[1,2,3,4].map(val => (
                <button
                  key={val}
                  className={servings === val ? "selected" : ""}
                  onClick={() => setServings(val)}
                >{val} person{val > 1 ? "s" : ""}</button>
              ))}
            </div>
            <div className="MealPlanFlow__question">How many dishes would you like per week?</div>
            <div className="MealPlanFlow__choices">
              {[2,3,4].map(val => (
                <button
                  key={val}
                  className={dishes === val ? "selected" : ""}
                  onClick={() => setDishes(val)}
                >{val} dish{val > 1 ? "es" : ""}</button>
              ))}
            </div>
          </div>
          <div className="MealPlanFlow__controls">
            <button className="MealPlanFlow__submit" disabled={!(servings && dishes)} onClick={()=>setStep(2)}>NEXT</button>
          </div>
        </div>
      )}

      {/* Step 2: Plan selection */}
      {step === 2 && (
        <div className="MealPlanFlow__cardGroup">
          <div className="MealPlanFlow__cardHeader">Pick a Plan</div>
          <div className="MealPlanFlow__cardHint">You can pick meals weekly. Too busy? This plan is your built-in backup.</div>
          <div className="MealPlanFlow__planGrid">
            {mealPlans.map((planItem,i) => (
              <label className={"MealPlanFlow__planBox" + (plan === planItem.label ? " plan--selected" : "")} key={planItem.label}>
                <input
                  type="radio"
                  name="plan"
                  checked={plan === planItem.label}
                  onChange={() => setPlan(planItem.label)}
                />
                <div className="MealPlanFlow__planLabel">{planItem.label}</div>
                <div className="MealPlanFlow__planDesc">{planItem.desc}</div>
              </label>
            ))}
          </div>
          <div className="MealPlanFlow__controls">
            <button className="MealPlanFlow__back" onClick={()=>setStep(1)}>BACK</button>
            <button className="MealPlanFlow__submit" onClick={()=>setStep(3)}>NEXT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealPlanFlow;
