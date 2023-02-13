import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import productsAPI from "../../Api/productApi";
import Category from "./Category";
import ProductList from "./ProductList";
import Sort from "../Sort/Sort";
import Pagination from "../Pagination/index";

const ListPage = ({search}) => {
  const [productlist, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageTotalCount, setPageTotalCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [brandID, setBrandID] = useState(-1);
  const [title, setTiTle] = useState("");
  const [is_Sale , setSale] = useState(false);
  const [sort, setSort] = useState("");
  useEffect(() => {
    const getProduct = async () => {
      try {
        const getApi = await productsAPI.getAll({
          pageCount,
          title,
          sort,
          brandID,
          is_Sale, 
          search
        });
        setList(getApi.data.product);
        setPageTotalCount(getApi.data.totalPage);
        // console.log(getApi.data);
        setLoading(false);
      } catch (error) {}
    };
    getProduct();
  }, [title, sort, brandID, pageCount , is_Sale , search]);
  // console.log(productlist);
  const handleChangeBrandID = (id) => {
    setBrandID(id);
    setPageCount(0);
    setTiTle("");
  };

  const handleChangeByType = (value) => {
    setTiTle(value);
    setPageCount(0);
  };

  const handleChangeBySort = (sort) => {
    setSort(sort);
    setPageCount(0);
  };

  const handleChangeSale = (value)=>{
    setSale(value)
  }

  const handleChangePage = (page) => {
    setPageCount(page);
  };

  if (loading) return;

  return (
    <div className="grid__row grid__content">
      <Category handleChange={handleChangeBrandID} />
      <div className="grid__column-10">
        <Sort
          handleChangeByType={handleChangeByType}
          handleChangeBySort={handleChangeBySort}
          handleChangeSale = {handleChangeSale}
          is_Sale = {is_Sale}
        />
        {productlist == undefined ? (
          <img src={require("../../assets/img/cart-empty.png")} />
        ) : (
          <>
            <ProductList productlist={productlist} />
            <div className="home-filtel">
              <div className="home-filter-page">
                <Pagination
                  pageCount={pageCount}
                  pageTotalCount={pageTotalCount}
                  handleChangePage={handleChangePage}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ListPage;
