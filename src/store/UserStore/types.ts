export type UserInfoReducerType = {
  name: string,
  lastName: string,
  age: string,
  email: string
};

export type UserInfoActionsTypeType = {
  setUserName: 'SET_USER_NAME',
  outPutUser: 'OUT_PUT_USER'
};

export type SetUserInfoActionsType = {
  type: UserInfoActionsTypeType['setUserName'],
  payload: string
};

export type OutPutUserActionType = {
  type: UserInfoActionsTypeType['outPutUser'],
};

export type ActionType = SetUserInfoActionsType | OutPutUserActionType;
