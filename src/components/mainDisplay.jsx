import MainTab from "./tabs/mainTab";
import DetailsTab from "./tabs/details/detailsTab";
import ForecastTab from "./tabs/forecast/forecastTab";
import Navbar from "./navbar";
import {AddedLocation} from "./addedLocation";
import {Route, Routes} from "react-router-dom";
import {tempToCelsius} from "../utilities/formattedTemp";
import {formatTime} from "../utilities/formatDate";
import {weatherForecastParams} from "./tabs/forecast/weatherForecastParams";


export {MainDisplay};

function MainDisplay({weatherNow, forecastWeather}) {
    const cityName = weatherNow.name ? weatherNow.name : "Rio";
    const weatherIcon = weatherNow.weather ?
        `https://openweathermap.org/img/wn/${weatherNow.weather[0].icon}@4x.png` :
        "https://openweathermap.org/img/wn/02d@4x.png";
    const temp = weatherNow.main ? tempToCelsius(weatherNow.main.temp) : "14°";
    const feelsLike = weatherNow.main ? tempToCelsius(weatherNow.main.feels_like) : "14°";
    const weather = weatherNow.weather ? weatherNow.weather[0].main : "Clouds";
    const sunrise = weatherNow.sys ? formatTime(weatherNow.sys.sunrise) : "03:21";
    const sunset = weatherNow.sys ? formatTime(weatherNow.sys.sunset) : "18:51";
    const forecastList = forecastWeather.list ? weatherForecastParams(forecastWeather.list) : "";
    
    return (
        <div className="main-box">
            <div className="main-box__left">
                <div className="main-tabs__body">
                    <Routes>
                        <Route path="/" element={<MainTab cityName={cityName}
                                                          icon={weatherIcon}
                                                          temp={temp}
                        />}/>
                        <Route path="/details" element={<DetailsTab cityName={cityName}
                                                                    temp={temp}
                                                                    feelsLike={feelsLike}
                                                                    weather={weather}
                                                                    sunrise={sunrise}
                                                                    sunset={sunset}
                        />}/>
                        {/*todo: forecast weather*/}
                        <Route path="/forecast" element={<ForecastTab cityName={cityName}
                                                                      forecastList={forecastList}
                        />}/>
                    </Routes>
                </div>
                <Navbar/>
            </div>
            <div className="main-box__right">
                <AddedLocation/>
            </div>
        </div>
    );
}
