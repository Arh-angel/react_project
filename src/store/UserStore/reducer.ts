import { UserInfoActionsType } from './actions';
import { UserInfoReducerType, ActionType } from './types';

const initialState: UserInfoReducerType = {
  name: '',
  lastName: '',
  age: '',
  email: '',
  password: ''
};

const userInfoReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UserInfoActionsType.setUserName:
      return {
        ...state,
        name: action.payload
      };
    case UserInfoActionsType.setUserPassword:
      return {
        ...state,
        password: action.payload
      };
    case UserInfoActionsType.outPutUser:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default userInfoReducer;
