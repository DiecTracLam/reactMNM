import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatPrice } from "../../ultis/common";
import { removeItem, setQuantity } from "./cartRedux";
import { cartItemsCountSelector, cartTotalSelector } from "./cartSelector";

const Cart = () => {
  const Cart = useSelector((state) => state.cart.cart);
  const CountCartItem = useSelector(cartItemsCountSelector);
  const TotalPrice = useSelector(cartTotalSelector)
  const dispatch = useDispatch();

  const handleChangeQuantity = (e,id)=>{
    dispatch(setQuantity({id:id , quantity:e.target.value}))
  }

  const handleRemoveCartItem = (id)=>{
    dispatch(removeItem(id))
  }
  if (Cart.length <= 0) {
    return;
  }
  return (
    <div className="container2">
      <div className="grid">
        <h4 className="title-cart">Giỏ hàng</h4>
        <hr />
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
              <th className="">
                <i className="fa-solid fa-trash"></i>
              </th>
            </tr>
          </thead>

          <tbody>
            {Cart.map((item , index) => (
              <tr key={item.id} className="cart-product">
                <td className="product-number">{index+1}</td>
                <td className="product-name">
                  {item.productName}
                </td>
                <td className="product-img">
                  <img src={item.image} alt="" />
                </td>
                <td className="product-price">{formatPrice(item.priceAfter)}</td>
                <td className="product-quantity">
                  <input
                    type="number"
                    className="p-quantity"
                    value={item.quantity}
                    max="9999"
                    min="1"
                    onChange={(e)=>handleChangeQuantity(e,item.id)}
                  />
                </td>
                <td className="total-money">{formatPrice(item.priceAfter * item.quantity)}</td>

                <td>
                  <i className="fa-regular fa-circle-xmark del-icon" onClick={()=>handleRemoveCartItem(item.id)}></i>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th colSpan={2} className="tf ">
                Tổng sản phẩm: {CountCartItem}
              </th>
            </tr>
            <tr>
              <th colSpan={2} className="total-money tf">
                Tổng tiền thanh toán: {formatPrice(TotalPrice)}
              </th>
            </tr>
          </tfoot>
        </table>
        <br />
        <hr />
        <ul className="ul-move">
          <li className="">
            <Link to={"/"} className="ul-move-a-back">
              Về trang chủ
            </Link>
          </li>
          <li className="">
            <a href="order.php" className="ul-move-a">
              &nbsp; &nbsp;Đặt hàng &nbsp; &nbsp;
            </a>
          </li>
        </ul>
        <br />
      </div>
    </div>
  );
};

export default Cart;
