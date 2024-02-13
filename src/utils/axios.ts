import axios from "axios";

export const server = axios.create({
    baseURL: "127.0.0.1:8080"
})