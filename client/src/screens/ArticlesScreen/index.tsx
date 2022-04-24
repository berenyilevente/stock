import { Button, Input, Modal, Table } from "components";
import { Column } from "components/Table";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import ROUTES from "router/routes";
import { AppState } from "store";
import {
  deleteArticleAction,
  getArticlesAction,
  postArticleAction,
} from "store/articles/actions";

export interface IArticleForm {
  cikkszam: string;
  name: string;
  ar: number;
  mee: string;
  vonalkod: string;
}

const ArticlesScreen: FC = () => {
  const { articles, addArticleSuccess, deleteArticleSuccess, isLoading } =
    useSelector((state: AppState) => state.articles);

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [openUploadModal, setOpenUploadModal] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getArticlesAction());
  }, [dispatch, addArticleSuccess, deleteArticleSuccess]);

  const [form, setForm] = useState<IArticleForm>({
    cikkszam: "",
    name: "",
    mee: "",
    ar: 0,
    vonalkod: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(postArticleAction(form));
    setOpenUploadModal(false);
  };

  const tableColumns: Column[] = [
    {
      header: t("articles.name"),
      columnKey: "name",
    },
    {
      header: t("articles.articleNumber"),
      columnKey: "cikkszam",
    },
    {
      header: t("articles.quantity"),
      columnKey: "mee",
    },
    {
      header: t("articles.price"),
      columnKey: "ar",
    },
    {
      header: t("articles.barcode"),
      columnKey: "vonalkod",
    },
  ];

  return (
    <div className="mx-96">
      <div className="flex justify-between">
        <h1 className="text-3xl mx-32 my-12">{t("articles.articles")}</h1>
        <Button className="my-12" onClick={() => setOpenUploadModal(true)}>
          {t("articles.upload")}
        </Button>
      </div>
      <div className="grid justify-items-center">
        <Table
          tableData={articles}
          tableTitle={t("articles.all")}
          totalCount={articles.length}
          columns={tableColumns}
          deleteAction={(id) => deleteArticleAction(id)}
          isLoading={isLoading}
          route={ROUTES.EDIT_ARTICLE}
          hasMenu
        ></Table>
      </div>
      <Modal
        closeModal={() => setOpenUploadModal(false)}
        showModal={openUploadModal}
        title={t("articles.add")}
      >
        <form onSubmit={handleSubmit} noValidate>
          <Input
            label={t("articles.name")}
            name="name"
            type="text"
            value={form.name}
            onChange={onChange}
          ></Input>
          <Input
            type="text"
            label={t("articles.articleNumber")}
            name="cikkszam"
            value={form.cikkszam}
            onChange={onChange}
          ></Input>
          <Input
            type="text"
            label={t("articles.quantity")}
            onChange={onChange}
            name="mee"
            value={form.mee}
          ></Input>
          <Input
            type="number"
            label={t("articles.price")}
            onChange={onChange}
            value={form.ar}
            name="ar"
          ></Input>
          <Input
            type="text"
            label={t("articles.barcode")}
            onChange={onChange}
            value={form.vonalkod}
            name="vonalkod"
          ></Input>
          <Button type="submit">{t("articles.upload")}</Button>
        </form>
      </Modal>
    </div>
  );
};
export default ArticlesScreen;
