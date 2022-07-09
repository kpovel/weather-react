import {ForecastCell} from "./forecastCell";

export default function ForecastTab() {
    return (
        <div className="weather-forecast main-tabs__block" id="tab_3">
            <h3 className="weather-title weather-forecast__title">
                Rio
            </h3>
            <ul className="weather-forecast__list">
                <ForecastCell date="12 Mar" time="21:00" temperature="7°" feelsLike="3°" weather="Clouds"/>
                <ForecastCell date="12 Mar" time="21:00" temperature="7°" feelsLike="3°" weather="Clouds"/>
                <ForecastCell date="12 Mar" time="21:00" temperature="7°" feelsLike="3°" weather="Clouds"/>
            </ul>
        </div>
    );
}