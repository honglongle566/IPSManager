import axios from "axios";

export function authenticate (userData){
    return axios.post(`localhost:5000/login/`,userData)
}