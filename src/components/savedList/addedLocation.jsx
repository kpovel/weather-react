import {TemplateSavedCity} from "./templateSavedCity";

export {AddedLocation};

function AddedLocation({deleteCity, savedCities, searchCity}) {
    if (!savedCities) return;

    return (
        <div>
            <h2 className="main-box__right-title" id="test">
                Added Locations:
            </h2>
            <ul className="city-list">
                {[...(savedCities)].map(city => {
                    return <TemplateSavedCity key={city}
                                              city={city}
                                              deleteCity={deleteCity}
                                              searchCity={searchCity}
                    />;
                })}
            </ul>
        </div>
    );
}