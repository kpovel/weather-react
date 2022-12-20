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

export function MainDisplay({weatherNow, forecastWeather, searchCity}) {
    const savedCities = useSelector(state => new Set(state.cities));
    const dispatch = useDispatch();

    const cityName = weatherNow ? weatherNow.name : "Rio";
    const weatherIcon = weatherNow ?
        `https://openweathermap.org/img/wn/${weatherNow.weather[0].icon}@4x.png` :
        "https://openweathermap.org/img/wn/02d@4x.png";
    const temp = weatherNow ? tempToCelsius(weatherNow.main.temp) : "14°";
    const feelsLike = weatherNow ? tempToCelsius(weatherNow.main.feels_like) : "14°";
    const weather = weatherNow ? weatherNow.weather[0].main : "Clouds";
    const sunrise = weatherNow ? formatTime(weatherNow.sys.sunrise) : "03:21";
    const sunset = weatherNow ? formatTime(weatherNow.sys.sunset) : "18:51";
    const forecastList = forecastWeather ? weatherForecastParams(forecastWeather.list) : "";
    
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
                        <Route path="/help" element={<p>
                            This app helps you quickly search weather and save many cities for quick access to cities.
                            Also, in the other tab, you can find more detail and forecast weather.
                        </p>}/>
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
}
