import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://laravelreact.loc:81/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.response.use(
    (res) => {
        return res.data ? res.data : res;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
