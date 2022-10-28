import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cateAPI from "../../Api/categoryAPI";
import {BsJustify} from 'react-icons/bs'


const Category = (props) => {
  const [cateList, setCateList] = useState([]);
  const [isOpenMobile, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      const api = await cateAPI.getAll();
      setCateList(api.data.category);
    };
    fetchAPI();
  }, []);

  const handleChangeOpenMobile = ()=>{
    setIsOpen(true);
  }
  return (
    <div className="grid__column-2">
      {/* <!-------Cột tên thương hiệu sản phẩm-------------------------------------------------> */}
      <nav className="category">
        <label className="category-heading">
          <BsJustify onClick={handleChangeOpenMobile} className="fa-solid fa-list category-heading-icon"/>
          <span className="category-name">Thương Hiệu</span>
        </label>
        {isOpenMobile && 
        <>
          <label className="overlay"></label>
          <nav className="category-mobie">
            <h1 className="category-mobie-heading">
              Thương hiệu{" "}
              <span>
                <label>
                  <i className="fa-regular fa-circle-xmark x-icon"></i>
                </label>
              </span>
            </h1>
            <ul className="category-mobie-list">
              {cateList.map((item) => (
                <li key={item.id} className="category-mobie-item ">
                  <a href="" className="category-mobie-item__link">
                    {item.nameBrand}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
        }

        <ul className="category-list">
          {cateList.map((item) => (
            <li key={item.id} className="category-mobie-item ">
              <a href="" className="category-mobie-item__link">
                {item.nameBrand}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Category;
