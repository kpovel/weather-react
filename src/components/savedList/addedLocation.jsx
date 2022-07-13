import {TemplateSavedCity} from "./templateSavedCity";

export {AddedLocation};

function AddedLocation(props) {
    if (!props.savedCities) return;
    
    return (
        <div>
            <h2 className="main-box__right-title" id="test">
                Added Locations:
            </h2>
            <ul className="city-list">
                {[...props.savedCities].map(city => {
                    return <TemplateSavedCity key={city}
                                              city={city}
                                              deleteCity={props.deleteCity}
                                              searchCity={props.searchCity}
                    />;
                })}
            </ul>
        </div>
    );
}