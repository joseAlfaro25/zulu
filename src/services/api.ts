import axios, { AxiosRequestConfig } from "axios";

const URL=process.env.REACT_APP_API_URL as string;
const CONTENT_TYPE = 'application/json'

export const HEADER:AxiosRequestConfig={
    baseURL: URL,
    responseType: 'json',
    headers: {
        'Content-Type': CONTENT_TYPE
    }
}

export const Response = axios.create(HEADER);