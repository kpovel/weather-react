import "./App.css";
import {SearchForm} from "./components/searchForm";
import {MainDisplay} from "./components/mainDisplay";
import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {getWeather, getWeatherForecast} from "./store/action/action";

function App() {
    const dispatch = useDispatch();
    const [location, setLocation] = useState("");

    function saveLocationName(e) {
        setLocation(e);
    }

    const handleSubmit = useCallback(async () => {
        await dispatch(getWeather(location));
        await dispatch(getWeatherForecast(location));
        setLocation("");
    }, [dispatch, location]);

    const searchWeatherFromSavedList = useCallback(async (city) => {
        await dispatch(getWeather(city));
        await dispatch(getWeatherForecast(city));
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
