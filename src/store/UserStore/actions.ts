import { UserInfoActionsTypeType } from './types';

export const UserInfoActionsType: UserInfoActionsTypeType = {
  setUserName: 'SET_USER_NAME',
  setUserPassword: 'SET_USER_PASSWORD',
  outPutUser: 'OUT_PUT_USER'
};

export const SetUserNameAction = (name: string) => ({
  type: UserInfoActionsType.setUserName,
  payload: name,
});

export const SetUserPasswordAction = (password: string) => ({
  type: UserInfoActionsType.setUserName,
  payload: password,
});

export const OutPutUserAction = () => ({
  type: UserInfoActionsType.outPutUser,
});
