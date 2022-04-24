import { Button, Input, Modal, Table } from "components";
import { Column } from "components/Table";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import ROUTES from "router/routes";
import { AppState } from "store";
import {
  deleteClientAction,
  getClientsAction,
  postClientAction,
} from "store/clients/actions";

export interface IClientForm {
  name: string;
  irsz: string;
  helyiseg: string;
  cim: string;
  adosz: string;
  tel: string;
}

const ClientsScreen: FC = () => {
  const { clients, isLoading, addClientSuccess, deleteClientSuccess } =
    useSelector((state: AppState) => state.clients);

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [openUploadModal, setOpenUploadModal] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getClientsAction());
  }, [dispatch, addClientSuccess, deleteClientSuccess]);

  const [form, setForm] = useState<IClientForm>({
    name: "",
    irsz: "",
    helyiseg: "",
    cim: "",
    adosz: "",
    tel: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(postClientAction(form));
    setOpenUploadModal(false);
  };

  const tableColumns: Column[] = [
    {
      header: t("clients.name"),
      columnKey: "name",
    },
    {
      header: t("clients.postalCode"),
      columnKey: "irsz",
    },
    {
      header: t("clients.place"),
      columnKey: "helyiseg",
    },
    {
      header: t("clients.address"),
      columnKey: "cim",
    },
    {
      header: t("clients.taxNumber"),
      columnKey: "adosz",
    },
    {
      header: t("clients.phoneNumber"),
      columnKey: "tel",
    },
  ];

  return (
    <div className="mx-96">
      <div className="flex justify-between">
        <h1 className="text-3xl mx-32 my-12">{t("clients.title")}</h1>
        <Button className="my-12" onClick={() => setOpenUploadModal(true)}>
          {t("clients.add")}
        </Button>
      </div>
      <div className="grid justify-items-center">
        <Table
          tableData={clients}
          tableTitle={t("clients.all")}
          totalCount={clients.length}
          columns={tableColumns}
          deleteAction={(id) => deleteClientAction(id)}
          isLoading={isLoading}
          route={ROUTES.EDIT_CLIENT}
          hasMenu
        ></Table>
      </div>
      <Modal
        closeModal={() => setOpenUploadModal(false)}
        showModal={openUploadModal}
        title={t("clients.add")}
      >
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-2 gap-4 m-4">
            <Input
              label={t("clients.name")}
              name="name"
              type="text"
              value={form.name}
              onChange={onChange}
            ></Input>
            <Input
              type="text"
              label={t("clients.postalCode")}
              name="irsz"
              value={form.irsz}
              onChange={onChange}
            ></Input>
            <Input
              type="text"
              label={t("clients.place")}
              onChange={onChange}
              name="helyiseg"
              value={form.helyiseg}
            ></Input>
            <Input
              type="text"
              label={t("clients.address")}
              onChange={onChange}
              name="cim"
              value={form.cim}
            ></Input>
            <Input
              type="text"
              label={t("clients.taxNumber")}
              onChange={onChange}
              name="adosz"
              value={form.adosz}
            ></Input>
            <Input
              type="text"
              label={t("clients.phoneNumber")}
              onChange={onChange}
              name="tel"
              value={form.tel}
            ></Input>
            <Button type="submit">{t("clients.add")}</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ClientsScreen;
