export default function ForecastTab({cityName, forecastList}) {
    return (
        <div className="weather-forecast main-tabs__block">
            <h3 className="weather-title weather-forecast__title">{cityName}</h3>
            <ul className="weather-forecast__list">
                {forecastList}
            </ul>
        </div>
    );
}