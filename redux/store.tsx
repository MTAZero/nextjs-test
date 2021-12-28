import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { routerReducer } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../redux/reducers";
import rootSaga from "../redux/sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer,
    }),
    applyMiddleware(...middleware)
    // applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);
export { store };
