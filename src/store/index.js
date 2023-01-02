import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import weather from "./reducers";
import {applyMiddleware, compose, createStore} from "redux";

const loggerMiddleware = createLogger();

const middlewareEnhancer = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
);

const composedEnhancers = compose(
    middlewareEnhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(
    weather,
    composedEnhancers
);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

unsubscribe();