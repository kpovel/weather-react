export function TemplateSavedCity({city, deleteCity, searchCity}) {
    return (
        <li className="city-list__item">
            <p className="city" onClick={() => searchCity(city)}>{city}</p>
            <button className="city-list__close-btn" onClick={() => deleteCity(city)}/>
        </li>
    );
}