import React from "react";
import {BsFillSuitHeartFill} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../../ultis/common";

const Product = (props) => {
  const {item} = props;
  const isSale = item.is_sale == 1 ? true : false;
  const title = `home-product-item-${item.title}`;
  const navigate = useNavigate();

  const handleDetail = (id) =>{
    navigate(`/product/${id}`)
  }
  return (
    <div onClick={()=>handleDetail(item.id)} className="grid__column-2-4">
      <a className="home-product-item">
        <div
          className="home-product-item-img"
          style={{
            backgroundImage:
              `url(${item.image})`,
          }}
        ></div>
        <h4 className="home-product-item-name">
          {item.productName}
        </h4>
        <div className="home-product-item-price">
          <span style={{textDecoration: isSale ? '' : 'none'}} className="home-product-item-price-old">{formatPrice(item.price)}</span>
          {
            isSale &&  <span className="home-product-item-price-new">{formatPrice(item.priceAfter)}</span>
          }    
        </div>
        <div className="home-product-item-action">
          <span className="home-product-item-like home-product-item-like-liked">
            <BsFillSuitHeartFill className="fa-solid fa-heart home-product-item-like-icon-fill"/>
          </span>
        </div>
        <div className="home-product-item-origin">
          <span className="home-product-item-brand">Casio</span>
          <span className="home-product-item-origin-name">{item.origin}</span>
        </div>

        <div className={title}>
          <span>{item.title}</span>
        </div>
      </a>
    </div>
  );
};

export default Product;
