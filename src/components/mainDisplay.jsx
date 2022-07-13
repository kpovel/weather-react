import MainTab from "./tabs/mainTab";
import DetailsTab from "./tabs/details/detailsTab";
import ForecastTab from "./tabs/forecast/forecastTab";
import Navbar from "./navbar";
import {AddedLocation} from "./savedList/addedLocation";
import {Route, Routes} from "react-router-dom";
import {tempToCelsius} from "../utilities/formattedTemp";
import {formatTime} from "../utilities/formatDate";
import {weatherForecastParams} from "./tabs/forecast/weatherForecastParams";
import {useEffect, useState} from "react";

export {MainDisplay};

function MainDisplay({weatherNow, forecastWeather}) {
    const [savedCities, setSavedCities] = useState(new Set());
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
    
    useEffect(() => {
        const listSavedCities = localStorage.getItem("savedCities");
        if (listSavedCities) {
            const savedList = JSON.parse(listSavedCities);
            setSavedCities(new Set(savedList));
        }
    },[]);
    
    function changeSaveCityList() {
        const isCitySaved = savedCities.has(cityName);
        
        if (isCitySaved) {
            setSavedCities(prev => {
                const newList = new Set(prev);
                newList.delete(cityName);
                localStorage.setItem("savedCities", JSON.stringify([...newList]));
                return newList;
            });
        } else {
            setSavedCities(prev => {
                const newList = new Set(prev);
                newList.add(cityName);
                localStorage.setItem("savedCities", JSON.stringify([...newList]));
                return newList;
            });
        }
    }
    
    function deleteCityByButtonRemove(city) {
        setSavedCities(prev => {
            const newList = new Set(prev);
            newList.delete(city);
            localStorage.setItem("savedCities", JSON.stringify([...newList]));
            return newList;
        });
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
                    </Routes>
                </div>
                <Navbar/>
            </div>
            <div className="main-box__right">
                <AddedLocation savedCities={savedCities}
                               deleteCity={deleteCityByButtonRemove}/>
            </div>
        </div>
    );
}
