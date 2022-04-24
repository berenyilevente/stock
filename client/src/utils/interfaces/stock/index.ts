export interface IStockResponse {
  _id: string;
  cikkszam: string;
  menny: string;
}

export interface IStockHeadResponse {
  bizszam: string;
  beirany: boolean;
  datum: Date;
  ugyfelid: string;
}

export interface IStockHeadItemResponse {
  rffejid: string;
  cikkszam: string;
  menny: number;
  ar: number;
}
