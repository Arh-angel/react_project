import { RootReducerType } from '../rootType';

export const GetAuthEmail = (state: RootReducerType) => state.auth.email;
export const GetAuthPassword = (state: RootReducerType) => state.auth.password;
export const GetUserLogin = (state: RootReducerType) => state.auth.userLogin;
export const GetAuthError = (state: RootReducerType) => state.auth.authError;
