import {WeatherIndicator} from "./weatherIndicator";

export default function DetailsTab({cityName, feelsLike, sunrise, sunset, temp, weather}) {
    return (
        <div className="weather-details main-tabs__block">
            <h3 className="weather-title weather-details__title">{cityName}</h3>
            <ul className="weather-detail__list">
                <WeatherIndicator indicator="Temperature: " value={temp}/>
                <WeatherIndicator indicator="Feels like: " value={feelsLike}/>
                <WeatherIndicator indicator="Weather: " value={weather}/>
                <WeatherIndicator indicator="Sunrise: " value={sunrise}/>
                <WeatherIndicator indicator="Sunset: " value={sunset}/>
            </ul>
        </div>
    );
}