export default function MainTab({changeSaveCityList, cityName, icon, savedCities, temp}) {
    const isCitySaved = savedCities.has(cityName);
    const styleButton = isCitySaved ? "checked" : "noChecked";

    return (
        <div className="weather-now main-tabs__block">
            <p className="weather-now__temperature">
                {temp}
            </p>
            <img className="weather-now__img" src={icon}
                 alt="cloud img"/>
            <div className="weather-now__like">
                <h3 className="title-city-now">{cityName}</h3>
                <button className="weather-now__btn" heart={styleButton} onClick={changeSaveCityList}/>
            </div>
        </div>
    );
}