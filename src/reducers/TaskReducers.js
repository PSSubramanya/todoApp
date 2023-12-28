import {combineReducers} from 'redux';
import {ADDED_TASKS} from '../constants/types';

const initialState = {
  data: {},
};

const fetchTasks = (state = initialState, action) => {
  switch (action?.type) {
    case ADDED_TASKS:
      return {...state, data: action?.payload};
    default:
      return {...state};
  }
};

const taskReducer = combineReducers({
  fetchTasks,
});

export default taskReducer;
