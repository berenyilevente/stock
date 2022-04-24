import {
  IStockHeadItemResponse,
  IStockHeadResponse,
  IStockResponse,
} from "utils/interfaces/stock";

export const GET_STOCK_REQUEST = "GET_STOCK_REQUEST";
export const GET_STOCK_SUCCESS = "GET_STOCK_SUCCESS";
export const GET_STOCK_FAILURE = "GET_STOCK_FAILURE";
export interface getStockRequest {
  type: typeof GET_STOCK_REQUEST;
}
export interface getStockSuccess {
  type: typeof GET_STOCK_SUCCESS;
  payload: IStockResponse[];
}
export interface getStockFailure {
  type: typeof GET_STOCK_FAILURE;
  error: string;
}

export const GET_STOCK_BY_ID_REQUEST = "GET_STOCK_BY_ID_REQUEST";
export const GET_STOCK_BY_ID_SUCCESS = "GET_STOCK_BY_ID_SUCCESS";
export const GET_STOCK_BY_ID_FAILURE = "GET_STOCK_BY_ID_FAILURE";
export interface getStockByIdRequest {
  type: typeof GET_STOCK_BY_ID_REQUEST;
}
export interface getStockByIdSuccess {
  type: typeof GET_STOCK_BY_ID_SUCCESS;
  payload: IStockResponse;
}
export interface getStockByIdFailure {
  type: typeof GET_STOCK_BY_ID_FAILURE;
  error: string;
}

export const POST_STOCK_ITEM_REQUEST = "POST_STOCK_ITEM_REQUEST";
export const POST_STOCK_ITEM_SUCCESS = "POST_STOCK_ITEM_SUCCESS";
export const POST_STOCK_ITEM_FAILURE = "POST_STOCK_ITEM_FAILURE";
export interface postStockItemRequest {
  type: typeof POST_STOCK_ITEM_REQUEST;
}
export interface postStockItemSuccess {
  type: typeof POST_STOCK_ITEM_SUCCESS;
  payload: IStockResponse;
}
export interface postStockItemFailure {
  type: typeof POST_STOCK_ITEM_FAILURE;
  error: string;
}

export const PATCH_STOCK_REQUEST = "PATCH_STOCK_REQUEST";
export const PATCH_STOCK_SUCCESS = "PATCH_STOCK_SUCCESS";
export const PATCH_STOCK_FAILURE = "PATCH_STOCK_FAILURE";
export interface patchStockRequest {
  type: typeof PATCH_STOCK_REQUEST;
}
export interface patchStockSuccess {
  type: typeof PATCH_STOCK_SUCCESS;
  payload: IStockResponse;
}
export interface patchStockFailure {
  type: typeof PATCH_STOCK_FAILURE;
  error: string;
}

export const DELETE_STOCK_ITEM_REQUEST = "DELETE_STOCK_ITEM_REQUEST";
export const DELETE_STOCK_ITEM_SUCCESS = "DELETE_STOCK_ITEM_SUCCESS";
export const DELETE_STOCK_ITEM_FAILURE = "DELETE_STOCK_ITEM_FAILURE";
export interface deleteStockItemRequest {
  type: typeof DELETE_STOCK_ITEM_REQUEST;
}
export interface deleteStockItemSuccess {
  type: typeof DELETE_STOCK_ITEM_SUCCESS;
}
export interface deleteStockItemFailure {
  type: typeof DELETE_STOCK_ITEM_FAILURE;
  error: string;
}

export const RECALCULATE_STOCK_REQUEST = "RECALCULATE_STOCK_REQUEST";
export const RECALCULATE_STOCK_SUCCESS = "RECALCULATE_STOCK_SUCCESS";
export const RECALCULATE_STOCK_FAILURE = "RECALCULATE_STOCK_FAILURE";
export interface recalculateStockRequest {
  type: typeof RECALCULATE_STOCK_REQUEST;
}
export interface recalculateStockSuccess {
  type: typeof RECALCULATE_STOCK_SUCCESS;
  //payload: IRecallResponse;
}
export interface recalculateStockFailure {
  type: typeof RECALCULATE_STOCK_FAILURE;
  error: string;
}

export const GET_STOCK_HEAD_REQUEST = "GET_STOCK_HEAD_REQUEST";
export const GET_STOCK_HEAD_SUCCESS = "GET_STOCK_HEAD_SUCCESS";
export const GET_STOCK_HEAD_FAILURE = "GET_STOCK_HEAD_FAILURE";
export interface getStockHeadRequest {
  type: typeof GET_STOCK_HEAD_REQUEST;
}
export interface getStockHeadSuccess {
  type: typeof GET_STOCK_HEAD_SUCCESS;
  payload: IStockHeadResponse[];
}
export interface getStockHeadFailure {
  type: typeof GET_STOCK_HEAD_FAILURE;
  error: string;
}

