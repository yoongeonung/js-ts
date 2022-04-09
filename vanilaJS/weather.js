const weather = document.querySelector("#weather");
const API_KEY = config.API_KEY;

let latitude = 0;
let longitude = 0;

const axiosWeather = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
    method: "GET",
    params: {
        appid:API_KEY,
        units:"metric",
        lang:"ja",
        q:"tokyo"
    }
});

const success = async (pos) => {
    const coords = pos.coords;
    latitude = coords.latitude;
    longitude = coords.longitude;
    const weatherInfo = await getWeatherInfo();
    printWeatherInfo(weatherInfo);
}

const printWeatherInfo = ({data:{main:{temp}, weather:[{description}]}}) => {
    weather.innerText = `今日の天気は${description}、温度は${Math.floor(temp)}℃です`;
}

const error = (message) => {
    console.log(message);
}

const getWeatherInfo = () => {
    return axiosWeather.get("", {
        params: {
            lat: latitude,
            lon: longitude,
        }
    });
}

navigator.geolocation.getCurrentPosition(success, error);




