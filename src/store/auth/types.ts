/* eslint-disable max-len */
export type AuthReducerType = {
  email: string,
  password: string,
  userLogin: boolean,
  authError: boolean
};

export type AuthActionsTypeType = {
  setAuthEmail: 'SET_AUTH_EMAIL',
  setAuthPassword: 'SET_AUTH_PASSWORD',
  userLogin: 'USER_LOGIN',
  userLogout: 'USER_LOGOUT',
  authError: 'AUTH_ERROR'
};

export type SetAuthEmailActionsType = {
  type: AuthActionsTypeType['setAuthEmail'],
  payload: string
};

export type SetAuthPasswordActionsType = {
  type: AuthActionsTypeType['setAuthPassword'],
  payload: string
};

export type UserLoginActionType = {
  type: AuthActionsTypeType['userLogin'],
  payload: boolean
};

export type UserLogoutActionType = {
  type: AuthActionsTypeType['userLogout'],
  payload: boolean
};

export type AuthErrorActionType = {
  type: AuthActionsTypeType['authError'],
  payload: boolean
};

export type ActionType = SetAuthEmailActionsType | SetAuthPasswordActionsType | UserLoginActionType | UserLogoutActionType | AuthErrorActionType;
