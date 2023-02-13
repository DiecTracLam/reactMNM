import axiosClient from './axios';

const productsAPI = {
    getAll(param){
        // console.log(param)
        const {pageCount , title ,sort , brandID , is_Sale , search} = param;
        const newpage = !pageCount || pageCount < 1 ? 1 : pageCount + 1;
        const is_sale = is_Sale == true ? "is_sale=1" : "" ;
        const brandId = search == "" ? -1 : brandID ;
        const url = `/listProduct.php?page=${newpage}&sort=${sort}&brandID=${brandId}&title=${title}&${is_sale}&search=${search}`;
        return axiosClient.get(url);
    },
    getDetail(id){
        const url = `/selectProductById.php/${id}`;
        return axiosClient.get(url);
    }
}

export default productsAPI;