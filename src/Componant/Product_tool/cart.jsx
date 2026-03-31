import React from "react";
import SelectedCard from "../UI/SelectedCard";

const Cart = ({ selectedPlans = [], setSelectedPlans = () => {} }) => {

  const handleDeleteSelectedPlan = (plan) => {
    const filteredPlans = selectedPlans.filter(
      (selectedPlan) => selectedPlan.name !== plan.name
    );
    setSelectedPlans(filteredPlans);
  };

  return (
    <div>
      <div className="space-y-5">
        {selectedPlans.length === 0 ? (
          <div className="h-100 flex items-center justify-center flex-col gap-4 text-center px-4">
            <h1 className="text-4xl font-bold text-gray-100 mb-2">
              No Plan Selected
            </h1>
            <p className="text-gray-400 my-6 max-w-md">
              You haven’t chosen any plan yet. Select a plan to unlock features and get started with your journey.
            </p>
            <button className="btn btn-success font-bold rounded-xl px-6 py-3 text-lg">
              Choose a Plan
            </button>
          </div>
        ) : (
          selectedPlans.map((plan, index) => (
            <SelectedCard
              key={index}
              player={plan}
              handleDeleteSelectedPlayer={handleDeleteSelectedPlan}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;