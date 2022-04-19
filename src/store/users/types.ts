/* eslint-disable max-len */
export type UserInfoReducerType = {
  name: string,
  lastName: string,
  age: string,
  email: string,
  password: string,
  userRegistered: boolean,
  regAuthError: boolean,
  data: {info: any, results: any},
  oneUser: {}
  currentPage: string
};

export type UserInfoActionsTypeType = {
  setUserName: 'SET_USER_NAME',
  setUserLastName: 'SET_USER_LAST_NAME',
  setUserAge: 'SET_USER_AGE',
  setUserEmail: 'SET_USER_EMAIL',
  setUserPassword: 'SET_USER_PASSWORD',
  setUserRegistered: 'SET_USER_REGISTERED',
  setRegAuthError: 'SET_REG_AUTH_ERROR',
  getUsers: 'GET_USERS',
  getOneUser: 'GET_ONE_USER',
  clearOneUser: 'CLEAR_ONE_USER',
  currentPage: 'CURRENT_PAGE'
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

export type getOneUsersActionType = {
  type: UserInfoActionsTypeType['getOneUser'],
  payload: {}
};

export type ClearOneUsersActionType = {
  type: UserInfoActionsTypeType['clearOneUser'],
};

export type CurrentPageActionType = {
  type: UserInfoActionsTypeType['currentPage'],
  payload: string
};

export type ActionType = SetUserNameActionsType | SetUserLastNameActionsType | SetUserAgeActionsType | SetUserEmailActionsType | SetUserPasswordActionsType | SetUserRegisteredActionsType | SetRegAuthErrorActionsType | getUsersActionType | getOneUsersActionType | ClearOneUsersActionType | CurrentPageActionType;
