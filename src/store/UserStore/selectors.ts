import { UserInfoReducerType } from './types';

export const GetUserName = (state: UserInfoReducerType) => state.name;
export const GetUserPassword = (state: UserInfoReducerType) => state.password;
