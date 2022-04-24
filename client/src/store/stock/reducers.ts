import {
  IStockHeadItemResponse,
  IStockHeadResponse,
  IStockResponse,
} from "utils/interfaces/stock";
import {
  StockActionTypes,
  GET_STOCK_FAILURE,
  GET_STOCK_REQUEST,
  GET_STOCK_SUCCESS,
  POST_STOCK_ITEM_REQUEST,
  POST_STOCK_ITEM_SUCCESS,
  POST_STOCK_ITEM_FAILURE,
  DELETE_STOCK_ITEM_REQUEST,
  DELETE_STOCK_ITEM_SUCCESS,
  DELETE_STOCK_ITEM_FAILURE,
  GET_STOCK_BY_ID_REQUEST,
  GET_STOCK_BY_ID_SUCCESS,
  GET_STOCK_BY_ID_FAILURE,
  PATCH_STOCK_FAILURE,
  PATCH_STOCK_REQUEST,
  PATCH_STOCK_SUCCESS,
  RECALCULATE_STOCK_REQUEST,
  RECALCULATE_STOCK_FAILURE,
  RECALCULATE_STOCK_SUCCESS,
  GET_STOCK_HEAD_FAILURE,
  GET_STOCK_HEAD_REQUEST,
  GET_STOCK_HEAD_SUCCESS,
  GET_STOCK_HEAD_BY_ID_FAILURE,
  GET_STOCK_HEAD_BY_ID_REQUEST,
  GET_STOCK_HEAD_BY_ID_SUCCESS,
  POST_STOCK_HEAD_FAILURE,
  POST_STOCK_HEAD_REQUEST,
  POST_STOCK_HEAD_SUCCESS,
  PATCH_STOCK_HEAD_FAILURE,
  PATCH_STOCK_HEAD_REQUEST,
  PATCH_STOCK_HEAD_SUCCESS,
  DELETE_STOCK_HEAD_FAILURE,
  DELETE_STOCK_HEAD_REQUEST,
  DELETE_STOCK_HEAD_SUCCESS,
  GET_STOCK_HEAD_ITEM_FAILURE,
  GET_STOCK_HEAD_ITEM_REQUEST,
  GET_STOCK_HEAD_ITEM_SUCCESS,
  GET_STOCK_HEAD_ITEM_BY_ID_FAILURE,
  GET_STOCK_HEAD_ITEM_BY_ID_REQUEST,
  GET_STOCK_HEAD_ITEM_BY_ID_SUCCESS,
  POST_STOCK_HEAD_ITEM_FAILURE,
  POST_STOCK_HEAD_ITEM_REQUEST,
  POST_STOCK_HEAD_ITEM_SUCCESS,
  PATCH_STOCK_HEAD_ITEM_FAILURE,
  PATCH_STOCK_HEAD_ITEM_REQUEST,
  PATCH_STOCK_HEAD_ITEM_SUCCESS,
  DELETE_STOCK_HEAD_ITEM_FAILURE,
  DELETE_STOCK_HEAD_ITEM_REQUEST,
  DELETE_STOCK_HEAD_ITEM_SUCCESS,
} from "./actionTypes";

export interface IDefaultStockState {
  isLoading: boolean;
  error: string | null;
  stock: IStockResponse[];
  stockItem?: IStockResponse;
  addStockSuccess: boolean;
  updateStockSuccess: boolean;
  deleteStockSuccess: boolean;
  stockHeadsSupply: IStockHeadResponse[];
  stockHeadsDelivery: IStockHeadResponse[];
  allStockHeads: IStockHeadResponse[]
  deleteStockHeadSuccess: boolean;
  stockHead?: IStockHeadResponse;
  addStockHeadSuccess: boolean;
  stockHeadItems: IStockHeadItemResponse[];
  stockHeadItem?: IStockHeadItemResponse;
}
const defaultStockState: IDefaultStockState = {
  isLoading: false,
  error: null,
  stock: [],
  stockItem: undefined,
  addStockSuccess: false,
  updateStockSuccess: false,
  deleteStockSuccess: false,
  stockHeadsSupply: [],
  stockHeadsDelivery: [],
  allStockHeads: [],
  deleteStockHeadSuccess: false,
  stockHead: undefined,
  addStockHeadSuccess: false,
  stockHeadItems: [],
  stockHeadItem: undefined,
};
const stockReducer = (
  state = defaultStockState,
  action: StockActionTypes
): IDefaultStockState => {
  switch (action.type) {
    case GET_STOCK_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_STOCK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stock: action.payload,
        error: null,
      };
    case GET_STOCK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case GET_STOCK_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_STOCK_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stockItem: action.payload,
        error: null,
      };
    case GET_STOCK_BY_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case POST_STOCK_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        addStockSuccess: false,
      };
    case POST_STOCK_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stockItem: action.payload,
        addStockSuccess: true,
        error: null,
      };
    case POST_STOCK_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        addStockSuccess: false,
      };
    case PATCH_STOCK_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        updateStockSuccess: false,
      };
    case PATCH_STOCK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stockItem: action.payload,
        updateStockSuccess: true,
        error: null,
      };
    case PATCH_STOCK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        updateStockSuccess: false,
      };
    case DELETE_STOCK_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        deleteStockSuccess: false,
      };
    case DELETE_STOCK_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        deleteStockSuccess: true,
      };
    case DELETE_STOCK_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        deleteStockSuccess: false,
      };
    case RECALCULATE_STOCK_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case RECALCULATE_STOCK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case RECALCULATE_STOCK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case GET_STOCK_HEAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_STOCK_HEAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stockHeadsSupply: action.payload.filter(
          (stockHeadItem) => stockHeadItem.beirany === true
        ),
        allStockHeads: action.payload,
        stockHeadsDelivery: action.payload.filter(
          (stockHeadItem) => stockHeadItem.beirany === false
        ),
        error: null,
      };
    case GET_STOCK_HEAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case GET_STOCK_HEAD_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_STOCK_HEAD_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stockHead: action.payload,
        error: null,
      };
    case GET_STOCK_HEAD_BY_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case POST_STOCK_HEAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        addStockHeadSuccess: false,
        error: null,
      };
    case POST_STOCK_HEAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        addStockHeadSuccess: true,
        error: null,
      };
    case POST_STOCK_HEAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        addStockHeadSuccess: false,
        error: action.error,
      };
    case PATCH_STOCK_HEAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case PATCH_STOCK_HEAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case PATCH_STOCK_HEAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case DELETE_STOCK_HEAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        deleteStockHeadSuccess: false,
        error: null,
      };
    case DELETE_STOCK_HEAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        deleteStockHeadSuccess: true, 
        error: null,
      };
    case DELETE_STOCK_HEAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        deleteStockHeadSuccess: false,
        error: action.error,
      };
    case GET_STOCK_HEAD_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_STOCK_HEAD_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stockHeadItems: action.payload,
        error: null,
      };
    case GET_STOCK_HEAD_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case GET_STOCK_HEAD_ITEM_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_STOCK_HEAD_ITEM_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stockHeadItem: action.payload,
        error: null,
      };
    case GET_STOCK_HEAD_ITEM_BY_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case POST_STOCK_HEAD_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case POST_STOCK_HEAD_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case POST_STOCK_HEAD_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case PATCH_STOCK_HEAD_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case PATCH_STOCK_HEAD_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case PATCH_STOCK_HEAD_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case DELETE_STOCK_HEAD_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case DELETE_STOCK_HEAD_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case DELETE_STOCK_HEAD_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default stockReducer;
