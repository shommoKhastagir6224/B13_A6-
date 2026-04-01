import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedCard = ({ product, handleDeleteSelectedPlan }) => {
  return (
    <>
      <div className="flex items-center gap-6 my-6 justify-between p-10 rounded-2xl border">
        <div className="flex items-center gap-6">
          <img src={product.icon} className="h-14 w-auto rounded-md" />
          <div>
            <h2 className="flex items-center gap-2 font-semibold text-2xl">
              {product.name}
            </h2>
            <p className="text-start pt-2 text-xl">${product.price.toFixed(2)}</p>
          </div>
        </div>
        <button
          className="text-xl text-red-500 "
          onClick={() => handleDeleteSelectedPlan(product)}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default SelectedCard;
