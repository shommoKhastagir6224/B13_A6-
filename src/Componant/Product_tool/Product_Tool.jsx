import React, { useState, use } from "react";
import Products from "./Product";
import Cart from "./cart";
// import { toast } from "react-toastify";

const Product_Tool = ({ ProductPromise }) => {
  const [activeBtn, setActiveBtn] = useState("Product");
  const [productData, setProductData] = useState([]);


  const products = use(ProductPromise);

  const handleCheckout = () => {
    setProductData([]);
  };

  return (
    <div className="text-center my-20 md:my-30 md:mx-50">
      <h1 className="text-4xl">Premium Digital Tools</h1>
      <p className="py-4 text-lg">
        Choose from our curated collection of premium digital products designed
        to <br />
        boost your productivity and creativity.
      </p>

      <div
        className="flex justify-center items-center gap-2 "
      >
        <button
          onClick={() => setActiveBtn("Product")}
          className={`btn ${
            activeBtn === "Product"
              ? "bg-linear-to-r from-blue-800 to-purple-700"
              : "bg-gray-200 text-black"
          } rounded-xl p-4 text-lg font-bold`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveBtn("Cart")}
          className={`btn ${
            activeBtn === "Cart"
              ? "bg-linear-to-r from-blue-800 to-purple-700"
              : "bg-gray-200 text-black"
          } rounded-xl p-4 text-lg font-bold`}
        >
          Cart ({productData.length})
        </button>
      </div>

      {activeBtn === "Product" ? (
        <Products
          products={products}
          SetProductData={setProductData}
          productData={productData}
        />
      ) : (
        <Cart
          selectedPlans={productData}
          setSelectedPlans={setProductData}
          handleCheckout={handleCheckout}
        />
      )}
    </div>
  );
};

export default Product_Tool;
