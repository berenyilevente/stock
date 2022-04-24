import { IClientResponse } from "utils";

export const GET_CLIENTS_REQUEST = "GET_CLIENTS_REQUEST";
export const GET_CLIENTS_SUCCESS = "GET_CLIENTS_SUCCESS";
export const GET_CLIENTS_FAILURE = "GET_CLIENTS_FAILURE";
export interface getClientRequest {
  type: typeof GET_CLIENTS_REQUEST;
}
export interface getClientSuccess {
  type: typeof GET_CLIENTS_SUCCESS;
  payload: IClientResponse[];
}
export interface getClientFailure {
  type: typeof GET_CLIENTS_FAILURE;
  error: string;
}

export const POST_CLIENT_REQUEST = "POST_CLIENT_REQUEST";
export const POST_CLIENT_SUCCESS = "POST_CLIENT_SUCCESS";
export const POST_CLIENT_FAILURE = "POST_CLIENT_FAILURE";

export interface postClientRequest {
  type: typeof POST_CLIENT_REQUEST;
}
export interface postClientSuccess {
  type: typeof POST_CLIENT_SUCCESS;
  payload: IClientResponse;
}
export interface postClientFailure {
  type: typeof POST_CLIENT_FAILURE;
  error: string;
}

export const GET_CLIENT_BY_ID_REQUEST = "GET_CLIENT_BY_ID_REQUEST";
export const GET_CLIENT_BY_ID_SUCCESS = "GET_CLIENT_BY_ID_SUCCESS";
export const GET_CLIENT_BY_ID_FAILURE = "GET_CLIENT_BY_ID_FAILURE";

export interface getClientByIdRequest {
  type: typeof GET_CLIENT_BY_ID_REQUEST;
}
export interface getClientByIdSuccess {
  type: typeof GET_CLIENT_BY_ID_SUCCESS;
  payload: IClientResponse;
}
export interface getClientByIdFailure {
  type: typeof GET_CLIENT_BY_ID_FAILURE;
  error: string;
}

export const PATCH_CLIENT_REQUEST = "PATCH_CLIENT_REQUEST";
export const PATCH_CLIENT_SUCCESS = "PATCH_CLIENT_SUCCESS";
export const PATCH_CLIENT_FAILURE = "PATCH_CLIENT_FAILURE";

export interface patchClientRequest {
  type: typeof PATCH_CLIENT_REQUEST;
}
export interface patchClientSuccess {
  type: typeof PATCH_CLIENT_SUCCESS;
  payload: IClientResponse;
}
export interface patchClientFailure {
  type: typeof PATCH_CLIENT_FAILURE;
  error: string;
}

export const DELETE_CLIENT_REQUEST = "DELETE_CLIENT   _REQUEST";
export const DELETE_CLIENT_SUCCESS = "DELETE_CLIENT   _SUCCESS";
export const DELETE_CLIENT_FAILURE = "DELETE_CLIENT   _FAILURE";

export interface deleteClientRequest {
  type: typeof DELETE_CLIENT_REQUEST;
}
export interface deleteClientSuccess {
  type: typeof DELETE_CLIENT_SUCCESS;
}
export interface deleteClientFailure {
  type: typeof DELETE_CLIENT_FAILURE;
  error: string;
}
export type ClientActionTypes =
  | getClientRequest
  | getClientFailure
  | getClientSuccess
  | postClientRequest
  | postClientFailure
  | postClientSuccess
  | getClientByIdRequest
  | getClientByIdFailure
  | getClientByIdSuccess
  | patchClientRequest
  | patchClientFailure
  | patchClientSuccess
  | deleteClientRequest
  | deleteClientFailure
  | deleteClientSuccess;
