import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppState } from "store";
import { getClientsAction } from "store/clients/actions";
import {
  getStockHeadByIdAction,
  getStockHeadItemByIdAction,
  getStockHeadsAction,
} from "store/stock/actions";

export interface IStockHeadItemForm {
  rffejid: string;
  cikkszam: string;
  menny: number;
  ar: number;
}

const EditStockHeadItem: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  const stockHeadItemId = id!.replace(":id", "");
  const [form, setForm] = useState<IStockHeadItemForm>({
    rffejid: "",
    cikkszam: "",
    menny: 0,
    ar: 0,
  });

  const { allStockHeads } = useSelector((state: AppState) => state.stock);
  useEffect(() => {
    dispatch(getStockHeadItemByIdAction(stockHeadItemId));
    dispatch(getStockHeadsAction());
  }, [dispatch, stockHeadItemId]);

  return (
    <div>
      <h1>Page content</h1>
    </div>
  );
};
export default EditStockHeadItem;
