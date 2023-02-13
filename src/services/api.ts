import axios from "axios"

const useApi = (ctx?: any) => { 
    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    })

    return api;
}

export const api = useApi();