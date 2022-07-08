export default function DetailsTab() {
    return (
        <div className="weather-details main-tabs__block" id="tab_2">
            <h3 className="weather-title weather-details__title">
                Rio
            </h3>
            <ul className="weather-detail__list">
                <li className="weather-detail__list-item">
                    Temperature:
                    <span className="temperature">14°</span>
                </li>
                <li className="weather-detail__list-item">
                    Feels like:
                    <span className="feels_like">10°</span>
                </li>
                <li className="weather-detail__list-item">
                    Weather:
                    <span className="weather">cloud</span>
                </li>
                <li className="weather-detail__list-item">
                    Sunrise:
                    <span className="sunrise">03:21</span>
                </li>
                <li className="weather-detail__list-item">
                    Sunset:
                    <span className="sunset">18:51</span>
                </li>
            </ul>
        </div>
    );
}