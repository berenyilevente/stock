import { Button, Input, LoadingSpinner } from "components";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "router/routes";
import { AppState } from "store";
import { getClientByIdAction, patchClientAction } from "store/clients/actions";

export interface IClientForm {
  name: string;
  irsz: string;
  helyiseg: string;
  cim: string;
  adosz: string;
  tel: string;
}

const EditClientScreen: FC = () => {
  const { client, isLoading } = useSelector((state: AppState) => state.clients);

  const { id } = useParams();
  const clientId = id!.replace(":id", "");

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getClientByIdAction(clientId));
  }, [clientId, dispatch]);

  const [form, setForm] = useState<IClientForm>({
    name: client?.name!,
    irsz: client?.irsz!,
    helyiseg: client?.helyiseg!,
    cim: client?.cim!,
    adosz: client?.adosz!,
    tel: client?.tel!,
  });

  useEffect(() => {
    setForm({
      name: client?.name!,
      irsz: client?.irsz!,
      helyiseg: client?.helyiseg!,
      cim: client?.cim!,
      adosz: client?.adosz!,
      tel: client?.tel!,
    });
  }, [
    client?.adosz,
    client?.cim,
    client?.helyiseg,
    client?.irsz,
    client?.name,
    client?.tel,
    dispatch,
  ]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(patchClientAction(clientId, form));
    navigate(ROUTES.CLIENTS);
  };

  return (
    <div className="mx-96 mt-12">
      <p className="text-3xl mb-4">{t("clients.editClient")}</p>
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
          <Button className="border-none" onClick={() => navigate(-1)}>
            {t("general.cancel")}
          </Button>
          <Button type="submit">
            <LoadingSpinner isLoading={isLoading}>
              {t("clients.saveClient")}
            </LoadingSpinner>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditClientScreen;
