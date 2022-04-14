/* eslint-disable max-len */
export type UserInfoReducerType = {
  name: string,
  lastName: string,
  age: string,
  email: string,
  password: string,
  userRegistered: boolean,
  regAuthError: boolean,
  data: any[]
};

export type UserInfoActionsTypeType = {
  setUserName: 'SET_USER_NAME',
  setUserLastName: 'SET_USER_LAST_NAME',
  setUserAge: 'SET_USER_AGE',
  setUserEmail: 'SET_USER_EMAIL',
  setUserPassword: 'SET_USER_PASSWORD',
  setUserRegistered: 'SET_USER_REGISTERED',
  setRegAuthError: 'SET_REG_AUTH_ERROR',
  getUsers: 'GET_USERS'
};

export type SetUserNameActionsType = {
  type: UserInfoActionsTypeType['setUserName'],
  payload: string
};

export type SetUserLastNameActionsType = {
  type: UserInfoActionsTypeType['setUserLastName'],
  payload: string
};

export type SetUserAgeActionsType = {
  type: UserInfoActionsTypeType['setUserAge'],
  payload: string
};

export type SetUserEmailActionsType = {
  type: UserInfoActionsTypeType['setUserEmail'],
  payload: string
};

export type SetUserPasswordActionsType = {
  type: UserInfoActionsTypeType['setUserPassword'],
  payload: string
};

export type SetUserRegisteredActionsType = {
  type: UserInfoActionsTypeType['setUserRegistered'],
  payload: boolean
};

export type SetRegAuthErrorActionsType = {
  type: UserInfoActionsTypeType['setRegAuthError'],
  payload: boolean
};

export type getUsersActionType = {
  type: UserInfoActionsTypeType['getUsers'],
  payload: any[]
};

export type ActionType = SetUserNameActionsType | SetUserLastNameActionsType | SetUserAgeActionsType | SetUserEmailActionsType | SetUserPasswordActionsType | SetUserRegisteredActionsType | SetRegAuthErrorActionsType | getUsersActionType;
