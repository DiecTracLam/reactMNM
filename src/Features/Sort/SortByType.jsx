import React from "react";

const SortByType = ({ handleChangeType , handlechangeSale , is_Sale }) => {
  const handlechangeByNew = () => {
    handleChangeType('new');
  };
  const handlechangeByBest = () => {
    // const type = {
    //   isNew: false,
    //   isBest: true,
    //   isSale: false,
    // };
    handleChangeType('hot');
  };
  const handleChangeSale = () => {
    // const type = {
    //   isNew: false,
    //   isBest: false,
    //   isSale: true,
    // };
    console.log(is_Sale);
    const newSale = !is_Sale
    handlechangeSale(newSale);
  };
  return (
    <>
      <span onClick={handlechangeByNew}>
        <button className="btn home-filter-btn">Mới nhất</button>
      </span>
      <span onClick={handlechangeByBest}>
        <button className="btn home-filter-btn">Bán chạy</button>
      </span>
      <span onClick={handleChangeSale}>
        <button className="btn home-filter-btn">Giảm giá</button>
      </span>
    </>
  );
};

export default SortByType;
