import client from "api/client";
import { Dispatch } from "redux";
import { IArticleForm } from "screens/ArticlesScreen";
import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  DELETE_ARTICLES_REQUEST,
  DELETE_ARTICLES_SUCCESS,
  DELETE_ARTICLES_FAILURE,
  POST_ARTICLES_FAILURE,
  POST_ARTICLES_REQUEST,
  POST_ARTICLES_SUCCESS,
  GET_ARTICLE_BY_ID_FAILURE,
  GET_ARTICLE_BY_ID_REQUEST,
  GET_ARTICLE_BY_ID_SUCCESS,
  PATCH_ARTICLE_FAILURE,
  PATCH_ARTICLE_REQUEST,
  PATCH_ARTICLE_SUCCESS,
} from "./actionTypes";

export const getArticlesAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_ARTICLES_REQUEST,
  });
  try {
    const res = await client.getArticles();
    dispatch({
      type: GET_ARTICLES_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_ARTICLES_FAILURE,
      error,
    });
  }
};

export const getArticleByIdAction =
  (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: GET_ARTICLE_BY_ID_REQUEST,
    });
    try {
      const res = await client.getArticleById(id);
      dispatch({
        type: GET_ARTICLE_BY_ID_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: GET_ARTICLE_BY_ID_FAILURE,
        error: error.message,
      });
    }
  };

export const postArticleAction =
  (articleData: IArticleForm) => async (dispatch: Dispatch) => {
    dispatch({
      type: POST_ARTICLES_REQUEST,
    });
    try {
      const res = await client.postArticles(articleData);
      dispatch({
        type: POST_ARTICLES_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: POST_ARTICLES_FAILURE,
        error,
      });
    }
  };

export const patchArticleAction =
  (id: string, articleData: IArticleForm) => async (dispatch: Dispatch) => {
    dispatch({
      type: PATCH_ARTICLE_REQUEST,
    });
    try {
      const res = await client.patchArticle(id, articleData);
      dispatch({
        type: PATCH_ARTICLE_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: PATCH_ARTICLE_FAILURE,
        error: error.message,
      });
    }
  };
export const deleteArticleAction =
  (id?: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: DELETE_ARTICLES_REQUEST,
    });
    try {
      await client.deleteArticle(id!);
      dispatch({
        type: DELETE_ARTICLES_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: DELETE_ARTICLES_FAILURE,
        error,
      });
    }
  };
