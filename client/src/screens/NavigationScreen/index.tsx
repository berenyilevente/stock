import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { NavigationLayout } from "layouts";
import { Icon, Link } from "components";
import ROUTES from "router/routes";
import { useDispatch } from "react-redux";
import { logout } from "store/auth/actions";

interface NavbarProps {
  isAuthenticated: boolean;
}

const NavigationScreen: React.FC<NavbarProps> = ({
  children,
  isAuthenticated,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = useCallback(() => {
    dispatch(logout());
    navigate(ROUTES.LOGIN);
  }, [dispatch, navigate]);

  return isAuthenticated ? (
    <NavigationLayout
      navigationItems={
        <>
          <Link
            onClick={() => navigate(ROUTES.STOCK)}
            fontStyle="font-semibold"
          >
            {t("stock.title")}
          </Link>
          <Link
            onClick={() => navigate(ROUTES.SUPPLIES)}
            fontStyle="font-semibold"
          >
            {t("supply.supply")}
          </Link>
          <Link
            onClick={() => navigate(ROUTES.DELIVERY)}
            fontStyle="font-semibold"
          >
            {t("delivery.delivery")}
          </Link>
          <Link
            onClick={() => navigate(ROUTES.CLIENTS)}
            fontStyle="font-semibold"
          >
            {t("clients.clients")}
          </Link>
          <Link
            onClick={() => navigate(ROUTES.ARTICLES)}
            fontStyle="font-semibold"
          >
            {t("articles.articles")}
          </Link>
          <Link onClick={logoutUser} fontStyle="font-semibold">
            <Icon iconType="logoutIcon"></Icon>
          </Link>
        </>
      }
    />
  ) : (
    <div>{children}</div>
  );
};
export default NavigationScreen;
