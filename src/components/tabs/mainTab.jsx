export default function MainTab(props) {
    const isCitySaved = props.savedCities.has(props.cityName);
    const styleButton = isCitySaved ? "checked" : "noChecked";
    
    return (
        <div className="weather-now main-tabs__block">
            <p className="weather-now__temperature">
                {props.temp}
            </p>
            <img className="weather-now__img" src={props.icon}
                alt="cloud img"/>
            <div className="weather-now__like">
                <h3 className="title-city-now">{props.cityName}</h3>
                <button className="weather-now__btn" heart={styleButton} onClick={props.changeSaveCityList}/>
            </div>
        </div>
    );
}