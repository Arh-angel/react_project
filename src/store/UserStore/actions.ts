import { UserInfoActionsTypeType } from './types';

export const UserInfoActionsType: UserInfoActionsTypeType = {
  setUserName: 'SET_USER_NAME',
  outPutUser: 'OUT_PUT_USER'
};

export const SetUserNameAction = (name: string) => ({
  type: UserInfoActionsType.setUserName,
  payload: name,
});

export const OutPutUserAction = () => ({
  type: UserInfoActionsType.outPutUser,
});
