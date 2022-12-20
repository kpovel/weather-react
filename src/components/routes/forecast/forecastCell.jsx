export function ForecastCell({feelsLike, forecastDate, forecastTime, precipitation, precipitationIcon, temperature}) {
    return (
        <li className="weather-forecast__list-item">
            <div className="weather-forecast__top">
                <p className="weather-forecast__text">{forecastDate}</p>
                <p className="weather-forecast__text">{forecastTime}</p>
            </div>
            <div className="weather-forecast__bottom">
                <div className="weather-forecast__parameters">
                    <p className="weather-forecast__text">{temperature}</p>
                    <p className="weather-forecast__text">{feelsLike}</p>
                </div>
                <div className="weather-forecast__precipitation">
                    <p className="weather-forecast__text">{precipitation}</p>
                    <img src={precipitationIcon}
                         alt="weather icon"
                         className="weather-forecast__img"/>
                </div>
            </div>
        </li>
    );
}