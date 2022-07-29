import {SAVE_CITY, REMOVE_CITY, WEATHER_NOW, WEATHER_FORECAST} from "./actionTypes.js";

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
