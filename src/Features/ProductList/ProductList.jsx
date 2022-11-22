import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = ({productlist}) => {
  
  return (
    <>
      <div className="home-product">
        <div className="grid__row">
          {productlist.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
