import axiosClient from './axios';

const productsAPI = {
    getAll(page){
        const newpage = !page || page <= 1 ? 1 : page
        const url = `/listProduct.php?page=${1}`;
        return axiosClient.get(url);
    },
    getDetail(id){
        const url = `/selectProductById.php/${id}`;
        return axiosClient.get(url);
    }
}

export default productsAPI;