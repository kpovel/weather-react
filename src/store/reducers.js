import {combineReducers} from "redux";
import {SAVE_CITY, REMOVE_CITY, WEATHER_NOW, WEATHER_FORECAST} from "./action/actionTypes.js";

const savedList = JSON.parse(localStorage.getItem("savedCities")) || [];

function cities(state = savedList, action) {
    const newSet = new Set(state);
    switch (action.type) {
        case SAVE_CITY:
            newSet.add(action.city);
            localStorage.setItem("savedCities", JSON.stringify([...newSet]));
            return newSet;
        case REMOVE_CITY:
            newSet.delete(action.city);
            localStorage.setItem("savedCities", JSON.stringify([...newSet]));
            return newSet;
        default:
            return state;
    }
}

const weatherData = JSON.parse(localStorage.getItem("lastSearchedCity")) || "";
function setWeather(state = weatherData, action) {
    let newData;
    switch (action.type) {
        case WEATHER_NOW:
            newData = action.data;
            localStorage.setItem("lastSearchedCity", JSON.stringify(newData));
            return newData;
        default:
            return state;
    }
}

const weatherForecastData = JSON.parse(localStorage.getItem("lastSearchedForecast")) || "";
function setWeatherForecastData(state = weatherForecastData, action) {
    let newData;
    switch (action.type) {
        case WEATHER_FORECAST:
            newData = action.data;
            localStorage.setItem("lastSearchedForecast", JSON.stringify(newData));
            return newData;
        default:
            return state;
    }
}

const weather = combineReducers({
    cities,
    setWeather,
    setWeatherForecastData
});

export default weather;