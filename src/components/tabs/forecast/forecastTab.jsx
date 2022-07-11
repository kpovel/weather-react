export default function ForecastTab(props) {
    return (
        <div className="weather-forecast main-tabs__block">
            <h3 className="weather-title weather-forecast__title">{props.cityName}</h3>
            <ul className="weather-forecast__list">
                {props.forecastList}
            </ul>
        </div>
    );
}