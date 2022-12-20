export function WeatherIndicator({indicator, value}) {
    return (
        <li className="weather-detail__list-item">
            {indicator}
            <span className="temperature">{value}</span>
        </li>
    );
}
