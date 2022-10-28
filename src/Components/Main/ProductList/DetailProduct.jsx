import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsAPI from "../../../Api/productApi";
import { formatPrice } from "../../../ultis/common";

const DetailProduct = (props) => {
  const params = useParams();
  const [product , setProduct] = useState();
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    const api = async()=>{
      const getApi = await productsAPI.getDetail(params.id);
      setProduct(getApi.data[0]);
      console.log(getApi.data)
      setLoading(false);
    }
    api()
  },[])
  if(loading) return;
  return (
    <>
      <div className="container">
        <div className="grid">
          <div className="grid__row grid__content">
            <div className="grid__column-8">
              <div className="grid__column-50">
                <div
                  className="home-product-item-img"
                  style={{backgroundImage : `url(${product.image})`}}
                ></div>
              </div>
              <div className="grid__column-50">
                <h3 className="product-heading">
                  {product.productName}
                </h3>

                <h3 className="product-heading">Giá: {product.is_sale == 1 ? formatPrice(product.priceAfter):formatPrice(product.price)}</h3>
                <ul className="product-list">
                  <li className="product-info">Mã Số Sản Phẩm: SSB313P{product.id}</li>
                  <li className="product-info">Thương Hiệu: {product.nameBrand}</li>
                  <li className="product-info">Xuất xứ: {product.origin}</li>
                  <li className="product-info">Giới tính: Nam</li>
                  <li className="product-info">Bảo hàng:5 năm</li>
                  <li className="product-info">Kính: Hardlex Crystal</li>
                  <li className="product-info">Dây: Dây kim loại</li>
                  <li className="product-info">Đường kính: 45 mm</li>
                </ul>
                <p className="product-info">
                  {product.description}
                </p>

                {/* <form
                  id="add-to-cart-form"
                  action=""
                  method="POST"
                  className="add-form"
                >
                  <h2>
                    Số lượng: <input type="text" value="1" name="" size="4" />
                    <br />
                  </h2>

                  <div className="product-buy">
                    <label className="btn btn--buy label-buy">
                      ĐẶT HÀNG
                    </label>
                    <input
                      type="checkbox"
                      hidden
                      className="buy_product"
                      name=""
                      id="buy-product"
                    />
                    <div className="modal">
                      <label className="modal__overlay"></label>
                      <div className="modal__body">
                        <div className="modal__inner">
                          <div className="au-form">
                            <div className="au-form__container">
                              <div className="au-form__header">
                                <h3 className="au-form__heading">
                                  Thông tin sản phẩm
                                </h3>
                              </div>
                              <div className="product_infor">
                                <div className="product_infor__gr">
                                  <h4 className="product_infor__buy">
                                    Tên sản phẩm:
                                  </h4>
                                  <h2>Casio</h2>
                                </div>
                                <div className="product_infor__gr">
                                  <h4 className="product_infor__buy">Giá tiền:</h4>
                                </div>
                                <div className="product_infor__gr">
                                  <h4 className="product_infor__buy">Số lượng:</h4>
                                </div>
                                <div className="product_infor__gr">
                                  <h4 className="product_infor__buy">Tổng cộng:</h4>
                                </div>
                              </div>
                              <hr />
                              <div className="au-form__header">
                                <h3 className="au-form__heading">Đặt hàng</h3>
                              </div>
                              <div className="au-form__form">
                                <div className="au-form__gr">
                                  <input
                                    type="text"
                                    className="au-form__input"
                                    placeholder="Nhập họ tên khách hàng"
                                  />
                                </div>
                                <div className="au-form__gr">
                                  <input
                                    type="text"
                                    className="au-form__input"
                                    placeholder="Nhập số điện thoại"
                                  />
                                </div>
                                <div className="au-form__gr">
                                  <input
                                    type="text"
                                    className="au-form__input"
                                    placeholder="Nhập địa chỉ"
                                  />
                                </div>
                                <div className="au-form__gr">
                                  <input
                                    type="text"
                                    className="au-form__input"
                                    placeholder="Nhập email"
                                  />
                                </div>
                              </div>
                              <div className="form__controls">
                                <button className="btn">TRỞ LẠI</button>
                                <button className="btn btn--buy">ĐẶT HÀNG</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
