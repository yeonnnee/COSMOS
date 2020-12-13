import axios, { AxiosPromise } from "axios";

import { IApod } from "./types";

const api_key = process.env.REACT_APP_API_KEY;
const api = axios.create({
    baseURL: `https://api.nasa.gov`,
    params: {
        api_key: api_key,
    },
});

export const getApod: (date?: string) => AxiosPromise<IApod> = (date) => {
    if (date) {
        return api.get(`/planetary/apod/?date=${date}`);
    } else {
        return api.get("/planetary/apod");
    }
};

export const getInsight: () => AxiosPromise = () => {
    return api.get("insight_weather/?feedtype=json&ver=1.0");
};

export default api;
