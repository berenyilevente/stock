import { Button, Input, LoadingSpinner } from "components";
import { t } from "i18next";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "router/routes";
import { AppState } from "store";
import { getStockByIdAction, patchStockAction } from "store/stock/actions";

export interface IStockForm {
  cikkszam: string;
  menny: string;
}

const EditStockScreen: FC = () => {
  const { stockItem, isLoading } = useSelector(
    (state: AppState) => state.stock
  );
  const { id } = useParams();
  const stockId = id!.replace(":id", "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getStockByIdAction(stockId));
  }, [dispatch, stockId]);

  const [form, setForm] = useState<IStockForm>({
    cikkszam: "",
    menny: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    setForm({
      cikkszam: stockItem?.cikkszam!,
      menny: stockItem?.menny!,
    });
  }, [dispatch, stockItem?.cikkszam, stockItem?.menny]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(patchStockAction(stockId, form));
    navigate(ROUTES.STOCK);
  };

  return (
    <div className="mx-96 mt-12">
      <p className="text-3xl mb-4">{t("stock.edit")}</p>
      <form onSubmit={handleSubmit} noValidate>
        <Input
          label={t("stock.articleNumber")}
          name="cikkszam"
          type="text"
          value={form.cikkszam}
          onChange={onChange}
        ></Input>
        <Input
          type="text"
          label={t("stock.quantity")}
          name="menny"
          value={form.menny}
          onChange={onChange}
        ></Input>
        <div className="grid grid-cols-2">
          <Button className="border-none" onClick={() => navigate(-1)}>
            {t("general.cancel")}
          </Button>
          <Button type="submit">
            <LoadingSpinner isLoading={isLoading}>
              {t("stock.save")}
            </LoadingSpinner>
          </Button>
        </div>
      </form>
    </div>
  );
};
export default EditStockScreen;
