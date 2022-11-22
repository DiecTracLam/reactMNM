import React from "react";
import ListPage from "../../Features/ProductList";
import MainBanner from "./MainBanner";

const Main = (props) => {
  return (
    <>
      <MainBanner />
      <div className="container">
        <div className="grid">
          <ListPage />
        </div>
      </div>
    </>
  );
};

export default Main;
