import client from "api/client";
import { Dispatch } from "redux";
import { IStockHeadItemForm } from "screens/StockHeadItemScreen";
import { IStockForm } from "screens/StockScreen";
import {
  GET_STOCK_REQUEST,
  GET_STOCK_SUCCESS,
  GET_STOCK_FAILURE,
  POST_STOCK_ITEM_FAILURE,
  POST_STOCK_ITEM_REQUEST,
  POST_STOCK_ITEM_SUCCESS,
  DELETE_STOCK_ITEM_FAILURE,
  DELETE_STOCK_ITEM_REQUEST,
  DELETE_STOCK_ITEM_SUCCESS,
  GET_STOCK_BY_ID_FAILURE,
  GET_STOCK_BY_ID_REQUEST,
  GET_STOCK_BY_ID_SUCCESS,
  PATCH_STOCK_FAILURE,
  PATCH_STOCK_REQUEST,
  PATCH_STOCK_SUCCESS,
  RECALCULATE_STOCK_FAILURE,
  RECALCULATE_STOCK_REQUEST,
  RECALCULATE_STOCK_SUCCESS,
  GET_STOCK_HEAD_FAILURE,
  GET_STOCK_HEAD_REQUEST,
  GET_STOCK_HEAD_SUCCESS,
  POST_STOCK_HEAD_FAILURE,
  POST_STOCK_HEAD_REQUEST,
  POST_STOCK_HEAD_SUCCESS,
  PATCH_STOCK_HEAD_FAILURE,
  PATCH_STOCK_HEAD_REQUEST,
  PATCH_STOCK_HEAD_SUCCESS,
  DELETE_STOCK_HEAD_FAILURE,
  DELETE_STOCK_HEAD_REQUEST,
  DELETE_STOCK_HEAD_SUCCESS,
  GET_STOCK_HEAD_BY_ID_FAILURE,
  GET_STOCK_HEAD_BY_ID_REQUEST,
  GET_STOCK_HEAD_BY_ID_SUCCESS,
  GET_STOCK_HEAD_ITEM_FAILURE,
  GET_STOCK_HEAD_ITEM_REQUEST,
  GET_STOCK_HEAD_ITEM_SUCCESS,
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

export const getStockAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_STOCK_REQUEST,
  });
  try {
    const res = await client.getStock();
    dispatch({
      type: GET_STOCK_SUCCESS,
      payload: res,
    });
  } catch (error: any) {
    dispatch({
      type: GET_STOCK_FAILURE,
      error: error.message,
    });
  }
};

export const getStockByIdAction =
  (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: GET_STOCK_BY_ID_REQUEST,
    });
    try {
      const res = await client.getStockById(id);
      dispatch({
        type: GET_STOCK_BY_ID_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: GET_STOCK_BY_ID_FAILURE,
        error: error.message,
      });
    }
  };

export const postStockItemAction =
  (stockData: IStockForm) => async (dispatch: Dispatch) => {
    dispatch({
      type: POST_STOCK_ITEM_REQUEST,
    });
    try {
      const res = await client.postStockItem(stockData);
      dispatch({
        type: POST_STOCK_ITEM_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: POST_STOCK_ITEM_FAILURE,
        error: error.message,
      });
    }
  };

export const patchStockAction =
  (id: string, stockData: IStockForm) => async (dispatch: Dispatch) => {
    dispatch({
      type: PATCH_STOCK_REQUEST,
    });
    try {
      const res = await client.patchStock(id, stockData);
      dispatch({
        type: PATCH_STOCK_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: PATCH_STOCK_FAILURE,
        error: error.message,
      });
    }
  };

export const deleteStockItemAction =
  (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: DELETE_STOCK_ITEM_REQUEST,
    });
    try {
      const res = await client.deleteStockItem(id);
      dispatch({
        type: DELETE_STOCK_ITEM_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: DELETE_STOCK_ITEM_FAILURE,
        error: error.message,
      });
    }
  };

export const recalculateStockAction =
  (command: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: RECALCULATE_STOCK_REQUEST,
    });
    try {
      const res = await client.recalculateStock(command);
      dispatch({
        type: RECALCULATE_STOCK_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: RECALCULATE_STOCK_FAILURE,
        error: error.message,
      });
    }
  };

