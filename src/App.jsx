import "./App.css";
import {SearchForm} from "./components/searchForm";
import {MainDisplay} from "./components/mainDisplay";
import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchWeatherForecast, fetchCurrentWeather} from "./store/slices";

function App() {
    const dispatch = useDispatch();
    const [location, setLocation] = useState("");

    function saveLocationName(e) {
        setLocation(e);
    }

    const handleSubmit = useCallback(() => {
        dispatch(fetchCurrentWeather(location));
        dispatch(fetchWeatherForecast(location));

        setLocation("");
    }, [dispatch, location]);

    const searchWeatherFromSavedList = useCallback(city => {
        dispatch(fetchCurrentWeather(city));
        dispatch(fetchWeatherForecast(city));
    }, [dispatch]);

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
