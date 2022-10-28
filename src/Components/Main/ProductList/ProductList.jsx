import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import productsAPI from "../../../Api/productApi";
import Product from "./Product";

const ProductList = (props) => {
  const [productlist, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const getApi = await productsAPI.getAll(2);
        setList(getApi.data.product);
        console.log(getApi.data)
        setLoading(false);
      } catch (error) {}
    };
    getProduct();
  }, []);
  if(loading){
    return ;
  }
  return (
    <div className="home-product">
      <div className="grid__row">
        {productlist.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
