import { IArticlesResponse } from "utils";

export const GET_ARTICLES_REQUEST = "GET_ARTICLES_REQUEST";
export const GET_ARTICLES_SUCCESS = "GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAILURE = "GET_ARTICLES_FAILURE";
export interface getArticlesRequest {
  type: typeof GET_ARTICLES_REQUEST;
}
export interface getArticlesSuccess {
  type: typeof GET_ARTICLES_SUCCESS;
  payload: IArticlesResponse[];
}
export interface getArticlesFailure {
  type: typeof GET_ARTICLES_FAILURE;
  errorMessage: string;
}

export const GET_ARTICLE_BY_ID_REQUEST = "GET_ARTICLE_BY_ID_REQUEST";
export const GET_ARTICLE_BY_ID_SUCCESS = "GET_ARTICLE_BY_ID_SUCCESS";
export const GET_ARTICLE_BY_ID_FAILURE = "GET_ARTICLE_BY_ID_FAILURE";
export interface getArticleByIdRequest {
  type: typeof GET_ARTICLE_BY_ID_REQUEST;
}
export interface getArticleByIdSuccess {
  type: typeof GET_ARTICLE_BY_ID_SUCCESS;
  payload: IArticlesResponse;
}
export interface getArticleByIdFailure {
  type: typeof GET_ARTICLE_BY_ID_FAILURE;
  error: string;
}

export const POST_ARTICLES_REQUEST = "POST_ARTICLES_REQUEST";
export const POST_ARTICLES_SUCCESS = "POST_ARTICLES_SUCCESS";
export const POST_ARTICLES_FAILURE = "POST_ARTICLES_FAILURE";
export interface postArticlesRequest {
  type: typeof POST_ARTICLES_REQUEST;
}
export interface postArticlesSuccess {
  type: typeof POST_ARTICLES_SUCCESS;
  payload: IArticlesResponse;
}
export interface postArticlesFailure {
  type: typeof POST_ARTICLES_FAILURE;
  errorMessage: string;
}

export const PATCH_ARTICLE_REQUEST = "PATCH_ARTICLE_REQUEST";
export const PATCH_ARTICLE_SUCCESS = "PATCH_ARTICLE_SUCCESS";
export const PATCH_ARTICLE_FAILURE = "PATCH_ARTICLE_FAILURE";
export interface patchArticleRequest {
  type: typeof PATCH_ARTICLE_REQUEST;
}
export interface patchArticleSuccess {
  type: typeof PATCH_ARTICLE_SUCCESS;
  payload: IArticlesResponse;
}
export interface patchArticleFailure {
  type: typeof PATCH_ARTICLE_FAILURE;
  error: string;
}

export const DELETE_ARTICLES_REQUEST = "DELETE_ARTICLES_REQUEST";
export const DELETE_ARTICLES_SUCCESS = "DELETE_ARTICLES_SUCCESS";
export const DELETE_ARTICLES_FAILURE = "DELETE_ARTICLES_FAILURE";
export interface deleteArticlesRequest {
  type: typeof DELETE_ARTICLES_REQUEST;
}
export interface deleteArticlesSuccess {
  type: typeof DELETE_ARTICLES_SUCCESS;
}
export interface deleteArticlesFailure {
  type: typeof DELETE_ARTICLES_FAILURE;
  errorMessage: string;
}

export type AdminActionTypes =
  | getArticlesRequest
  | getArticlesSuccess
  | getArticlesFailure
  | postArticlesRequest
  | postArticlesSuccess
  | postArticlesFailure
  | deleteArticlesRequest
  | deleteArticlesSuccess
  | deleteArticlesFailure
  | getArticleByIdRequest
  | getArticleByIdFailure
  | getArticleByIdSuccess
  | patchArticleRequest
  | patchArticleFailure
  | patchArticleSuccess;
