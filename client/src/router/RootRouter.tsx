import { Route, Routes } from "react-router-dom";
import ROUTES from "router/routes";
import { SiteLayout } from "layouts";
import {
  ArticlesScreen,
  ClientScreen,
  LoginScreen,
  NavigationScreen,
  Register,
  StockScreen,
  SupplyScreen,
  EditClientScreen,
  EditStockScreen,
  EditArticleScreen,
  Delivery,
  StockHeadItemScreen,
  EditStockHead,
  EditStockHeadItem,
} from "screens";
import { useSelector } from "react-redux";
import { AppState } from "store";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const RootRouter = () => {
  const { token } = useSelector((state: AppState) => state.auth);

  const getHomeElement = () => {
    if (token) {
      return (
        <PrivateRoute component={<StockScreen />} isAuthenticated={!!token} />
      );
    } else return <PublicRoute component={<LoginScreen />} />;
  };

  return (
    <SiteLayout
      navigation={<NavigationScreen isAuthenticated={!!token} />}
      mainContent={
        <Routes>
          <Route path={ROUTES.HOME} element={getHomeElement()} />
          <Route
            path={ROUTES.LOGIN}
            element={<PublicRoute component={<LoginScreen />} />}
          />

          <Route
            path={ROUTES.REGISTER}
            element={<PublicRoute component={<Register />} />}
          />
          <Route
            path={ROUTES.STOCK}
            element={
              <PrivateRoute
                component={<StockScreen />}
                isAuthenticated={!!token}
              />
            }
          />
          <Route
            path={ROUTES.EDIT_STOCK}
            element={
              <PrivateRoute
                component={<EditStockScreen />}
                isAuthenticated={!!token}
              />
            }
          />
          <Route
            path={ROUTES.EDIT_STOCK_HEAD}
            element={
              <PrivateRoute
                component={<EditStockHead />}
                isAuthenticated={!!token}
              />
            }
          />
          <Route
            path={ROUTES.EDIT_STOCK_HEAD_ITEM}
            element={
              <PrivateRoute
                component={<EditStockHeadItem />}
                isAuthenticated={!!token}
              />
            }
          />
          <Route
            path={ROUTES.SUPPLIES}
            element={
              <PrivateRoute
                component={<SupplyScreen />}
                isAuthenticated={!!token}
              />
            }
          />
          <Route
            path={ROUTES.DELIVERY}
            element={
              <PrivateRoute
                component={<Delivery />}
                isAuthenticated={!!token}
              />
            }
          />
          <Route
            path={ROUTES.STOCK_HEAD_ITEM}
            element={
              <PrivateRoute
                component={<StockHeadItemScreen />}
                isAuthenticated={!!token}
              />
            }
          />
          <Route
            path={ROUTES.CLIENTS}
            element={
              <PrivateRoute
                component={<ClientScreen />}
                isAuthenticated={!!token}
              />
            }
          />
          <Route
            path={ROUTES.EDIT_CLIENT}
            element={
              <PrivateRoute
                component={<EditClientScreen />}
                isAuthenticated={!!token}
              />
            }
          />
          <Route
            path={ROUTES.ARTICLES}
            element={
              <PrivateRoute
                component={<ArticlesScreen />}
                isAuthenticated={!!token}
              />
            }
          />
          <Route
            path={ROUTES.EDIT_ARTICLE}
            element={
              <PrivateRoute
                component={<EditArticleScreen />}
                isAuthenticated={!!token}
              />
            }
          />
        </Routes>
      }
    />
  );
};

export default RootRouter;
