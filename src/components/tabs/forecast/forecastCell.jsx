export function ForecastCell(props) {
    return (
        <li className="weather-forecast__list-item">
            <div className="weather-forecast__top">
                <p className="weather-forecast__text">{props.date}</p>
                <p className="weather-forecast__text">{props.time}</p>
            </div>
            <div className="weather-forecast__bottom">
                <div className="weather-forecast__parameters">
                    <p className="weather-forecast__text"> Temperature: {props.temperature}</p>
                    <p className="weather-forecast__text"> Feels like: {props.feelsLike}</p>
                </div>
                <div className="weather-forecast__precipitation">
                    <p className="weather-forecast__text">{props.weather}</p>
                    <img src="https://openweathermap.org/img/wn/02n.png"
                         alt="weather icon"
                         className="weather-forecast__img"/>
                </div>
            </div>
        </li>
    );
}