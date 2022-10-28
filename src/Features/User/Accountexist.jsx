import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "./userRedux";


const Accountexist = (props) => {
  const dispatch = useDispatch()
  const handleLogout = ()=>{
    const action = Logout();
    dispatch(action)
  }
  return (
    <>
      <li className="header__navbar-item header__navbar-user">
        <img
          src={require("../../assets/img/KH.png")}
          alt=""
          className="header__navbar-user-avatar"
        />
        <span className="header__navbar-user-name">Tên KH</span>
        <ul className="header__navbar-user-menu">
          <li className="header__navbar-user-item">
            <Link to ="/account">Tài khoản của tôi</Link>
          </li>

          <li className="header__navbar-user-item">
            <Link to="./cart">Đơn hàng của tôi</Link>
          </li>
          <li className="header__navbar-user-item">
            <Link to="./history">Lịch sử mua hàng</Link>
          </li>
          <li className="header__navbar-user-item header__navbar-user-item-separate">
            <Link to="/" onClick={handleLogout}>
              Đăng xuất&emsp;&emsp;
              <i className="fa-solid fa-right-from-bracket"></i>
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Accountexist;
