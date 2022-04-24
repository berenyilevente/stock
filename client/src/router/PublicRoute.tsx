import { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { logout } from "store/auth/actions";

interface PublicRouteProps {
  component: ReactElement;
}

const PublicRoute: FC<PublicRouteProps> = ({ component }) => {
  const { token } = useSelector((state: AppState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(logout());
    }
  }, [dispatch, token]);

  return component;
};

export default PublicRoute;
