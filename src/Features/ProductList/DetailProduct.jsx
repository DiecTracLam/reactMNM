import React, { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import productsAPI from "../../Api/productApi";
import { formatPrice } from "../../ultis/common";
import { addToCart } from "../Cart/cartRedux";

const DetailProduct = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [product, setProduct] = useState();
  const [amount , setAmount] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api = async () => {
      const getApi = await productsAPI.getDetail(params.id);
      setProduct(getApi.data[0]);
      setLoading(false);
    };
    api();
  }, []);

  const handleChangeAmount=(e)=>{
    if(e.target.value > 30){
      setAmount(30);
      return;
    }
    if( e.target.value < 1) {
      setAmount(1)
      return
    };
    setAmount(e.target.value)
  }

  const handleAddToCart=()=>{
    const newItem = {
      ...product,
      quantity : amount,
    }
    dispatch(addToCart(newItem))
  }
  if (loading) return;
  return (
    <>
      <div className="container">
        <div className="grid">
          <div className="grid__row grid__content">
            <div className="grid__column-8">
              <div className="grid__column-50">
                <div
                  className="home-product-item-img"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
              </div>
              <div className="grid__column-50">
                <h3 className="product-heading">{product.productName}</h3>

                <h3 className="product-heading">
                  Giá:{" "}
                  {product.is_sale == 1
                    ? formatPrice(product.priceAfter)
                    : formatPrice(product.price)}
                </h3>
                <ul className="product-list">
                  <li className="product-info">
                    Mã Số Sản Phẩm: SSB313P{product.id}
                  </li>
                  <li className="product-info">
                    Thương Hiệu: {product.nameBrand}
                  </li>
                  <li className="product-info">Xuất xứ: {product.origin}</li>
                  <li className="product-info">Giới tính: Nam</li>
                  <li className="product-info">Bảo hàng:5 năm</li>
                  <li className="product-info">Kính: Hardlex Crystal</li>
                  <li className="product-info">Dây: Dây kim loại</li>
                  <li className="product-info">Đường kính: 45 mm</li>
                </ul>
                <p className="product-info">{product.description}</p>

                <div id="add-to-cart-form" className="add-form">
                  <div>
                    <label className="label-amount">Số lượng:</label>
                    <input className="inp-amount" onChange={handleChangeAmount} type="number" value={amount} />
                  </div>

                  <div onClick={handleAddToCart} className="product-buy">
                    <label className=" btn btn--buy btn-addCart ">
                      <BsCartPlus/>
                      <span className="btnText-add">THÊM VÀO GIỎ HÀNG</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
