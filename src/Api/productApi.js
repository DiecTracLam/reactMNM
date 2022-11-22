import axiosClient from './axios';

const productsAPI = {
    getAll(param){
        console.log(param)
        const {pageCount , title ,sort , brandID , is_Sale} = param;
        const newpage = !pageCount || pageCount < 1 ? 1 : pageCount + 1;
        const is_sale = is_Sale == true ? "is_sale=1" : "" 
        const url = `/listProduct.php?page=${newpage}&sort=${sort}&brandID=${brandID}&title=${title}&${is_sale}`;
        return axiosClient.get(url);
    },
    getDetail(id){
        const url = `/selectProductById.php/${id}`;
        return axiosClient.get(url);
    }
}

export default productsAPI;