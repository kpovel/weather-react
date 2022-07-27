import {combineReducers} from "redux";
import {SAVE_CITY, REMOVE_CITY} from "./action/actionTypes.js";

const savedList = JSON.parse(localStorage.getItem("savedCities")) || [];

function cities(state = savedList, action) {
    const newSet = new Set(state);
    switch (action.type) {
        case SAVE_CITY:
            newSet.add(action.city);
            localStorage.setItem("savedCities", JSON.stringify([...newSet]));
            return newSet;
        case REMOVE_CITY:
            newSet.delete(action.city);
            localStorage.setItem("savedCities", JSON.stringify([...newSet]));
            return newSet;
        default:
            return state;
    }
}

const Cities = combineReducers({
    cities
});

export default Cities;