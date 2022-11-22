import React from "react";
import PropTypes from "prop-types";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../Features/Cart/cartRedux";
const HeaderCart = (props) => {
  const CountItem = useSelector((state) => state.cart.cart.length);
  const Cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveCartItem =(id)=>{
    dispatch(removeItem(id))
  }

  return (
    <>
      <div className="header__cart">
        <div className="header__cart-wrap">
          <BsCartFill className="fa-solid fa-cart-shopping header__cart-icon" />
          {CountItem > 0 ? (
            <span className="header__cart-noti">{CountItem}</span>
          ) : (
            ""
          )}
          {/* <!----------Cart empty: header__cart-empty---------------------------------------> */}
          <div className="header__cart-list ">
            {CountItem <= 0 ? (
              <>
                {/* <!--Here--> */}
                <img
                  src={require("../../assets/img/cart-empty.png")}
                  alt=""
                  className="header__cart-empty-img"
                />
                <span className="header__cart-empty-text">
                  Chưa có sản phẩm
                </span>
              </>
            ) : (
              <>
                <h3 className="header__cart-heading">Sản phẩm đã thêm</h3>
                <ul className="header__cart-list-item">
                  {Cart.map((item) => (
                    <li key={item.id} className="header__cart-item">
                      <img
                        src={item.image}
                        alt=""
                        className="header__cart-img"
                      />
                      <div className="header__cart-item-info">
                        <div className="header__cart-item-top">
                          <h5 className="header__cart-item-name">
                            {item.productName}
                          </h5>
                          <div className="header__cart-item-price-wrap">
                            <span className="header__cart-item-price">
                              7.320.000đ
                            </span>
                            <span className="header__cart-item-multiply">
                              x
                            </span>
                            <span className="header__cart-item-qnt">
                              {item.quantity}
                            </span>
                          </div>
                        </div>
                        <div className="header__cart-item-bot">
                          <span className="header__cart-item-description">
                            Xuất xứ: {item.origin}
                          </span>
                          <span  onClick={()=>handleRemoveCartItem(item.id)} className="header__cart-item-del">Xóa</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <Link
              to="/cart"
              className="header__cart-view-cart btn btn--primary"
            >
              Xem giỏ hàng
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

HeaderCart.propTypes = {};

export default HeaderCart;
