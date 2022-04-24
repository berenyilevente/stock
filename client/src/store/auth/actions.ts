import client from "api/client";
import { Dispatch } from "redux";
import { ILoginForm } from "screens/LoginScreen";
import { IRegisterForm } from "screens/RegisterScreen";
import { persistor } from "store";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGOUT } from "./actionTypes";

export const loginAction = (userData: ILoginForm) => async (dispatch: Dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  try {
    const res = await client.login(userData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res,
    });
  } catch (error: any) {
    dispatch({
      type: LOGIN_FAILURE,
      errorMessage: error.message,
    });
  }
};

export const registerUserAction = (
    userData: IRegisterForm,
  ) => async (dispatch: Dispatch) => {
    dispatch({
      type: REGISTER_REQUEST,
    });
    try {
      const res = await client.register(userData);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        error,
      });
    }
  };

  export const logout = () => async (dispatch: Dispatch) => {
    await persistor.flush();
    await persistor.purge();
    dispatch({
      type: LOGOUT,
    });
  };