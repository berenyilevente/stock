import { Autocomplete, Button, Modal, Table } from "components";
import { Column } from "components/Table";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import ROUTES from "router/routes";
import { AppState } from "store";
import { getClientsAction } from "store/clients/actions";
import {
  deleteStockHeadAction,
  getStockHeadsAction,
  postStockHeadAction,
} from "store/stock/actions";

export interface IStockHeadForm {
  ugyfelid?: string;
  ugyfel: string;
}

const SupplyScreen: FC = () => {
  const {
    stockHeadsSupply,
    isLoading,
    addStockHeadSuccess,
    deleteStockHeadSuccess,
  } = useSelector((state: AppState) => state.stock);
  const { clients } = useSelector((state: AppState) => state.clients);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [form, setForm] = useState<IStockHeadForm>({
    ugyfelid: "",
    ugyfel: "",
  });
  const [openUploadModal, setOpenUploadModal] = useState<boolean>(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number>(0);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getStockHeadsAction());
    dispatch(getClientsAction());
  }, [dispatch, addStockHeadSuccess, deleteStockHeadSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(postStockHeadAction(form.ugyfelid!, true));
    setOpenUploadModal(false);
  };

  const tableColumns: Column[] = [
    {
      header: t("supply.number"),
      columnKey: "bizszam",
    },
    {
      header: t("supply.date"),
      columnKey: "datum",
    },
    {
      header: t("supply.client"),
      columnKey: "ugyfelid",
    },
  ];

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
    <div className="mx-96">
      <div className="flex justify-between">
        <h1 className="text-3xl mx-32 my-12">{t("supply.supply")}</h1>
        <Button className="my-12" onClick={() => setOpenUploadModal(true)}>
          {t("supply.addStockHead")}
        </Button>
      </div>
      <div className="grid justify-items-center">
        <Table
          tableData={stockHeadsSupply}
          tableTitle={t("supply.stockHeads")}
          totalCount={stockHeadsSupply.length}
          columns={tableColumns}
          isLoading={isLoading}
          stockRoute={ROUTES.STOCK_HEAD_ITEM}
          route={ROUTES.EDIT_STOCK_HEAD}
          menuText={t("stock.stockHeadItems")}
          deleteAction={deleteStockHeadAction}
          hasMenu
        ></Table>
      </div>
      <Modal
        closeModal={() => setOpenUploadModal(false)}
        showModal={openUploadModal}
        title={t("supply.addStockHead")}
      >
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1">
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

            <Button type="submit" className="mt-4">
              {t("general.add")}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default SupplyScreen;