export const GET_STOCK_HEAD_BY_ID_REQUEST = "GET_STOCK_HEAD_BY_ID_REQUEST";
export const GET_STOCK_HEAD_BY_ID_SUCCESS = "GET_STOCK_HEAD_BY_ID_SUCCESS";
export const GET_STOCK_HEAD_BY_ID_FAILURE = "GET_STOCK_HEAD_BY_ID_FAILURE";
export interface getStockHeadByIdRequest {
  type: typeof GET_STOCK_HEAD_BY_ID_REQUEST;
}
export interface getStockHeadByIdSuccess {
  type: typeof GET_STOCK_HEAD_BY_ID_SUCCESS;
  payload: IStockHeadResponse;
}
export interface getStockHeadByIdFailure {
  type: typeof GET_STOCK_HEAD_BY_ID_FAILURE;
  error: string;
}

export const POST_STOCK_HEAD_REQUEST = "POST_STOCK_HEAD_REQUEST";
export const POST_STOCK_HEAD_SUCCESS = "POST_STOCK_HEAD_SUCCESS";
export const POST_STOCK_HEAD_FAILURE = "POST_STOCK_HEAD_FAILURE";
export interface postStockHeadRequest {
  type: typeof POST_STOCK_HEAD_REQUEST;
}
export interface postStockHeadSuccess {
  type: typeof POST_STOCK_HEAD_SUCCESS;
  payload: IStockHeadResponse;
}
export interface postStockHeadFailure {
  type: typeof POST_STOCK_HEAD_FAILURE;
  error: string;
}

export const PATCH_STOCK_HEAD_REQUEST = "PATCH_STOCK_HEAD_REQUEST";
export const PATCH_STOCK_HEAD_SUCCESS = "PATCH_STOCK_HEAD_SUCCESS";
export const PATCH_STOCK_HEAD_FAILURE = "PATCH_STOCK_HEAD_FAILURE";
export interface patchStockHeadRequest {
  type: typeof PATCH_STOCK_HEAD_REQUEST;
}
export interface patchStockHeadSuccess {
  type: typeof PATCH_STOCK_HEAD_SUCCESS;
  payload: IStockHeadResponse;
}
export interface patchStockHeadFailure {
  type: typeof PATCH_STOCK_HEAD_FAILURE;
  error: string;
}

export const DELETE_STOCK_HEAD_REQUEST = "DELETE_STOCK_HEAD_REQUEST";
export const DELETE_STOCK_HEAD_SUCCESS = "DELETE_STOCK_HEAD_SUCCESS";
export const DELETE_STOCK_HEAD_FAILURE = "DELETE_STOCK_HEAD_FAILURE";
export interface deleteStockHeadRequest {
  type: typeof DELETE_STOCK_HEAD_REQUEST;
}
export interface deleteStockHeadSuccess {
  type: typeof DELETE_STOCK_HEAD_SUCCESS;
}
export interface deleteStockHeadFailure {
  type: typeof DELETE_STOCK_HEAD_FAILURE;
  error: string;
}

export const GET_STOCK_HEAD_ITEM_REQUEST = "GET_STOCK_HEAD_ITEM_REQUEST";
export const GET_STOCK_HEAD_ITEM_SUCCESS = "GET_STOCK_HEAD_ITEM_SUCCESS";
export const GET_STOCK_HEAD_ITEM_FAILURE = "GET_STOCK_HEAD_ITEM_FAILURE";
export interface getStockHeadItemRequest {
  type: typeof GET_STOCK_HEAD_ITEM_REQUEST;
}
export interface getStockHeadItemSuccess {
  type: typeof GET_STOCK_HEAD_ITEM_SUCCESS;
  payload: IStockHeadItemResponse[];
}
export interface getStockHeadItemFailure {
  type: typeof GET_STOCK_HEAD_ITEM_FAILURE;
  error: string;
}

export const GET_STOCK_HEAD_ITEM_BY_ID_REQUEST =
  "GET_STOCK_HEAD_ITEM_BY_ID_REQUEST";
export const GET_STOCK_HEAD_ITEM_BY_ID_SUCCESS =
  "GET_STOCK_HEAD_ITEM_BY_ID_SUCCESS";
export const GET_STOCK_HEAD_ITEM_BY_ID_FAILURE =
  "GET_STOCK_HEAD_ITEM_BY_ID_FAILURE";
