import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeaderInput = ({handleChangeSearch}) => {
  const [data, setData] = useState("");

  const changeSearch = (e) => {
    setData(e.target.value)
  };

  const submitSearch = ()=>{
    handleChangeSearch(data)
  }
  return (
    <>
      <div className="header__logo">
        <Link to="/" className="header__logo-link">
          <img
            src={require("../../assets/img/name.png")}
            alt=""
            className="header__logo-img2 "
            width="150"
          />
        </Link>
      </div>

      <div className="header__search">
        <input
          type="text"
          className="header_search-input"
          placeholder="Nhập sản phẩm cần tìm kiếm"
          onChange={changeSearch}
          value={data}
        />
        <button className="header__search-but" onClick={submitSearch}>
          <BsSearch className="fa-solid fa-magnifying-glass header__search-but-icon" />
        </button>
      </div>
    </>
  );
};

export default HeaderInput;
