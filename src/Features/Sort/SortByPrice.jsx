import React from "react";

const SortByPrice = ({handleChangeBySort}) => {
    const handleChangeSortByASC = () =>{
        const newSort =  'asc';
        handleChangeBySort(newSort)
    }
    const handleChangeSortByDESC = () =>{
        const newSort =  'desc';
        handleChangeBySort(newSort)
    }
  return (
    <div className="select-input">
      <span className="select-input-label">Giá</span>
      <i className="fas fa-angle-down select-input-icon"></i>
      <ul className="select-input-list">
        <li onClick={handleChangeSortByASC} className="select-input-item">
          <span className="select-input-link">Giá: Thấp đến cao</span>
        </li>
        <li onClick={handleChangeSortByDESC} className="select-input-item">
          <span className="select-input-link">Giá: Cao đến thấp</span>
        </li>
      </ul>
    </div>
  );
};

export default SortByPrice;