export const getStockHeadsAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_STOCK_HEAD_REQUEST,
  });
  try {
    const res = await client.getStockHeads();
    dispatch({
      type: GET_STOCK_HEAD_SUCCESS,
      payload: res,
    });
  } catch (error: any) {
    dispatch({
      type: GET_STOCK_HEAD_FAILURE,
      error: error.message,
    });
  }
};

export const getStockHeadByIdAction =
  (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: GET_STOCK_HEAD_BY_ID_REQUEST,
    });
    try {
      const res = await client.getStockHeadById(id);
      dispatch({
        type: GET_STOCK_HEAD_BY_ID_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: GET_STOCK_HEAD_BY_ID_FAILURE,
        error: error.message,
      });
    }
  };

export const postStockHeadAction =
  (ugyfelid: string, beirany: boolean) => async (dispatch: Dispatch) => {
    dispatch({
      type: POST_STOCK_HEAD_REQUEST,
    });
    try {
      const res = await client.postStockHead(ugyfelid, beirany);
      dispatch({
        type: POST_STOCK_HEAD_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: POST_STOCK_HEAD_FAILURE,
        error: error.message,
      });
    }
  };
export const patchStockHeadAction =
  (id: string, ugyfelid: string, beirany: boolean) =>
  async (dispatch: Dispatch) => {
    dispatch({
      type: PATCH_STOCK_HEAD_REQUEST,
    });
    try {
      const res = await client.patchStockHead(id, ugyfelid, beirany);
      dispatch({
        type: PATCH_STOCK_HEAD_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: PATCH_STOCK_HEAD_FAILURE,
        error: error.message,
      });
    }
  };

export const deleteStockHeadAction =
  (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: DELETE_STOCK_HEAD_REQUEST,
    });
    try {
      const res = await client.deleteStockHead(id);
      dispatch({
        type: DELETE_STOCK_HEAD_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: DELETE_STOCK_HEAD_FAILURE,
        error: error.message,
      });
    }
  };

export const getStockHeadItemAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_STOCK_HEAD_ITEM_REQUEST,
  });
  try {
    const res = await client.getStockHeadItem();
    dispatch({
      type: GET_STOCK_HEAD_ITEM_SUCCESS,
      payload: res,
    });
  } catch (error: any) {
    dispatch({
      type: GET_STOCK_HEAD_ITEM_FAILURE,
      error: error.message,
    });
  }
};

export const getStockHeadItemByIdAction =
  (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: GET_STOCK_HEAD_BY_ID_REQUEST,
    });
    try {
      const res = await client.getStockHeadById(id);
      dispatch({
        type: GET_STOCK_HEAD_BY_ID_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: GET_STOCK_HEAD_BY_ID_FAILURE,
        error: error.message,
      });
    }
  };

export const postStockHeadItemAction =
  (
  { rffejid,
    cikkszam,
    menny,
    ar}: IStockHeadItemForm
  ) =>
  async (dispatch: Dispatch) => {
    dispatch({
      type: POST_STOCK_HEAD_ITEM_REQUEST,
    });
    try {
      const res = await client.postStockHeadItem(
        rffejid,
        cikkszam,
        menny,
        ar
      );
      dispatch({
        type: POST_STOCK_HEAD_ITEM_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: POST_STOCK_HEAD_ITEM_FAILURE,
        error: error.message,
      });
    }
  };

export const patchStockHeadItemAction =
  (
    id: string,
    stockHeadId: string,
    articleNumber: string,
    quantity: number,
    price: number
  ) =>
  async (dispatch: Dispatch) => {
    dispatch({
      type: PATCH_STOCK_HEAD_ITEM_REQUEST,
    });
    try {
      const res = await client.patchStockHeadItem(
        id,
        stockHeadId,
        articleNumber,
        quantity,
        price
      );
      dispatch({
        type: PATCH_STOCK_HEAD_ITEM_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: PATCH_STOCK_HEAD_ITEM_FAILURE,
        error: error.message,
      });
    }
  };

export const DeleteStockHeadItemAction =
  (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: DELETE_STOCK_HEAD_ITEM_REQUEST,
    });
    try {
      await client.deleteStockHeadItem(id);
      dispatch({
        type: DELETE_STOCK_HEAD_ITEM_SUCCESS,
      });
    } catch (error: any) {
      dispatch({
        type: DELETE_STOCK_HEAD_ITEM_FAILURE,
        error: error.message,
      });
    }
  };
