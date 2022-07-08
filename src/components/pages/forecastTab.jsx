export default function ForecastTab() {
    return (
        <div className="weather-forecast main-tabs__block" id="tab_3">
            <h3 className="weather-title weather-forecast__title">
                Rio
            </h3>
            <ul className="weather-forecast__list">
                {/*todo: create 3 components for forecast list*/}
                
                <li className="weather-forecast__list-item">
                    <div className="weather-forecast__top">
                        <p className="weather-forecast__text">12 Mar</p>
                        <p className="weather-forecast__text">20:00</p>
                    </div>
                    <div className="weather-forecast__bottom">
                        <div className="weather-forecast__parameters">
                            <p className="weather-forecast__text"> Temperature: 7°</p>
                            <p className="weather-forecast__text"> Feels like: 3°</p>
                        </div>
                        <div className="weather-forecast__precipitation">
                            <p className="weather-forecast__text"> Clouds</p>
                            <img src="https://openweathermap.org/img/wn/02n.png"
                                alt="weather icon"
                                className="weather-forecast__img"/>
                        </div>
                    </div>
                </li>
                <li className="weather-forecast__list-item">
                    <div className="weather-forecast__top">
                        <p className="weather-forecast__text">12 Mar</p>
                        <p className="weather-forecast__text">23:00</p>
                    </div>
                    <div className="weather-forecast__bottom">
                        <div className="weather-forecast__parameters">
                            <p className="weather-forecast__text"> Temperature: 7°</p>
                            <p className="weather-forecast__text"> Feels like: 3°</p>
                        </div>
                        <div className="weather-forecast__precipitation">
                            <p className="weather-forecast__text"> Clouds</p>
                            <img src="https://openweathermap.org/img/wn/02n.png"
                                alt="weather icon"
                                className="weather-forecast__img"/>
                        </div>
                    </div>
                </li>
                <li className="weather-forecast__list-item">
                    <div className="weather-forecast__top">
                        <p className="weather-forecast__text">13 Mar</p>
                        <p className="weather-forecast__text">03:00</p>
                    </div>
                    <div className="weather-forecast__bottom">
                        <div className="weather-forecast__parameters">
                            <p className="weather-forecast__text"> Temperature: 7°</p>
                            <p className="weather-forecast__text"> Feels like: 3°</p>
                        </div>
                        <div className="weather-forecast__precipitation">
                            <p className="weather-forecast__text"> Clouds</p>
                            <img src="https://openweathermap.org/img/wn/02n.png"
                                alt="weather icon"
                                className="weather-forecast__img"/>
                        </div>
                    </div>
                </li>
        
            </ul>
        </div>
    );
}