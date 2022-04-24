import client from "api/client";
import { Dispatch } from "redux";
import { IClientForm } from "screens/ClientScreen";
import {
  GET_CLIENTS_REQUEST,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAILURE,
  GET_CLIENT_BY_ID_FAILURE,
  GET_CLIENT_BY_ID_REQUEST,
  GET_CLIENT_BY_ID_SUCCESS,
  POST_CLIENT_FAILURE,
  POST_CLIENT_REQUEST,
  POST_CLIENT_SUCCESS,
  PATCH_CLIENT_FAILURE,
  PATCH_CLIENT_REQUEST,
  PATCH_CLIENT_SUCCESS,
  DELETE_CLIENT_FAILURE,
  DELETE_CLIENT_REQUEST,
  DELETE_CLIENT_SUCCESS,
} from "./actionTypes";

export const getClientsAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_CLIENTS_REQUEST,
  });
  try {
    const res = await client.getClients();
    dispatch({
      type: GET_CLIENTS_SUCCESS,
      payload: res,
    });
  } catch (error: any) {
    dispatch({
      type: GET_CLIENTS_FAILURE,
      error: error.message,
    });
  }
};

export const getClientByIdAction =
  (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: GET_CLIENT_BY_ID_REQUEST,
    });
    try {
      const res = await client.getClientById(id);
      dispatch({
        type: GET_CLIENT_BY_ID_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: GET_CLIENT_BY_ID_FAILURE,
        error: error.message,
      });
    }
  };

export const postClientAction =
  (clientData: IClientForm) => async (dispatch: Dispatch) => {
    dispatch({
      type: POST_CLIENT_REQUEST,
    });
    try {
      const res = await client.postClient(clientData);
      dispatch({
        type: POST_CLIENT_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: POST_CLIENT_FAILURE,
        error: error.message,
      });
    }
  };

export const patchClientAction =
  (id: string, clientData: IClientForm) => async (dispatch: Dispatch) => {
    dispatch({
      type: PATCH_CLIENT_REQUEST,
    });
    try {
      const res = await client.patchClient(id, clientData);
      dispatch({
        type: PATCH_CLIENT_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: PATCH_CLIENT_FAILURE,
        error: error.message,
      });
    }
  };

export const deleteClientAction =
  (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: DELETE_CLIENT_REQUEST,
    });
    try {
      const res = await client.deleteClient(id);
      dispatch({
        type: DELETE_CLIENT_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: DELETE_CLIENT_FAILURE,
        error: error.message,
      });
    }
  };
