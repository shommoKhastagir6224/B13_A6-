import React from "react";
import Card from "../UI/card";

const Product = ({ products , productData, SetProductData }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-15">
        {products.map((item, ind) => (
          <Card
            key={ind}
            product={item}
            SetProductData={SetProductData}
            productData={productData}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;