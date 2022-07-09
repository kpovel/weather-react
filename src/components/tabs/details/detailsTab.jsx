import {WeatherIndicator} from "./weatherIndicator";

export default function DetailsTab() {
    return (
        <div className="weather-details main-tabs__block" id="tab_2">
            <h3 className="weather-title weather-details__title">
                Rio
            </h3>
            <ul className="weather-detail__list">
                <WeatherIndicator indicator="Temperature: " value="14°"/>
                <WeatherIndicator indicator="Feels like: " value="10°"/>
                <WeatherIndicator indicator="Weather: " value="cloud"/>
                <WeatherIndicator indicator="Sunrise: " value="03:21"/>
                <WeatherIndicator indicator="Sunset: " value="18:51"/>
            </ul>
        </div>
    );
}