import React from "react";
import PropTypes from "prop-types";
import {BsFacebook , BsFillEnvelopeFill} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'



const HeaderLeft = (props) => {
  return (
    <ul className="header__navbar-list">
      {/* <!--Navbar trái + QR------------------------------------------------------------------------------------> */}
      <li className="header__navbar-item header__navbar-item-qr header__navbar-item--separate">
        Vào cửa hàng trên ứng dụng
        <div className="header__qr">
          <img
            src={require("../../assets/img/image-qr.png")}
            alt="QR code"
            className="header__qr-img"
          />
          <div className="header__qr-apps">
            <a href="" className="header__qr-link">
              <img
                src={require("../../assets/img/app.png")}
                alt="Google Play"
                className="header__qr-download"
              />
            </a>
            <a href="" className="header__qr-link">
              <img
                src={require("../../assets/img/gg.png")}
                alt="App Store"
                className="header__qr-download"
              />
            </a>
          </div>
        </div>
      </li>
      <li className="header__navbar-item">
        <span className="header__navbar-title ">Kết nối</span>
        <a href="" className="header__navbar-icon-link">
          <BsFacebook className="header__navbar-icon fa-brands fa-facebook-f"/>
        </a>
        <a href="" className="header__navbar-icon-link">
          <FaTiktok className="header__navbar-icon fa-brands fa-tiktok"/>
        </a>
        <a href="" className="header__navbar-icon-link">
          <BsFillEnvelopeFill className="header__navbar-icon fa-solid fa-envelope"/>
        </a>
      </li>
    </ul>
  );
};

export default HeaderLeft;
