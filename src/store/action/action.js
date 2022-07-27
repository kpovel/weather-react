import {SAVE_CITY, REMOVE_CITY} from "./actionTypes.js";

export function addCity(city) {
    return {
        type: SAVE_CITY,
        city
    };
}

export function removeCity(city) {
    return {
        type: REMOVE_CITY,
        city
    };
}
