import { UserInfoActionsType } from './actions';
import { UserInfoReducerType, ActionType } from './types';

const initialState: UserInfoReducerType = {
  name: '',
  lastName: '',
  age: '',
  email: '',
  password: '',
  userRegistered: false,
  regAuthError: true,
  data: []
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
    case UserInfoActionsType.setRegAuthError:
      return {
        ...state,
        regAuthError: action.payload
      };
    case UserInfoActionsType.getUsers:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default userInfoReducer;
