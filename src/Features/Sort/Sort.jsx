import React from "react";
import PropTypes from "prop-types";
import SortByType from "./SortByType";
import SortByPrice from "./SortByPrice";

const Sort = ({handleChangeByType , handleChangeBySort , is_Sale , handleChangeSale }) => {
  
  const handlechangeSale = (value)=>{
    handleChangeSale(value);
  }

  const handleChangeType = (value) => {
    handleChangeByType(value)
  };

  const handleChangeSort = (value) => {
    handleChangeBySort(value)
  };
  return (
    <div className="home-filtel">
      <span className="home-filter-label">Sắp xếp theo</span>
      <SortByType is_Sale={is_Sale} handlechangeSale={handlechangeSale} handleChangeType={handleChangeType} />
      <SortByPrice handleChangeBySort={handleChangeSort} />
    </div>
  );
};

export default Sort;
