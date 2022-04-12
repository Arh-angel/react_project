import { combineReducers } from 'redux';
import userInfoReducer from './users/reducer';

const rootReducer = combineReducers({
  users: userInfoReducer,
});

export default rootReducer;
