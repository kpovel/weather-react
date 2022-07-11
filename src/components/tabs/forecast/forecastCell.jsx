export function ForecastCell(props) {
    return (
        <li className="weather-forecast__list-item">
            <div className="weather-forecast__top">
                <p className="weather-forecast__text">{props.forecastDate}</p>
                <p className="weather-forecast__text">{props.forecastTime}</p>
            </div>
            <div className="weather-forecast__bottom">
                <div className="weather-forecast__parameters">
                    <p className="weather-forecast__text">{props.temperature}</p>
                    <p className="weather-forecast__text">{props.feelsLike}</p>
                </div>
                <div className="weather-forecast__precipitation">
                    <p className="weather-forecast__text">{props.precipitation}</p>
                    <img src={props.precipitationIcon}
                         alt="weather icon"
                         className="weather-forecast__img"/>
                </div>
            </div>
        </li>
    );
}