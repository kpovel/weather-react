import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import weather from "./reducers";

const loggerMiddleware = createLogger();

export const store = configureStore({
    reducer: weather,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunkMiddleware, loggerMiddleware)
});
