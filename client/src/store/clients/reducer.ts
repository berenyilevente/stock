import { IClientResponse } from "utils";
import {
  ClientActionTypes,
  DELETE_CLIENT_FAILURE,
  DELETE_CLIENT_REQUEST,
  DELETE_CLIENT_SUCCESS,
  GET_CLIENTS_FAILURE,
  GET_CLIENTS_REQUEST,
  GET_CLIENTS_SUCCESS,
  GET_CLIENT_BY_ID_FAILURE,
  GET_CLIENT_BY_ID_REQUEST,
  GET_CLIENT_BY_ID_SUCCESS,
  PATCH_CLIENT_FAILURE,
  PATCH_CLIENT_REQUEST,
  PATCH_CLIENT_SUCCESS,
  POST_CLIENT_FAILURE,
  POST_CLIENT_REQUEST,
  POST_CLIENT_SUCCESS,
} from "./actionTypes";

export interface IDefaultClientState {
  isLoading: boolean;
  error: string | null;
  client?: IClientResponse;
  clients: IClientResponse[];
  addClientSuccess?: boolean;
  updateClientSuccess?: boolean;
  deleteClientSuccess?: boolean;
}

const defaultClientState: IDefaultClientState = {
  isLoading: false,
  error: null,
  client: undefined,
  clients: [],
  addClientSuccess: false,
  updateClientSuccess: false,
  deleteClientSuccess: false,
};

const clientReducer = (
  state = defaultClientState,
  action: ClientActionTypes
): IDefaultClientState => {
  switch (action.type) {
    case GET_CLIENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_CLIENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        clients: action.payload,
        error: null,
      };
    case GET_CLIENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case GET_CLIENT_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_CLIENT_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        client: action.payload,
        error: null,
      };
    case GET_CLIENT_BY_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case POST_CLIENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        addClientSuccess: false,
        error: null,
      };
    case POST_CLIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        client: action.payload,
        addClientSuccess: true,
        error: null,
      };
    case POST_CLIENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        addClientSuccess: false,
      };
    case PATCH_CLIENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        updateClientSuccess: false,
        error: null,
      };
    case PATCH_CLIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        client: action.payload,
        updateClientSuccess: true,
        error: null,
      };
    case PATCH_CLIENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        updateClientSuccess: false,
        error: action.error,
      };
    case DELETE_CLIENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        deleteClientSuccess: false,
        error: null,
      };
    case DELETE_CLIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        deleteClientSuccess: true,
        error: null,
      };
    case DELETE_CLIENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        deleteClientSuccess: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default clientReducer;
