import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://air-blog-backend.vercel.app/backend",
});
