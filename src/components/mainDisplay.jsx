import MainTab from "./routes/mainTab";
import DetailsTab from "./routes/details/detailsTab";
import ForecastTab from "./routes/forecast/forecastTab";
import Navbar from "./navbar";
import {AddedLocation} from "./savedList/addedLocation";
import {Route, Routes} from "react-router-dom";
import {tempToCelsius} from "../utilities/formattedTemp";
import {formatTime} from "../utilities/formatDate";
import {weatherForecastParams} from "./routes/forecast/weatherForecastParams";
import {useDispatch, useSelector} from "react-redux";
import {addCity, removeCity} from "../store/action/action";
import {memo} from "react";

export const MainDisplay = memo(function MainDisplay({searchCity}) {
    const weatherNow = useSelector(state => state.setWeather);
    const forecastWeather = useSelector(state => state.setWeatherForecastData);

    const savedCities = useSelector(state => new Set(state.cities));
    const dispatch = useDispatch();

    const cityName = weatherNow?.name ? weatherNow.name : "Rio";
    const weatherIcon = weatherNow?.weather ?
        `https://openweathermap.org/img/wn/${weatherNow.weather[0].icon}@4x.png` :
        "https://openweathermap.org/img/wn/02d@4x.png";
    const temp = weatherNow?.main?.temp ? tempToCelsius(weatherNow.main.temp) : "14°";
    const feelsLike = weatherNow?.main?.feels_like ? tempToCelsius(weatherNow.main.feels_like) : "14°";
    const weather = weatherNow?.weather ? weatherNow.weather[0].main : "Clouds";
    const sunrise = weatherNow?.sys.sunrise ? formatTime(weatherNow.sys.sunrise) : "03:21";
    const sunset = weatherNow?.sys?.sunset ? formatTime(weatherNow.sys.sunset) : "18:51";
    const forecastList = forecastWeather?.list ? weatherForecastParams(forecastWeather.list) : "";

    function changeSaveCityList() {
        const isCitySaved = savedCities.has(cityName);

        if (isCitySaved) {
            dispatch(removeCity(cityName));

        } else {
            dispatch(addCity(cityName));
        }
    }

    function deleteCityByButtonRemove(city) {
        dispatch(removeCity(city));
    }

    return (
        <div className="main-box">
            <div className="main-box__left">
                <div className="main-tabs__body">
                    <Routes>
                        <Route path="/" element={<MainTab cityName={cityName}
                                                          icon={weatherIcon}
                                                          temp={temp}
                                                          changeSaveCityList={changeSaveCityList}
                                                          savedCities={savedCities}
                        />}/>
                        <Route path="/details" element={<DetailsTab cityName={cityName}
                                                                    temp={temp}
                                                                    feelsLike={feelsLike}
                                                                    weather={weather}
                                                                    sunrise={sunrise}
                                                                    sunset={sunset}
                        />}/>
                        <Route path="/forecast" element={<ForecastTab cityName={cityName}
                                                                      forecastList={forecastList}
                        />}/>
                        <Route path="/description" element={
                            <div className="weather-description">
                                <h2 className="weather-description__title">Weather App</h2>
                                <p className="weather-description__overview">
                                    The weather app is an easy-to-use and reliable source of accurate weather
                                    information. It provides current conditions and forecasts for locations around the
                                    world, allowing users to quickly check the weather in their area. Additionally,
                                    users can access detailed hourly forecasts and stay informed of upcoming changes.
                                    The app features a clean and user-friendly interface, making navigation and use
                                    simple. With this app, users can stay up-to-date on their local weather, no matter
                                    where they are.
                                </p>
                            </div>}/>
                        <Route path="*" element={<p>There&apos;s nothing here!</p>}/>
                    </Routes>
                </div>
                <Navbar/>
            </div>
            <div className="main-box__right">
                <AddedLocation savedCities={savedCities}
                               deleteCity={deleteCityByButtonRemove}
                               searchCity={searchCity}
                />
            </div>
        </div>
    );
});
