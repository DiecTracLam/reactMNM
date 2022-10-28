import axiosClient from './axios';

const cateAPI = {
    getAll(){
        const url = "/listCategory.php";
        return axiosClient.get(url);
    }
}

export default cateAPI;