import React from 'react';

const Cart = () => {
    return (
        <div class="container">
            <div class="grid">
                <table style={{backgroundColor:"white"}}>
                    <tr class="cart-heading">
                        <th class="product-number">STT</th>
                        <th class="product-name">Tên sản phẩm</th>
                        <th class="product-img">Ảnh sản phẩm</th>
                        <th class="product-price">Đơn giá</th>
                        <th class="product-quantity">Số lượng</th>
                        <th class="total-money">Thành tiền</th>                       
                    </tr>
                    <tr class="cart-product">
                        <td class="product-number">1</td>
                        <td class="product-name">Seiko SSB</td>
                        <td class="product-img"><img src="https://cdn3.dhht.vn/wp-content/uploads/2017/08/MTP-1215A-7B2DF.jpg" alt=""/></td>
                        <td class="product-price">2.700.000</td>
                        <td class="product-quantity">1</td>
                        <td class="total-money">2.700.000</td> 
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Cart;