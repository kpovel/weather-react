import "./App.css";
import {SearchForm} from "./components/searchForm";
import {MainDisplay} from "./components/mainDisplay";
import {useEffect, useState} from "react";

function App() {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState("");
    const [forecastWeather, setForecastWeather] = useState("");
    const API_KEY = "4783b73cfe02019303d03a9d793cc64b";
    
    useEffect(() => {
        setWeather(JSON.parse(localStorage.getItem( "lastSearchedCity")));
        setForecastWeather(JSON.parse(localStorage.getItem("lastSearchedForecast")));
    }, []);
    
    function saveLocationName(e) {
        setLocation(e);
    }
    
    function handleSubmit() {
        getWeather();
        getForecastWeather();
        setLocation("");
    }
    
    async function getWeather() {
        const SERVER_URL = "https://api.openweathermap.org/data/2.5/weather";
        const url = `${SERVER_URL}?q=${location}&appid=${API_KEY}`;
    
        try {
            const response = await fetch(url);
            const weather = await response.json();
        
            const receivedError = !response.ok;
            if (receivedError){
                throw new Error(weather.message);
            }
    
            setWeather(weather);
            localStorage.setItem("lastSearchedCity", JSON.stringify(weather));
        }
        catch (err) {
            alert(err);
        }
    }
    
    async function getForecastWeather() {
        const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";
        try {
            const url = `${FORECAST_URL}?q=${location}&cnt=3&appid=${API_KEY}`;
            const response = await fetch(url);
            const forecastWeather = await response.json();
            setForecastWeather(forecastWeather);
            localStorage.setItem("lastSearchedForecast", JSON.stringify(forecastWeather));
        }
        catch (err) {
            alert(err);
        }
    }
    
    return (
        <div>
            <main className="main">
                <div className="container">
                    <SearchForm onHandleChange={saveLocationName}
                                value={location}
                                onHandleSubmit={handleSubmit}/>
                    <MainDisplay weatherNow={weather}
                                 forecastWeather={forecastWeather}/>
                </div>
            </main>
        </div>
    );
}

export default App;
