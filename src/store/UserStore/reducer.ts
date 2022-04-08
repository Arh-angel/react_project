import { UserInfoActionsType } from './actions';
import { UserInfoReducerType, ActionType } from './types';

const initialState: UserInfoReducerType = {
  name: '',
  lastName: '',
  age: '',
  email: '',
  password: '',
  userRegistered: false,
  userAuth: false,
  regAuthError: true
};

const userInfoReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UserInfoActionsType.setUserName:
      return {
        ...state,
        name: action.payload
      };
    case UserInfoActionsType.setUserLastName:
      return {
        ...state,
        lastName: action.payload
      };
    case UserInfoActionsType.setUserAge:
      return {
        ...state,
        age: action.payload
      };
    case UserInfoActionsType.setUserEmail:
      return {
        ...state,
        email: action.payload
      };
    case UserInfoActionsType.setUserPassword:
      return {
        ...state,
        password: action.payload
      };
    case UserInfoActionsType.setUserRegistered:
      return {
        ...state,
        userRegistered: action.payload
      };
    case UserInfoActionsType.setUserAuth:
      return {
        ...state,
        userAuth: action.payload
      };
    case UserInfoActionsType.setRegAuthError:
      return {
        ...state,
        regAuthError: action.payload
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
