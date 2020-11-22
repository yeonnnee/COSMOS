import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;
const api = axios.create({
    baseURL: `https://api.nasa.gov/planetary/apod`,
    params: {
        api_key: api_key,
    },
});

export default api;
