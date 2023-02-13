import React from "react";
import Signin from "../../Features/User/Signin";
import Signup from "../../Features/User/Signup";
import Accountexist from "../../Features/User/Accountexist";
import { useDispatch, useSelector } from "react-redux";
import { MdNotifications } from "react-icons/md";

const HeaderRight = (props) => {
  const user = useSelector((state) => state.user.user);
  const isLogin = !!user?.id;
  return (
    <ul className="header__navbar-list">
      <li className="header__navbar-item header__navbar-item-hover">
        <a href="" className="header__navbar-item-link">
          {" "}
          <MdNotifications className="header__navbar-icon fa-solid fa-bell rung" />
          Thông báo
        </a>
        <div className="header__notify">
          <header className="header__notify_header">
            <h3>Thông báo mới nhận</h3>
          </header>
          <ul className="header__notify_list">
            <li className="header__notify-item ">
              <a href="" className="header__notify-link">
                <img
                  src={require("../../assets/img/uudai.jpg")}
                  alt=""
                  className="header__notify-img"
                />
                <div className="header__notify-info">
                  <span className="header__notify-name">Siêu ưu đãi</span>
                  <span className="header__notify-name2">
                    Ưu đãi cực lớn cho khách hàng vào ngày{" "}
                  </span>
                </div>
              </a>
            </li>
          </ul>
          <footer className="header__notify-footer">
            <a href="" className="header__notify-footer-btn">
              Xem tất cả
            </a>
          </footer>
        </div>
      </li>
      {/* <!------------------Trợ giúp---------------------------> */}
      <li className="header__navbar-item">
        <a href="" className="header__navbar-item-link">
          <i className="header__navbar-icon fa-solid fa-circle-question"></i>Trợ
          giúp
        </a>
      </li>
      {!isLogin && (
        <>
          {/* <!------------------Đăng nhập---------------------------> */}
          <Signin />
          {/* <!------------------Đăng ký---------------------------> */}
          <Signup />
        </>
      )}
      {isLogin && <Accountexist />}
      {/* <!------------------User ---------------------------> */}

    </ul>
  );
};

HeaderRight.propTypes = {};

export default HeaderRight;
