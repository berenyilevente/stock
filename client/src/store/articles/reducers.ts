import { IArticlesResponse } from 'utils';
import {
  AdminActionTypes,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  POST_ARTICLES_REQUEST,
  POST_ARTICLES_SUCCESS,
  POST_ARTICLES_FAILURE,
  DELETE_ARTICLES_REQUEST,
  DELETE_ARTICLES_SUCCESS,
  DELETE_ARTICLES_FAILURE,
  GET_ARTICLE_BY_ID_FAILURE,
  GET_ARTICLE_BY_ID_REQUEST,
  GET_ARTICLE_BY_ID_SUCCESS,
  PATCH_ARTICLE_FAILURE,
  PATCH_ARTICLE_REQUEST,
  PATCH_ARTICLE_SUCCESS,
} from './actionTypes';

export interface IArticleState {
  isLoading: boolean;
  errorMessage: string;
  articles: IArticlesResponse[];
  article?: IArticlesResponse
  addArticleSuccess: boolean;
  deleteArticleSuccess: boolean;
  updateArticleSuccess: boolean;
}

const articleDefaultState: IArticleState = {
  isLoading: false,
  errorMessage: '',
  articles: [],
  article: undefined,
  addArticleSuccess: false,
  deleteArticleSuccess: false,
  updateArticleSuccess: false,
};

const articleReducer = (state = articleDefaultState, action: AdminActionTypes): IArticleState => {
  switch (action.type) {
    case GET_ARTICLES_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: action.payload,
      };
    case GET_ARTICLES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: '',
      };
    case GET_ARTICLE_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case GET_ARTICLE_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        article: action.payload,
      };
    case GET_ARTICLE_BY_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: '',
      };
    case POST_ARTICLES_REQUEST:
      return {
        ...state,
        isLoading: true,
        addArticleSuccess: false,
        errorMessage: '',
      };
    case POST_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        addArticleSuccess: true,
        article: action.payload,
      };
    case POST_ARTICLES_FAILURE:
      return {
        ...state,
        isLoading: false,
        addArticleSuccess: false,
        errorMessage: '',
      };
    case PATCH_ARTICLE_REQUEST:
      return {
        ...state,
        isLoading: true,
        updateArticleSuccess: false,
        errorMessage: '',
      };
    case PATCH_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        updateArticleSuccess: true,
        article: action.payload,
      };
    case PATCH_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        updateArticleSuccess: false,
        errorMessage: '',
      };
    case DELETE_ARTICLES_REQUEST:
      return {
        ...state,
        isLoading: true,
        deleteArticleSuccess: false,
        errorMessage: '',
      };
    case DELETE_ARTICLES_SUCCESS:
      return {
        ...state,        
        deleteArticleSuccess: true,
        isLoading: false,
      };
    case DELETE_ARTICLES_FAILURE:
      return {
        ...state,
        isLoading: false,        
        deleteArticleSuccess: false,
        errorMessage: '',
      };

    default:
      return state;
  }
};

export default articleReducer;
