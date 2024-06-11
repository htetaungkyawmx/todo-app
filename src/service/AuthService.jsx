import axios from "axios";

const BASE_AUTH_URL = "http://localhost:8080/auth";





export const resgiter_user = (user) => axios.post(`${BASE_AUTH_URL}/register`,user);
export const login_api_call = (userNameOrEmail,password) =>
    axios.post(`${BASE_AUTH_URL}/login`,{userNameOrEmail,password})

export const storeToken = (token) => localStorage.setItem("token",token);
export const getToken = () => localStorage.getItem("token");