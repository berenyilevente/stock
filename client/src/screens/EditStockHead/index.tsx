import { Button, Autocomplete, LoadingSpinner, Switch } from "components";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "router/routes";
import { IStockHeadForm } from "screens/SupplyScreen";
import { AppState } from "store";
import { getClientsAction } from "store/clients/actions";
import {
  getStockHeadByIdAction,
  patchStockHeadAction,
} from "store/stock/actions";

const EditStockHead: React.FC = () => {
  const { clients } = useSelector((state: AppState) => state.clients);
  const { stockHead, isLoading } = useSelector(
    (state: AppState) => state.stock
  );

  const { id } = useParams();
  const stockHeadId = id!.replace(":id", "");
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [form, setForm] = useState<IStockHeadForm>({
    ugyfelid: "",
    ugyfel: "",
  });
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number>(0);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const currentClientName = clients.find(
    (e) => e._id === stockHead?.ugyfelid
  )?.name;
  const currentClientId = clients.find(
    (e) => e._id === stockHead?.ugyfelid
  )?._id;

  useEffect(() => {
    dispatch(getStockHeadByIdAction(stockHeadId));
    dispatch(getClientsAction());
  }, [dispatch, stockHeadId]);

  useEffect(() => {
    setChecked(stockHead?.beirany!);
    setForm({ ugyfelid: currentClientId!, ugyfel: currentClientName! });
  }, [currentClientId, currentClientName, stockHead?.beirany]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(patchStockHeadAction(stockHeadId, form.ugyfelid!, checked));
    checked ? navigate(ROUTES.SUPPLIES) : navigate(ROUTES.DELIVERY);
  };

  const onChange = () => {
    setChecked((prevState) => !prevState);
  };

  // Autocomplete
  const handleAutocomplete = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm({ ...form, ugyfel: value });
    const dataToBeFiltered = clients.map((client) => Object.values(client)[1]);
    const filteredData = dataToBeFiltered.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    setShowOptions(true);
    setFilteredSuggestions(filteredData);
  };

  const onClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { innerText } = e.target;
    const selectedClientId = clients.find(
      (client) => client.name === innerText
    )!._id;
    setForm({ ...form, ugyfel: innerText, ugyfelid: selectedClientId });
    setFilteredSuggestions([]);
    setActiveSuggestionIndex(0);
    setShowOptions(false);
  };

  const onKeyDown = (e: any) => {
    if (e.key === "Enter") {
      const selectedClientId = clients.find(
        (client) => client.name === filteredSuggestions[activeSuggestionIndex]
      )!._id;
      setForm({
        ...form,
        ugyfel: filteredSuggestions[activeSuggestionIndex],
        ugyfelid: selectedClientId,
      });
      setActiveSuggestionIndex(0);
      setShowOptions(false);
    } else if (e.key === "ArrowUp") {
      if (activeSuggestionIndex === 0) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (e.key === "ArrowDown") {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };
  return (
    <div className="mx-96 mt-12">
      <p className="text-3xl mb-4">{t("stock.edit")}</p>
      <div className="grid place-content-center">
        <form onSubmit={handleSubmit} noValidate>
          <Switch
            label={checked ? t("stock.supply") : t("stock.delivery")}
            onChange={onChange}
            checked={checked}
            className="flex justify-center mb-4"
          ></Switch>
          <Autocomplete
            id="add-client"
            name="client"
            type="text"
            label={t("supply.client")}
            autoComplete="off"
            onChange={handleAutocomplete}
            value={form.ugyfel!}
            filteredSuggestions={filteredSuggestions}
            activeSuggestionIndex={activeSuggestionIndex}
            onClick={onClick}
            onKeyDown={onKeyDown}
            showOptions={showOptions}
          />
          <div className="grid grid-cols-2">
            <Button className="border-none" onClick={() => navigate(-1)}>
              {t("general.cancel")}
            </Button>
            <Button type="submit">
              <LoadingSpinner isLoading={isLoading}>
                {t("general.save")}
              </LoadingSpinner>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditStockHead;
