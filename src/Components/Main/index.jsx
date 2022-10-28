import React from "react";
import Category from "./Category";
import MainBanner from "./MainBanner";
import ProductList from "./ProductList/ProductList";
import Sort from "./Sort";

const Main = (props) => {
  return (
    <>
      <MainBanner />
      <div className="container">
        <div className="grid">
          <div className="grid__row grid__content">
              <Category />
            {/* <!-------Sắp xếp sản phẩm------------------------------------------------------------------> */}
            <div className="grid__column-10">
              <Sort />
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
