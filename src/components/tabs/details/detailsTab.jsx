import {WeatherIndicator} from "./weatherIndicator";

export default function DetailsTab(props) {
    return (
        <div className="weather-details main-tabs__block">
            <h3 className="weather-title weather-details__title">{props.cityName}</h3>
            <ul className="weather-detail__list">
                <WeatherIndicator indicator="Temperature: " value={props.temp}/>
                <WeatherIndicator indicator="Feels like: " value={props.feelsLike}/>
                <WeatherIndicator indicator="Weather: " value={props.weather}/>
                <WeatherIndicator indicator="Sunrise: " value={props.sunrise}/>
                <WeatherIndicator indicator="Sunset: " value={props.sunset}/>
            </ul>
        </div>
    );
}