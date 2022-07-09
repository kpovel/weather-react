export function WeatherIndicator(props) {
    return (
        <li className="weather-detail__list-item">
            {props.indicator}
            <span className="temperature">{props.value}</span>
        </li>
    );
}
