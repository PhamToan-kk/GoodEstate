import axiosClient from "./axiosClient"

export const authApi={
    signIn:(params)=>{
        return axiosClient.post('/signin',params);
    }
}