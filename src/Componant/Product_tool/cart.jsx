import React from "react";
import SelectedCard from "../UI/SelectedCard";

const cart = ({ selectedPlans, setSelectedPlans, handleCheckout }) => {
  console.log(selectedPlans, setSelectedPlans);

  const handleDeleteSelectedPlan = (plan) => {
    console.log(selectedPlans, "selectedPlans");
    const filteredPlans = selectedPlans.filter(
      (selectedPlan) => selectedPlan.name !== plan.name,
    );
    console.log(filteredPlans, "filteredPlans");
    setSelectedPlans(filteredPlans);
  };
  return (
    <div>
      <div>
        <div className="space-y-5">
          {selectedPlans.length === 0 ? (
            <div className="h-100 flex items-center justify-center flex-col gap-4 text-center px-4">
              <h1 className="text-4xl font-bold text-gray-100 mb-2">
                No Plan Selected
              </h1>
              <p className="text-gray-400 my-6 max-w-md">
                You haven’t chosen any plan yet. Select a plan to unlock
                features and get started with your journey.
              </p>
              <button className="btn btn-success font-bold rounded-xl px-6 py-3 text-lg">
                Choose a Plan
              </button>
            </div>
          ) : (
            <div>
              <h1 className="py-3 text-start mx-4 mt-10 text-2xl">Your Cart</h1>
              {selectedPlans.map((plan, index) => (
                <SelectedCard
                  key={index}
                  product={plan}
                  handleDeleteSelectedPlan={handleDeleteSelectedPlan}
                />
              ))}
              <div className="flex justify-between mx-8 my-5 text-xl">
                <h2 className="text-3xl">total</h2>
                <p>$ {selectedPlans.reduce((sum, plan) => sum + plan.price, 0).toFixed(2)}</p>
              </div>
              <button 
                className="btn btn-success mt-6 text-xl w-full rounded-4xl"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default cart;
