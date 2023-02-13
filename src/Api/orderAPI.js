import { MdSouth } from 'react-icons/md';
import axiosClient from './axios';

const orderApi = {
    updateOrder(data){
        const url = '/addOrder.php';
        return axiosClient.post(url,data);
    },

    getOrder(id){
        const param = {userID : id};
        console.log(param)
        const url = '/SelectOrderById.php';
        return axiosClient.post(url,param);
    },

    getOrderDetail(id){
        const param = {orderID : id};
        const url = '/SelectDetailById.php';
        return axiosClient.post(url,param);
    }
}

export default orderApi;