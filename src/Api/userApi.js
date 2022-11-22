import axiosClient from './axios';

const userApi = {
    register(data){
        const url = '/user/create.php';
        return axiosClient.post(url, data);
    },

    login(data){
        const url = '/login.php';
        return axiosClient.post(url,data);
    },

    getUser(id){
        const url = `/selectUserById.php/${1}`;
        return axiosClient.get(url);
    },

    updateUser(data){
        const url = '/updateUser.php';
        return axiosClient.put(url,data);
    }
}

export default userApi;