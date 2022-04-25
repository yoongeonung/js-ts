import axios from "axios";

const API_KEY = "96391ed5055e40b1bfa8c17f79a093ba";


const axiosWeather = axios.create({
    baseURL: `https://newsapi.org/v2`,
    method: "GET",
    params: {
        apiKey: API_KEY,
        language: "en",
    }
});

export const getNewses = () => {
    return axiosWeather.get("everything",{
        params :{
            q: "tesla",
        }
    });
};




