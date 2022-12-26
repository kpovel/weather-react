import {SAVE_CITY, REMOVE_CITY, WEATHER_NOW, WEATHER_FORECAST} from "./actionTypes.js";

const API_KEY = "4783b73cfe02019303d03a9d793cc64b";

export function addCity(city) {
    return {
        type: SAVE_CITY,
        city
    };
}

export function removeCity(city) {
    return {
        type: REMOVE_CITY,
        city
    };
}

export function setWeatherNow(data) {
    return {
        type: WEATHER_NOW,
        data
    };
}

export function setForecastWeather(data) {
    return {
        type: WEATHER_FORECAST,
        data
    };
}

function getWeatherNow(city) {
    return async function (dispatch) {
        const SERVER_URL = "https://api.openweathermap.org/data/2.5/weather";
        const url = `${SERVER_URL}?q=${city}&appid=${API_KEY}`;

        try {
            const response = await fetch(url);
            const weather = await response.json();
            const receivedError = !response.ok;

            if (receivedError) {
                throw new Error(weather.message);
            }

            dispatch(setWeatherNow(weather));
        }
        catch (err) {
            alert(err);
        }
    };
}

function getWeatherForecast(city) {
    return async function (dispatch) {
        const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

        try {
            const url = `${FORECAST_URL}?q=${city}&cnt=3&appid=${API_KEY}`;
            const response = await fetch(url);
            const forecastWeather = await response.json();

            dispatch(setForecastWeather(forecastWeather));
        }
        catch (err) {
            alert(err);
        }
    };
}

function shouldUpdateWeatherData(state, city) {
    const previousSearchedCity = state.setWeather.name;
    return previousSearchedCity !== city;
}

export function getWeather(city) {
    return (dispatch, getState) => {
        if (shouldUpdateWeatherData(getState(), city)) {
            try {
                dispatch(getWeatherNow(city));
                dispatch(getWeatherForecast(city));
            }
            catch (err) {
                alert(err);
            }
        } else {
            return Promise.resolve();
        }
    };
}