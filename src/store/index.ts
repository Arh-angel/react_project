import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import userInfoReducer from './users/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  users: userInfoReducer,
});

export default rootReducer;
