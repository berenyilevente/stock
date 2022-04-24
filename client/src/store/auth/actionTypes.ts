import { ILoginResponse } from "utils";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export interface loginRequest {
  type: typeof LOGIN_REQUEST;
}
export interface loginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: ILoginResponse;
}
export interface loginFailure {
  type: typeof LOGIN_FAILURE;
  error: string;
}

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export interface registerRequest {
  type: typeof REGISTER_REQUEST;
}
export interface registerSuccess {
  type: typeof REGISTER_SUCCESS;
  payload: ILoginResponse;
}
export interface registerFailure {
  type: typeof REGISTER_FAILURE;
  error: string;
}

export const LOGOUT = 'LOGOUT';

export interface logout {
  type: typeof LOGOUT;
}

export type AuthActionTypes =
  | registerRequest
  | registerFailure
  | registerSuccess | loginRequest  |loginFailure  | loginSuccess | logout;
