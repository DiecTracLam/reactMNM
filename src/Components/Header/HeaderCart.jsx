import React from "react";
import PropTypes from "prop-types";
import {BsCartFill} from 'react-icons/bs'
const HeaderCart = (props) => {
  return (
    <>
      <div className="header__cart">
        <div className="header__cart-wrap">
          <BsCartFill className="fa-solid fa-cart-shopping header__cart-icon"/>
          <span className="header__cart-noti">33</span>
          {/* <!----------Cart empty: header__cart-empty---------------------------------------> */}
          <div className="header__cart-list ">
            {/* <!--Here--> */}
            <img
              src={require("../../assets/img/cart-empty.png")}
              alt=""
              className="header__cart-empty-img"
            />
            <span className="header__cart-empty-text">Chưa có sản phẩm</span>
            {/* <!------Cart item-----------------------------------------------------------> */}
            <h3 className="header__cart-heading">Sản phẩm đã thêm</h3>
            <ul className="header__cart-list-item">
              <li className="header__cart-item">
                <img
                  src={require("../../assets/img/seiko ssb.jpg")}
                  alt=""
                  className="header__cart-img"
                />
                <div className="header__cart-item-info">
                  <div className="header__cart-item-top">
                    <h5 className="header__cart-item-name">Seiko SSB - Nam</h5>
                    <div className="header__cart-item-price-wrap">
                      <span className="header__cart-item-price">7.320.000đ</span>
                      <span className="header__cart-item-multiply">x</span>
                      <span className="header__cart-item-qnt">1</span>
                    </div>
                  </div>
                  <div className="header__cart-item-bot">
                    <span className="header__cart-item-description">
                      Xuất xứ: Nhật Bản
                    </span>
                    <span className="header__cart-item-del">Xóa</span>
                  </div>
                </div>
              </li>
            </ul>
            <a className="header__cart-view-cart btn btn--primary">Xem giỏ hàng</a>
          </div>
        </div>
      </div>
    </>
  );
};

HeaderCart.propTypes = {};

export default HeaderCart;
