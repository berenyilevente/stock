import { IUser } from "utils";
import {
  AuthActionTypes,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionTypes";

const defaultUser: IUser = {
  _id: '',
  name: '',
};

//TODO replace login success with access token
export interface IDefaultAuthState {
  isLoading: boolean;
  error: string | null;
  user: IUser;
  token: string;
  loginSuccess: boolean;
}
const defaultAuthState: IDefaultAuthState = {
  isLoading: false,
  error: null,
  user: defaultUser,
  token: "",
  loginSuccess: false,
};

const authReducer = (
  state = defaultAuthState,
  action: AuthActionTypes
): IDefaultAuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        token: '',
        error: null,
        loginSuccess: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        error: null,        
        loginSuccess: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        token: '',
        error: action.error,        
        loginSuccess: false,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        token: '',
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        token: '',
        error: action.error,
      };
      case LOGOUT:
        return {
          ...state,
          token: "",
          loginSuccess: false,
        };
    default:
      return state;
  }
};
export default authReducer;
