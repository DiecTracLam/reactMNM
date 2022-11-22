import React, { useEffect, useState } from "react";
import "../../assets/css/pagination.css";
import ReactPaginate from "react-paginate";
import { FcPrevious, FcNext } from 'react-icons/fc';

function PaginatedItems({ pageTotalCount , handleChangePage , pageCount }) {
  const handlePageClick = (event) => {
    handleChangePage(event.selected) ;
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FcNext/>}
        onPageChange={handlePageClick}
        forcePage={pageCount}
        pageRangeDisplayed={3}
        pageCount={pageTotalCount}
        previousLabel={<FcPrevious/>}
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        pageLinkClassName={"page-num"}
        activeLinkClassName={"active"}
        previousLinkClassName={"page-num"}
        nextLinkClassName={"page-num"}
      />
    </>
  );
}
export default PaginatedItems;
