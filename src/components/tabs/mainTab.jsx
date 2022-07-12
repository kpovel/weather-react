export default function MainTab(props) {
    return (
        <div className="weather-now main-tabs__block">
            <p className="weather-now__temperature">
                {props.temp}
            </p>
            <img className="weather-now__img" src={props.icon}
                alt="cloud img"/>
            <div className="weather-now__like">
                <h3 className="title-city-now">{props.cityName}</h3>
                <button className="weather-now__btn" heart="noChecked" onClick={props.changeSaveCityList}/>
            </div>
        </div>
    );
}