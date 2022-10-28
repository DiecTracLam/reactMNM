import React from "react";
import PropTypes from "prop-types";

const Sort = (props) => {
  return (
    <div className="home-filtel">
      <span className="home-filter-label">Sắp xếp theo</span>
      <a href="">
        <button className="btn home-filter-btn">Mới nhất</button>
      </a>
      <a href="">
        <button className="btn home-filter-btn">Bán chạy</button>
      </a>
      <a href="">
        <button className="btn home-filter-btn">Giảm giá</button>
      </a>

      <div className="select-input">
        <span className="select-input-label">Giá</span>
        <i className="fas fa-angle-down select-input-icon"></i>
        <ul className="select-input-list">
          <li className="select-input-item">
            <a href="" className="select-input-link">
              Giá: Thấp đến cao
            </a>
          </li>
          <li className="select-input-item">
            <a href="" className="select-input-link">
              Giá: Cao đến thấp
            </a>
          </li>
        </ul>
      </div>

      <div className="home-filter-page">
        <span className="home-filter-page-num">
          <span className="home-filter-page-current">1</span>/2
        </span>
        <div className="home-filter-page-control">
          <a href="" className="home-filter-page-btn home-filter-page-btn-dis">
            <i className="fas fa-angle-left home-filter-page-icon"></i>
          </a>
          <a href="" className="home-filter-page-btn">
            <i className="fas fa-angle-right home-filter-page-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sort;
