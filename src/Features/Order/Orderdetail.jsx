import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import orderApi from "../../Api/orderAPI";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { formatPrice } from "../../ultis/common";
import { useSelector } from "react-redux";

const Orderdetail = (props) => {
  const [ordDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const params = useParams();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    const getAPI = async () => {
      const api = await orderApi.getOrderDetail(params.id);
      setOrderDetails(api.data);
      console.log(api.data)
      setLoading(false);
    };
    getAPI();
  }, []);
  console.log(ordDetails)
  if (!!user.id == false || ordDetails == "" ) {
    return (
      <div className="container2">
        <div className="grid">
          <div className="contain_img">
            <img className="empty-Cart" src={require("../../assets/css/empty-Cart.jpg")} alt="" />
          </div>
        </div>
      </div>
    );
  }
  const handleToBack = ()=>{
    navigate('/order');
  }

  if(loading) return ;
  return (
    <>
      <div className="container2">
        <div className="grid">
          <h4 className="title-cart">Chi tiết đặt hàng</h4>

          <hr />
          <br />
          <br />
          <table>
            <thead className="cart-heading">
              <tr>
                <th>STT</th>
                <th style={{ width: "20%" }}>SẢN PHẨM</th>
                <th style={{ width: "20%" }}>HÌNH</th>
                <th>ĐƠN GIÁ</th>
                <th>SỐ LƯỢNG</th>
                <th>THÀNH TIỀN</th>
              </tr>
            </thead>

            <tbody>
              {ordDetails.dt_order.map((item, index) => (
                <tr key={item.prodcutID} className="cart-product">
                  <td className="product-number">{index+1}</td>
                  <td className="product-name">
                    SEIKO SSB343P1 – NAM – QUARTZ (PIN) – DÂY KIM LOẠI – MẶT SỐ
                    43MM
                  </td>
                  <td className="product-img">
                    <img src={item.image} alt="" />
                  </td>
                  <td className="product-price">{formatPrice(item.price)}</td>
                  <td className="product-quantity">{item.quantity}</td>
                  <td className="total-money">{formatPrice(item.price * item.quantity)}</td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <th colSpan={2} className="tf ">
                  Tổng sản phẩm: {ordDetails.totalCount}
                </th>
              </tr>
              <tr>
                <th colSpan={2} className="total-money tf">
                  Tổng tiền thanh toán: {formatPrice(ordDetails.totalPrice)}
                </th>
              </tr>
            </tfoot>
          </table>
          <br />
          <br />
          <hr />
          <ul className="ul-move">
            <li className="">
              <button onClick={handleToBack} className="ul-move-a-back">
                Trở lại
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Orderdetail;
