import axios from "axios";
import { setAccessToken } from "../features/userSlice";
import { store } from "../store";
import { API_URL } from "../../utils/config";
// import Cookies from 'js-cookie'; 

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

// Response interceptor to handle token refresh
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If the error status is 401 (Unauthorized) and it's not a retry yet
        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                // Request a new access token using the refresh token endpoint
                const response = await axios.post(
                    `${API_URL}/auth/refresh-token`,
                    null,
                    {
                        withCredentials: true,
                    }
                );

                // Update access token in cookies
                const { accessToken } = response.data;
                // Cookies.set('accessToken', accessToken);
                store.dispatch(setAccessToken(accessToken));

                // Update original request with the new access token and retry
                originalRequest.headers[
                    "Authorization"
                ] = `Bearer ${accessToken}`;
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                // If token refresh fails, handle it (e.g., redirect to login)
                console.error("Token refresh failed:", refreshError);
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
