import { AuthReducerType } from './auth/types';
import { UserInfoReducerType } from './users/types';

export type RootReducerType = {
  auth: AuthReducerType;
  users: UserInfoReducerType
}