export interface getStockHeadItemByIdRequest {
  type: typeof GET_STOCK_HEAD_ITEM_BY_ID_REQUEST;
}
export interface getStockHeadItemByIdSuccess {
  type: typeof GET_STOCK_HEAD_ITEM_BY_ID_SUCCESS;
  payload: IStockHeadItemResponse;
}
export interface getStockHeadItemByIdFailure {
  type: typeof GET_STOCK_HEAD_ITEM_BY_ID_FAILURE;
  error: string;
}

export const PATCH_STOCK_HEAD_ITEM_REQUEST = "PATCH_STOCK_HEAD_ITEM_REQUEST";
export const PATCH_STOCK_HEAD_ITEM_SUCCESS = "PATCH_STOCK_HEAD_ITEM_SUCCESS";
export const PATCH_STOCK_HEAD_ITEM_FAILURE = "PATCH_STOCK_HEAD_ITEM_FAILURE";
export interface patchStockHeadItemRequest {
  type: typeof PATCH_STOCK_HEAD_ITEM_REQUEST;
}
export interface patchStockHeadItemSuccess {
  type: typeof PATCH_STOCK_HEAD_ITEM_SUCCESS;
}
export interface patchStockHeadItemFailure {
  type: typeof PATCH_STOCK_HEAD_ITEM_FAILURE;
  error: string;
}

export const POST_STOCK_HEAD_ITEM_REQUEST = "POST_STOCK_HEAD_ITEM_REQUEST";
export const POST_STOCK_HEAD_ITEM_SUCCESS = "POST_STOCK_HEAD_ITEM_SUCCESS";
export const POST_STOCK_HEAD_ITEM_FAILURE = "POST_STOCK_HEAD_ITEM_FAILURE";
export interface postStockHeadItemRequest {
  type: typeof POST_STOCK_HEAD_ITEM_REQUEST;
}
export interface postStockHeadItemSuccess {
  type: typeof POST_STOCK_HEAD_ITEM_SUCCESS;
}
export interface postStockHeadItemFailure {
  type: typeof POST_STOCK_HEAD_ITEM_FAILURE;
  error: string;
}

export const DELETE_STOCK_HEAD_ITEM_REQUEST = "DELETE_STOCK_HEAD_ITEM_REQUEST";
export const DELETE_STOCK_HEAD_ITEM_SUCCESS = "DELETE_STOCK_HEAD_ITEM_SUCCESS";
export const DELETE_STOCK_HEAD_ITEM_FAILURE = "DELETE_STOCK_HEAD_ITEM_FAILURE";
export interface deleteStockHeadItemRequest {
  type: typeof DELETE_STOCK_HEAD_ITEM_REQUEST;
}
export interface deleteStockHeadItemSuccess {
  type: typeof DELETE_STOCK_HEAD_ITEM_SUCCESS;
}
export interface deleteStockHeadItemFailure {
  type: typeof DELETE_STOCK_HEAD_ITEM_FAILURE;
  error: string;
}

export type StockActionTypes =
  | getStockRequest
  | getStockFailure
  | getStockSuccess
  | postStockItemRequest
  | postStockItemFailure
  | postStockItemSuccess
  | deleteStockItemRequest
  | deleteStockItemFailure
  | deleteStockItemSuccess
  | getStockByIdRequest
  | getStockByIdFailure
  | getStockByIdSuccess
  | patchStockRequest
  | patchStockFailure
  | patchStockSuccess
  | recalculateStockRequest
  | recalculateStockFailure
  | recalculateStockSuccess
  | getStockHeadRequest
  | getStockHeadFailure
  | getStockHeadSuccess
  | getStockHeadByIdRequest
  | getStockHeadByIdFailure
  | getStockHeadByIdSuccess
  | postStockHeadRequest
  | postStockHeadFailure
  | postStockHeadSuccess
  | patchStockHeadRequest
  | patchStockHeadFailure
  | patchStockHeadSuccess
  | deleteStockHeadRequest
  | deleteStockHeadFailure
  | deleteStockHeadSuccess
  | getStockHeadItemRequest
  | getStockHeadItemFailure
  | getStockHeadItemSuccess
  | getStockHeadItemByIdRequest
  | getStockHeadItemByIdFailure
  | getStockHeadItemByIdSuccess
  | patchStockHeadItemRequest
  | patchStockHeadItemFailure
  | patchStockHeadItemSuccess
  | postStockHeadItemRequest
  | postStockHeadItemFailure
  | postStockHeadItemSuccess
  | deleteStockHeadItemRequest
  | deleteStockHeadItemFailure
  | deleteStockHeadItemSuccess;
