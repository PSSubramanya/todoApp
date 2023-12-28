import {combineReducers} from 'redux';
import TaskReducer from './TaskReducers';

const AppReducer = combineReducers({
  taskReducer: TaskReducer,
});

export default AppReducer;
