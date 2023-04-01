import { User } from "../domain/entities/User";


export interface CommonUsersState {
  searchTerm: string;
}

export interface LoadingUsersState {
  kind: "LoadingUsersState";
}

export interface LoadedUsersState {
  kind: "LoadedUsersState";
  users: Array<User>;
}

export interface ErrorUsersState {
  kind: "ErrorUsersState"
  error: string;
}

export type UsersState = (
  | LoadingUsersState
  | LoadedUsersState
  | ErrorUsersState
) &
  CommonUsersState;

export const UsersInitialState: UsersState = {
  kind: "LoadingUsersState",
  searchTerm: "",
};
