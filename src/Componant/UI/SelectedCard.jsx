import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const SelectedCard = ({ product, handleDeleteSelectedPlan }) => {
  return (
    <>
      <div className="flex items-center gap-6 my-6 justify-between p-10 rounded-2xl border">
        <div className="flex items-center gap-6">
          <img
            src={product.icon}
            className="h-20 w-auto rounded-md"
          />
          <div>
            <h2 className="flex items-center gap-2 font-semibold text-xl">
              <FaUser /> {product.name}
            </h2>
            <p>{product.playerType}</p>
          </div>
        </div>
        <button
          className="text-3xl"
          onClick={() => handleDeleteSelectedPlan(product)}>
          <MdDelete />
        </button>
      </div>

    </>
  );
};
//  <div className='mt-20'>
//             

//            </div>

export default SelectedCard;
