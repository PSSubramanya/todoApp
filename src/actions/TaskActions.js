import {ADDED_TASKS} from '../constants/types';

export const addTask = data => {
  console.log('ADDED TASKS', data);
  return {
    type: ADDED_TASKS,
    payload: data,
  };
};
