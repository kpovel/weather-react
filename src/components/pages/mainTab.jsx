export default function MainTab() {
    return (
        <div className="weather-now main-tabs__block" id="tab_1">
            <p className="weather-now__temperature">
                14°
            </p>
            <img className="weather-now__img" src="https://openweathermap.org/img/wn/02d@4x.png"
                alt="cloud img"/>
            <div className="weather-now__like">
                <h3 className="title-city-now">Rio</h3>
                <button className="weather-now__btn" heart="noChecked"/>
            </div>
        </div>
    );
}