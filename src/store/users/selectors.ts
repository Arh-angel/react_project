import { RootReducerType } from '../rootType';

export const GetUserName = (state: RootReducerType) => state.users.name;
export const GetUserLastName = (state: RootReducerType) => state.users.lastName;
export const GetUserAge = (state: RootReducerType) => state.users.age;
export const GetUserEmail = (state: RootReducerType) => state.users.email;
export const GetUserPassword = (state: RootReducerType) => state.users.password;
export const GetUserRegistered = (state: RootReducerType) => state.users.userRegistered;
export const GetRegAuthError = (state: RootReducerType) => state.users.regAuthError;
export const GetUsers = (state: RootReducerType) => state.users.data;
export const GetOneUser = (state: RootReducerType) => state.users.oneUser;
export const GetCurrentPage = (state: RootReducerType) => state.users.currentPage;
