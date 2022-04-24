import axios from "axios";
import { IArticleForm } from "screens/ArticlesScreen";
import { IClientForm } from "screens/ClientScreen";
import { ILoginForm } from "screens/LoginScreen";
import { IRegisterForm } from "screens/RegisterScreen";
import { IStockForm } from "screens/StockScreen";
import { store } from "store";
import {
  IArticlesResponse,
  IClientResponse,
  IStockHeadResponse,
  IStockResponse,
} from "utils";
import { URLS } from "./urls";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth?.token;
    if (token) {
      config!.headers!.Authorization! = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

class Client {
  login = async ({ email, password }: ILoginForm) => {
    const response = await API.post(URLS.LOGIN, { email, password });
    return response.data;
  };

  register = async ({
    email,
    username,
    password,
    confirmPassword,
  }: IRegisterForm) => {
    const response = await API.post(URLS.REGISTER, {
      email,
      username,
      password,
      confirmPassword,
    });
    return response.data.data;
  };

  // ARTICLES
  getArticles = async (): Promise<IArticlesResponse> => {
    const response = await API.get(URLS.ARTICLES);
    return response.data;
  };
  getArticleById = async (id: string): Promise<IArticlesResponse> => {
    const response = await API.get(`${URLS.ARTICLES}/${id}`);
    return response.data;
  };
  postArticles = async ({
    cikkszam,
    name,
    ar,
    mee,
    vonalkod,
  }: IArticleForm) => {
    const response = await API.post(URLS.ARTICLES, {
      Tipus: 1,
      name,
      cikkszam,
      ar,
      mee,
      vonalkod,
    });
    return response.data;
  };

  patchArticle = async (
    id: string,
    { cikkszam, name, ar, mee, vonalkod }: IArticleForm
  ) => {
    const response = await API.patch(`${URLS.ARTICLES}/${id}`, {
      cikkszam,
      name,
      ar,
      mee,
      vonalkod,
    });
    return response.data;
  };
  deleteArticle = async (id: string) => {
    await API.delete(`${URLS.ARTICLES}/${id}`);
  };

  // STOCK
  getStock = async (): Promise<IStockResponse> => {
    const response = await API.get(URLS.STOCK);
    return response.data;
  };
  getStockById = async (id: string): Promise<IStockResponse> => {
    const response = await API.get(`${URLS.STOCK}/${id}`);
    return response.data;
  };
  postStockItem = async ({ cikkszam, menny }: IStockForm) => {
    const response = await API.post(URLS.STOCK, { cikkszam, menny });
    return response.data;
  };
  patchStock = async (id: string, { cikkszam, menny }: IStockForm) => {
    const response = await API.patch(`${URLS.STOCK}/${id}`, {
      cikkszam,
      menny,
    });
    return response.data;
  };
  deleteStockItem = async (id: string) => {
    await API.delete(`${URLS.STOCK}/${id}`);
  };

  recalculateStock = async (command: string) => {
    const response = await API.put(URLS.RECALCULATE_STOCK, { command });
    return response.data;
  };

  getStockHeads = async (): Promise<IStockHeadResponse> => {
    const response = await API.get(URLS.STOCK_HEAD);
    return response.data;
  };
  getStockHeadById = async (id: string): Promise<IStockHeadResponse> => {
    const response = await API.get(`${URLS.STOCK_HEAD}/${id}`);
    return response.data;
  };
  postStockHead = async (ugyfelid: string, beirany: boolean) => {
    const response = await API.post(URLS.STOCK_HEAD, {
      ugyfelid,
      beirany,
    });
    return response.data;
  };
  patchStockHead = async (id: string, ugyfelid: string, beirany: boolean) => {
    const response = await API.patch(`${URLS.STOCK_HEAD}/${id}`, {
      beirany,
      ugyfelid,
    });
    return response.data;
  };
  deleteStockHead = async (id: string) => {
    await API.delete(`${URLS.STOCK_HEAD}/${id}`);
  };

  getStockHeadItem = async (): Promise<IStockHeadResponse> => {
    const response = await API.get(URLS.STOCK_HEAD_ITEM);
    return response.data;
  };
  getStockHeadItemById = async (id: string): Promise<IStockHeadResponse> => {
    const response = await API.get(`${URLS.STOCK_HEAD_ITEM}/${id}`);
    return response.data;
  };

  postStockHeadItem = async (
    rffejid: string,
    cikkszam: string,
    menny: number,
    ar: number
  ) => {
    const response = await API.post(URLS.STOCK_HEAD_ITEM, {
      rffejid,
      cikkszam,
      menny,
      ar,
    });
    return response.data;
  };
  patchStockHeadItem = async (
    id: string,
    rffejid: string,
    cikkszam: string,
    menny: number,
    ar: number
  ) => {
    const response = await API.patch(`${URLS.STOCK_HEAD_ITEM}/${id}`, {
      rffejid,
      cikkszam,
      menny,
      ar,
    });
    return response.data;
  };
  deleteStockHeadItem = async (id: string) => {
    await API.delete(`${URLS.STOCK_HEAD_ITEM}/${id}`);
  };

  // CLIENTS
  getClients = async (): Promise<IClientResponse> => {
    const response = await API.get(URLS.CLIENT);
    return response.data;
  };
  getClientById = async (id: string): Promise<IClientResponse> => {
    const response = await API.get(`${URLS.CLIENT}/${id}`);
    return response.data;
  };
  postClient = async ({
    name,
    irsz,
    helyiseg,
    cim,
    adosz,
    tel,
  }: IClientForm) => {
    const response = await API.post(`${URLS.CLIENT}`, {
      name,
      irsz,
      helyiseg,
      cim,
      adosz,
      tel,
    });
    return response.data;
  };
  patchClient = async (
    id: string,
    { name, irsz, helyiseg, cim, adosz, tel }: IClientForm
  ) => {
    const response = await API.patch(`${URLS.CLIENT}/${id}`, {
      name,
      irsz,
      helyiseg,
      cim,
      adosz,
      tel,
    });
    return response.data;
  };
  deleteClient = async (id: string) => {
    await API.delete(`${URLS.CLIENT}/${id}`);
  };
}

export default new Client();
