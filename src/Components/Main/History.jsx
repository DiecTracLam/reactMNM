import React from "react";
import PropTypes from "prop-types";

const History = (props) => {
  return (
    <>
      <div class="container">
        <div class="grid">
          <table>
            <tr class="cart-heading">
              <th class="product-number">STT</th>
              <th class="product-name">Ngày mua</th>
              <th class="total-money">Tổng cộng</th>
              <th class="history-detail">Xem chi tiết</th>
            </tr>
            <tr class="cart-product">
              <td class="product-number">1</td>
              <td class="product-date">26/12/2022</td>
              <td class="total-money">2.700.000</td>
              <td class="history-detail">
                <div class="product-order">
                  <button class="btn btn--order">Chi tiết</button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default History;
