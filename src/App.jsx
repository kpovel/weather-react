import "./App.css";
import {SearchForm} from "./components/searchForm";
import {MainDisplay} from "./components/mainDisplay";
import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {setForecastWeather, setWeatherNow} from "./store/action/action";

function App() {
    const dispatch = useDispatch();
    const [location, setLocation] = useState("");
    const API_KEY = "4783b73cfe02019303d03a9d793cc64b";

    const getWeather = useCallback(async (city) => {
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
    }, [API_KEY, dispatch]);

    const getForecastWeather = useCallback(async function (city) {
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
    }, [API_KEY, dispatch]);

    function saveLocationName(e) {
        setLocation(e);
    }

    const handleSubmit = useCallback(async () => {
        await getWeather(location);
        await getForecastWeather(location);
        setLocation("");
    }, [getForecastWeather, getWeather, location]);

    const searchWeatherFromSavedList = useCallback(async (city) => {
        await getWeather(city);
        await getForecastWeather(city);
    }, [getForecastWeather, getWeather]);

    return (
        <main className="main">
            <div className="container">
                <SearchForm onHandleChange={saveLocationName}
                            value={location}
                            onHandleSubmit={handleSubmit}/>
                <MainDisplay searchCity={searchWeatherFromSavedList}/>
            </div>
        </main>
    );
}

export default App;
