import React, { useState } from "react";
import { Button, Input } from "components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ROUTES from "router/routes";
import { registerUserAction } from "store/auth/actions";
import { useDispatch } from "react-redux";

export interface IRegisterForm {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}
export interface RegisterProps {}
const Register: React.FC<RegisterProps> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState<IRegisterForm>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUserAction(form));
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className="grid grid-cols-1 place-items-center h-screen">
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col justify-center">
          <p className="font-semibold py-2 text-xl">
            {t("authScreen.register")}
          </p>
          <Input
            label={t("authScreen.email")}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          ></Input>
          <Input
            label={t("authScreen.name")}
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
          ></Input>
          <Input
            label={t("authScreen.password")}
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          ></Input>
          <Input
            label={t("authScreen.confirmPassword")}
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
          ></Input>
          <Button className="my-3" variant="primary" type="submit">
            {t("authScreen.ctaRegister")}
          </Button>
          <Button onClick={() => navigate(ROUTES.LOGIN)} variant="secondary">
            {t("authScreen.backToLogin")}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Register;
