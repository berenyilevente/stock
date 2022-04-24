import { Button, Input, LoadingSpinner } from "components";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "router/routes";
import { AppState } from "store";
import {
  getArticleByIdAction,
  patchArticleAction,
} from "store/articles/actions";

export interface IArticleForm {
  cikkszam: string;
  name: string;
  ar: number;
  mee: string;
  vonalkod: string;
}

const EditArticleScreen: FC = () => {
  const { article, isLoading } = useSelector(
    (state: AppState) => state.articles
  );
  const { id } = useParams();
  const articleId = id!.replace(":id", "");
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getArticleByIdAction(articleId));
  }, [articleId, dispatch]);

  const [form, setForm] = useState<IArticleForm>({
    cikkszam: article?.cikkszam!,
    name: article?.name!,
    mee: article?.mee!,
    ar: article?.ar!,
    vonalkod: article?.vonalkod!,
  });

  useEffect(() => {
    setForm({
      cikkszam: article?.cikkszam!,
      name: article?.name!,
      mee: article?.mee!,
      ar: article?.ar!,
      vonalkod: article?.vonalkod!,
    });
  }, [
    article?.ar,
    article?.cikkszam,
    article?.mee,
    article?.name,
    article?.vonalkod,
    dispatch,
  ]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(patchArticleAction(articleId, form));
    navigate(ROUTES.ARTICLES);
  };

  return (
    <div className="mx-96 mt-12">
      <p className="text-3xl mb-4">{t("articles.editArticle")}</p>
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
        <div className="grid grid-cols-2">
          <Button className="border-none" onClick={() => navigate(-1)}>
            {t("general.cancel")}
          </Button>
          <Button type="submit">
            <LoadingSpinner isLoading={isLoading}>
              {t("articles.save")}
            </LoadingSpinner>
          </Button>
        </div>
      </form>
    </div>
  );
};
export default EditArticleScreen;
