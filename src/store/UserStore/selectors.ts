import { UserInfoReducerType } from './types';

export const GetUserName = (state: UserInfoReducerType) => state.name;
export const GetUserLastName = (state: UserInfoReducerType) => state.lastName;
export const GetUserAge = (state: UserInfoReducerType) => state.age;
export const GetUserEmail = (state: UserInfoReducerType) => state.email;
export const GetUserPassword = (state: UserInfoReducerType) => state.password;
export const GetUserRegistered = (state: UserInfoReducerType) => state.userRegistered;
export const GetUserAuth = (state: UserInfoReducerType) => state.userAuth;
export const GetRegAuthError = (state: UserInfoReducerType) => state.regAuthError;
