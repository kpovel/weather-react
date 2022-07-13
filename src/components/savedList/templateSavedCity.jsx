export function TemplateSavedCity(props) {
    return (
            <li className="city-list__item">
                <div className="city">{props.city}</div>
                <button className="city-list__close-btn" onClick={() => props.deleteCity(props.city)}/>
            </li>
    );
}