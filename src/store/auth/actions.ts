import { AuthActionsTypeType } from './types';

export const AuthActionsType: AuthActionsTypeType = {
  setAuthEmail: 'SET_AUTH_EMAIL',
  setAuthPassword: 'SET_AUTH_PASSWORD',
  userLogin: 'USER_LOGIN',
  userLogout: 'USER_LOGOUT',
  authError: 'AUTH_ERROR'
};

export const SetAuthEmailAction = (email: string) => ({
  type: AuthActionsType.setAuthEmail,
  payload: email,
});

export const SetAuthPasswordAction = (password: string) => ({
  type: AuthActionsType.setAuthPassword,
  payload: password,
});

export const UserLoginAction = () => ({
  type: AuthActionsType.userLogin,
  payload: true,
});

export const UserLogoutAction = () => ({
  type: AuthActionsType.userLogout,
  payload: false,
});

export const AuthErrorAction = (value: boolean) => ({
  type: AuthActionsType.userLogout,
  payload: value,
});
