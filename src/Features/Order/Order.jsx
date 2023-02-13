import React, { useState } from "react";
import { useEffect } from "react";
import { MdSouth } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import orderApi from "../../Api/orderAPI";
import { formatPrice } from "../../ultis/common";

const Order = (props) => {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  console.log(order)
  useEffect(() => {
    const getApi = async () => {
      const api = await orderApi.getOrder(user.id);
      setOrder(api.data.order);
      setLoading(false);
      console.log(api);
    };
    getApi();
  }, [user]);

  if (!!user.id == false || order == undefined) {
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
  // const status = {
  //   red :
  // }

  const handleSoleDetail = (id) => {
    navigate(`/order/${id}`);
  };

  if (loading) return;
  return (
    <>
      <div className="container2">
        <div className="grid">
          <h4 className="title-cart">Đặt hàng</h4>

          <hr />
          <br />
          <br />
          <table>
            <thead className="cart-heading">
              <tr>
                <th>STT</th>
                <th>NGÀY</th>
                <th>TỔNG CỘNG</th>
                <th>TÌNH TRẠNG</th>
                <th>XEM CHI TIẾT</th>
              </tr>
            </thead>

            <tbody id="borderBot">
              {order.map((item, index) => (
                <tr key={item.id} className="cart-product">
                  <td className="product-number">{index + 1}</td>
                  <td className="">{item.date}</td>
                  <td className="total-money">
                    {formatPrice(item.totalPrice)}
                  </td>
                  <td className="">
                    <h3 className="status" style={{backgroundColor : item.status == 0 ? "red" : item.status == 1 ? "yellow" : item.status == 2 ? "blue" : "green" }}>
                      {item.status == 0 ? "Chưa xử lý" :  item.status == 1 ? "Đang giao" : item.status == 2 ? "Đã giao" : "Đã xử lý"}
                    </h3>
                  </td>
                  <td className="history-detail">
                    <div className="product-order">
                      <button
                        onClick={() => handleSoleDetail(item.id)}
                        className="btn btn--order"
                      >
                        Chi tiết
                      </button>
                    </div>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <ul className="ul-move">
            <li className="">
              <Link to={"/"} className="ul-move-a-back">
                Tiếp tục mua hàng
              </Link>
            </li>
          </ul>

          <br />
        </div>
      </div>
    </>
  );
};

export default Order;
