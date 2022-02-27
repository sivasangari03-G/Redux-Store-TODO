import { applyMiddleware, compose, createStore } from "redux";
import combineReducers from "./reducer";

const combineCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = (state) => next => action => {
    // console.log("dispatch", action);
    // console.log("old state is", state.getState());
    let returnValue = next(action);
    // console.log("updated state is", state.getState());

    return returnValue
}

export const store = createStore(
	combineReducers,
	combineCompose(applyMiddleware(logger))
);
