import { Button, Table } from "components";
import { Column } from "components/Table";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import ROUTES from "router/routes";
import { AppState } from "store";
import { getStockAction, recalculateStockAction } from "store/stock/actions";
import STRINGS from "utils/constants";

export interface IStockForm {
  cikkszam: string;
  menny: string;
}

const StockScreen: FC = () => {
  const { stock, isLoading, addStockSuccess, deleteStockSuccess } = useSelector(
    (state: AppState) => state.stock
  );
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(getStockAction());
  }, [dispatch, addStockSuccess, deleteStockSuccess]);

  const tableColumns: Column[] = [
    {
      header: t("stock.articleNumber"),
      columnKey: "cikkszam",
    },
    {
      header: t("stock.quantity"),
      columnKey: "menny",
    },
  ];

  return (
    <div className="mx-96">
      <div className="flex justify-between">
        <h1 className="text-3xl mx-32 my-12">{t("stock.title")}</h1>
        <Button
          className="my-12"
          onClick={() => dispatch(recalculateStockAction(STRINGS.RECALC))}
        >
          {t("stock.recalculate")}
        </Button>
      </div>
      <div className="grid justify-items-center">
        <Table
          tableData={stock}
          tableTitle={t("stock.allStock")}
          totalCount={stock.length}
          columns={tableColumns}
          isLoading={isLoading}
          route={ROUTES.EDIT_STOCK}
          hasMenu={false}
        ></Table>
      </div>
    </div>
  );
};
export default StockScreen;
