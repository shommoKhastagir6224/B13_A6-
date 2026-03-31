import React from 'react';

const cart = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center my-20 text-center px-4">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-100 mb-2">
        No Plan Selected
      </h1>

      {/* Paragraph */}
      <p className="text-gray-400 my-6 max-w-md">
        You haven’t chosen any plan yet. Select a plan to unlock features and get started with your journey.
      </p>

      {/* Button */}
      <button className="btn btn-success font-bold rounded-xl px-6 py-3 text-lg">
        Choose a Plan
      </button>
    </div>

            
        </div>
    );
};

export default cart;