import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:81/WebMNM/control/customer/API/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
