import React, { useState } from "react";
import { toast } from "react-toastify";

const Card = ({ product, productData, SetProductData }) => {
  const { name, description, price, period, features, tag, icon } = product;

  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    toast.success(`${name} is selected`);
    setIsSelected(true);
    SetProductData([...productData, product]);
  };

  // 🎯 Dynamic Tag Color (Tailwind)
  const getTagStyle = () => {
    if (tag === "best seller") return "bg-yellow-200 text-yellow-800";
    if (tag === "new") return "bg-green-200 text-green-800";
    if (tag === "popular") return "bg-purple-200 text-purple-800";
    return "bg-gray-200 text-gray-800";
  };

  return (
    <div className="card bg-base-100 shadow-xl p-6 relative text-left rounded-2xl">
      {/* Tag */}
      <div
        className={`absolute top-4 right-4 px-3 py-2 text-xs font-semibold rounded-full  ${getTagStyle()}`}
      >
        {tag}
      </div>

      {/* Icon */}
      <div className="w-12 h-12 rounded-full text-white flex items-center justify-center text-xl mb-4">
        <img src={icon} alt={name} className="object-contain" />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold">{name}</h2>

      {/* Description */}
      <p className="text-gray-500 py-2">{description}</p>

      {/* Price */}
      <h3 className="text-2xl font-bold my-2">
        ${price}
        <span className="text-sm text-gray-500 font-normal">
          /{period === "monthly" ? "Mo" : period}
        </span>
      </h3>

      {/* Features */}
      <ul className="space-y-2 my-4">
        {features.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <span className="text-green-500">✔</span> {item}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className="btn w-full rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white border-none"
        onClick={handleSelect}
        disabled={isSelected}
      >
        {isSelected ? "Selected" : "Buy Now "}
      </button>
    </div>
  );
};

export default Card;
