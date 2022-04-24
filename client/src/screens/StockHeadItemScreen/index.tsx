import { Button, Input, Modal, Table } from "components";
import { Column } from "components/Table";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "router/routes";
import { AppState } from "store";
import {
  DeleteStockHeadItemAction,
  getStockHeadItemAction,
  postStockHeadItemAction,
} from "store/stock/actions";

export interface IStockHeadItemForm {
  rffejid: string;
  cikkszam: string;
  menny: number;
  ar: number;
}

export interface StockHeadItemScreenProps {}
const StockHeadItemScreen: React.FC<StockHeadItemScreenProps> = () => {
  const { id } = useParams();
  const stockHeadId = id!.replace(":id", "");
  const stockHeadItems = useSelector((state: AppState) =>
    state.stock.stockHeadItems.filter((item) => item.rffejid === stockHeadId)
  );
  const { isLoading } = useSelector((state: AppState) => state.stock);
  const [openUploadModal, setOpenUploadModal] = useState<boolean>(false);
  const [form, setForm] = useState<IStockHeadItemForm>({
    rffejid: "",
    cikkszam: "",
    menny: 0,
    ar: 0,
  });
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getStockHeadItemAction());
  }, [dispatch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(postStockHeadItemAction({ ...form, rffejid: stockHeadId }));
    setOpenUploadModal(false);
  };

  const tableColumns: Column[] = [
    {
      header: t("stock.stockHeadId"),
      columnKey: "rffejid",
    },
    {
      header: t("stock.articleNumber"),
      columnKey: "cikkszam",
    },
    {
      header: t("stock.quantity"),
      columnKey: "menny",
    },
    {
      header: t("stock.price"),
      columnKey: "ar",
    },
  ];

  return (
    <div className="mx-96">
      <div className="flex justify-between">
        <h1 className="text-3xl mx-32 my-12">{t("stock.stockHeadItems")}</h1>
        <Button className="my-12" onClick={() => setOpenUploadModal(true)}>
          {t("stock.addStockHeadItem")}
        </Button>
      </div>
      <div className="grid justify-items-center">
        <Table
          tableData={stockHeadItems}
          tableTitle={t("stock.allStockHeadItems")}
          totalCount={stockHeadItems.length}
          columns={tableColumns}
          isLoading={isLoading}
          route={ROUTES.EDIT_STOCK_HEAD_ITEM}
          deleteAction={DeleteStockHeadItemAction}
          hasMenu
        ></Table>
      </div>
      <div className="flex justify-start mx-32 my-12">
        <Button className="border-none" onClick={() => navigate(-1)}>
          {t("general.back")}
        </Button>
      </div>

      <Modal
        closeModal={() => setOpenUploadModal(false)}
        showModal={openUploadModal}
        title={t("general.add")}
      >
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-2 gap-4 m-4">
            <Input
              type="text"
              label={t("stock.articleNumber")}
              name="cikkszam"
              value={form.cikkszam}
              onChange={onChange}
            ></Input>
            <Input
              type="number"
              label={t("stock.quantity")}
              onChange={onChange}
              name="menny"
              value={form.menny}
            ></Input>
            <Input
              type="number"
              label={t("stock.price")}
              onChange={onChange}
              name="ar"
              value={form.ar}
            ></Input>
            <Button type="submit">{t("general.add")}</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default StockHeadItemScreen;
