import { Button, Input, LoadingSpinner } from "components";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ROUTES from "router/routes";
import { AppState } from "store";
import { loginAction } from "store/auth/actions";

export interface ILoginForm {
  email: string;
  password: string;
}

const LoginScreen: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const { isLoading } = useSelector((state: AppState) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginAction(form));
    navigate(ROUTES.STOCK);
  };

  return (
    <div className="grid grid-cols-1 place-items-center h-screen ">
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col justify-center">
          <p className="font-semibold py-2 text-xl">{t("authScreen.login")}</p>
          <Input
            label={t("authScreen.email")}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          ></Input>
          <Input
            label={t("authScreen.password")}
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          ></Input>

          <Button className="my-3" variant="primary" type="submit">
            <LoadingSpinner isLoading={isLoading} size="small">
              {t("authScreen.login")}
            </LoadingSpinner>
          </Button>
          <Button onClick={() => navigate(ROUTES.REGISTER)} variant="secondary">
            {t("authScreen.register")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
