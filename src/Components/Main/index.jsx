import React from "react";
import ListPage from "../../Features/ProductList";
import MainBanner from "./MainBanner";

const Main = ({search}) => {
  return (
    <>
      <MainBanner />
      <div className="container">
        <div className="grid">
          <ListPage search={search}/>
        </div>
      </div>
    </>
  );
};

export default Main;
