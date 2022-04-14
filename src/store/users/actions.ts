import makeRequest from '../../network';
import { UserInfoActionsTypeType } from './types';

export const UserInfoActionsType: UserInfoActionsTypeType = {
  setUserName: 'SET_USER_NAME',
  setUserLastName: 'SET_USER_LAST_NAME',
  setUserAge: 'SET_USER_AGE',
  setUserEmail: 'SET_USER_EMAIL',
  setUserPassword: 'SET_USER_PASSWORD',
  setUserRegistered: 'SET_USER_REGISTERED',
  setRegAuthError: 'SET_REG_AUTH_ERROR',
  getUsers: 'GET_USERS',
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

export const SetRegAuthErrorAction = (regAuthError: boolean) => ({
  type: UserInfoActionsType.setRegAuthError,
  payload: regAuthError,
});

export const GetUsersAction = () => async (dispatch: any) => {
  const data = await makeRequest({ url: '/character' });

  dispatch({
    type: UserInfoActionsType.getUsers,
    payload: data.results,
  });
};
