import Cities from "./reducers";
import {createStore} from "redux";

export const store = createStore(Cities,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

unsubscribe();