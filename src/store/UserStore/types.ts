export type UserInfoReducerType = {
  name: string,
  lastName: string,
  age: string,
  email: string,
  password: string
};

export type UserInfoActionsTypeType = {
  setUserName: 'SET_USER_NAME',
  setUserPassword: 'SET_USER_PASSWORD',
  outPutUser: 'OUT_PUT_USER'
};

export type SetUserInfoActionsType = {
  type: UserInfoActionsTypeType['setUserName'],
  payload: string
};

export type SetUserPasswordActionsType = {
  type: UserInfoActionsTypeType['setUserPassword'],
  payload: string
};

export type OutPutUserActionType = {
  type: UserInfoActionsTypeType['outPutUser'],
};

export type ActionType = SetUserInfoActionsType | OutPutUserActionType | SetUserPasswordActionsType;
