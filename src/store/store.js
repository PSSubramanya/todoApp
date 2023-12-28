import {legacy_createStore as createStore, applyMiddleware} from 'redux';
// import AppReducer from '../reducers/AppReducer';
import AppReducer from '../reducers/AppReducer';

const rootReducer = AppReducer;

const store = createStore(rootReducer);

export default store;
