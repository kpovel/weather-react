import {combineReducers} from "redux";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const API_KEY = "4783b73cfe02019303d03a9d793cc64b";

const savedCities = createSlice({
    name: "savedCities",
    initialState: JSON.parse(localStorage.getItem("savedCities")) || [],
    reducers: {
        addCity(state, action) {
            state.push(action.payload);
            localStorage.setItem("savedCities", JSON.stringify(state));
        },
        removeCity(state, action) {
            const index = state.indexOf(action.payload);
            if (~index) state.splice(index, 1);
            localStorage.setItem("savedCities", JSON.stringify(state));
        }
    }
});

export const {addCity, removeCity} = savedCities.actions;


export const fetchCurrentWeather = createAsyncThunk(
    "currentWeather/setCurrentWeather",
    async (city) => {
        const SERVER_URL = "https://api.openweathermap.org/data/2.5/weather";
        const url = `${SERVER_URL}?q=${city}&appid=${API_KEY}`;
        const response = await fetch(url);
        return await response.json();
    }
);

const setCurrentWeather = createSlice({
    name: "currentWeather",
    initialState: JSON.parse(localStorage.getItem("currentWeather")) || "",
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
            state = action.payload;
            localStorage.setItem("currentWeather", JSON.stringify(state));
            return state;
        });
    }
});


export const fetchWeatherForecast = createAsyncThunk(
    "weatherForecast/setWeatherForecast",
    async (city) => {

        const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";
        const url = `${FORECAST_URL}?q=${city}&cnt=3&appid=${API_KEY}`;
        const response = await fetch(url);
        return response.json();
    }
);

const setWeatherForecast = createSlice({
    name: "weatherForecast",
    initialState: JSON.parse(localStorage.getItem("weatherForecast")) || "",
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchWeatherForecast.fulfilled, (state, action) => {
            state = action.payload;
            localStorage.setItem("weatherForecast", JSON.stringify(state));
            return state;
        });
    }
});

const weather = combineReducers({
    savedCities: savedCities.reducer,
    currentWeather: setCurrentWeather.reducer,
    weatherForecast: setWeatherForecast.reducer
});

export default weather;