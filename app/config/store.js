import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from 'redux-logger'

import reducer from "../reducers";
import rootSaga from "./sagas";


const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({});
const middleWare = [sagaMiddleware, logger];
const Store = createStore(reducer, applyMiddleware(...middleWare));

sagaMiddleware.run(rootSaga);

export default Store;