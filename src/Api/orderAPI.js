import axiosClient from './axios';

const orderApi = {
    updateOrder(data){
        const url = '/updateUser.php';
        return axiosClient.put(url,data);
    }
}

export default orderApi;