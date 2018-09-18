import { combineReducers } from 'redux';
import { actName } from './actions';

let reducers = {};

reducers.data = (state = null, action) => {
  switch (action.type) {
    case actName.FETCH_DATA_SUCCESS:        
      return action.data;
    default:
      return state;
  }
};


const reducersCombined = combineReducers(reducers);

export default reducersCombined;