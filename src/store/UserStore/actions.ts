import { UserInfoActionsTypeType } from './types';

export const UserInfoActionsType: UserInfoActionsTypeType = {
  setUserName: 'SET_USER_NAME',
  setUserLastName: 'SET_USER_LAST_NAME',
  setUserAge: 'SET_USER_AGE',
  setUserEmail: 'SET_USER_EMAIL',
  setUserPassword: 'SET_USER_PASSWORD',
  setUserRegistered: 'SET_USER_REGISTERED',
  setUserAuth: 'SET_USER_AUTH',
  setRegAuthError: 'SET_REG_AUTH_ERROR',
  outPutUser: 'OUT_PUT_USER'
};

export const SetUserNameAction = (name: string) => ({
  type: UserInfoActionsType.setUserName,
  payload: name,
});

export const SetUserLastNameAction = (lastName: string) => ({
  type: UserInfoActionsType.setUserLastName,
  payload: lastName,
});

export const SetUserEmailAction = (email: string) => ({
  type: UserInfoActionsType.setUserEmail,
  payload: email,
});

export const SetUserAgeAction = (age: string) => ({
  type: UserInfoActionsType.setUserAge,
  payload: age,
});

export const SetUserPasswordAction = (password: string) => ({
  type: UserInfoActionsType.setUserPassword,
  payload: password,
});

export const SetUserRegisteredAction = (userRegistered: boolean) => ({
  type: UserInfoActionsType.setUserRegistered,
  payload: userRegistered,
});

export const SetUserAuthAction = (userAuth: boolean) => ({
  type: UserInfoActionsType.setUserAuth,
  payload: userAuth,
});

export const SetRegAuthErrorAction = (regAuthError: boolean) => ({
  type: UserInfoActionsType.setRegAuthError,
  payload: regAuthError,
});

export const OutPutUserAction = () => ({
  type: UserInfoActionsType.outPutUser,
});
