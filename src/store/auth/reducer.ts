import { AuthActionsType } from './actions';
import { ActionType, AuthReducerType } from './types';

const initialState: AuthReducerType = {
  email: '',
  password: '',
  userLogin: false,
  authError: false
};

const authReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case AuthActionsType.setAuthEmail:
      return {
        ...state,
        email: action.payload
      };
    case AuthActionsType.setAuthPassword:
      return {
        ...state,
        password: action.payload
      };
    case AuthActionsType.userLogin:
      return {
        ...state,
        userLogin: action.payload
      };
    case AuthActionsType.userLogout:
      return {
        ...state,
        userLogin: action.payload
      };
    case AuthActionsType.authError:
      return {
        ...state,
        authError: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
