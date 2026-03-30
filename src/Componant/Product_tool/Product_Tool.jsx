import React, { useState, useEffect } from "react";
import Products from "./Product";
import Cart from "./cart";

const Product_Tool = ({ ProductPromise }) => {
  const [products, setProducts] = useState([]);
  const [activeBtn, setActiveBtn] = useState("Product");
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await ProductPromise; // এখানে promise resolve হবে
      setProducts(data);
    };
    loadProducts();
  }, [ProductPromise]);

  return (
    <div className="text-center my-30 mx-50">
      <h1 className="text-4xl">Premium Digital Tools</h1>
      <p className="py-4 text-lg">
        Choose from our curated collection of premium digital products designed
        to <br />
        boost your productivity and creativity.
      </p>
      <div className="flex justify-center items-center gap-2">
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
          Cart
        </button>
      </div>

      {activeBtn === "Product" ? (
        <Products
          products={products}
          SetProductData={setProductData}
          productData={productData}
        />
      ) : (
        <Cart SetProductData={setProductData} productData={productData} />
      )}
    </div>
  );
};

export default Product_Tool;