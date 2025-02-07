import { axios } from "../router/request";
import {USER_MODULE} from "./api";

type LoginInfo = {
    phone: string,
    password: string
}

type RegisterInfo = {
    name: string,
    phone: string,
    password: string,
    confirmPassword: string,
    createTime: string,
}

export const getUser = () =>{
    return axios.get(USER_MODULE);
}

export const loginApi = (loginInfo: LoginInfo) => {
    return axios.post(`${USER_MODULE}/login`, null, {params: loginInfo})
        .then(res => {
            return res
        })
}

export const registerApi = (register: RegisterInfo) => {
    return axios.post(`${USER_MODULE}/register`, register)
        .then(res => {
            return res
        })
}

export const addRate = (rate: number) => {
    rate = parseFloat(rate.toFixed(4))
    return axios.post(`${USER_MODULE}/correctRate`, null, {params: {rate: rate}})
}