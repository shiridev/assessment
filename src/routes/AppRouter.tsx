import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthGuard } from "../components/AuthGuard/AuthGuard";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Login } from "../pages/login/Login";
import { PagesNames } from "../utils/types";
import { appRoutes } from "./routes";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={appRoutes.login} element={<Login />} />
      <Route path={appRoutes.dashboard.home}>
        <Route
          path={appRoutes.dashboard.home}
          element={
            <AuthGuard
              component={<Dashboard page={PagesNames.DashboardHome} />}
            />
          }
        />
        <Route
          path={appRoutes.dashboard.history}
          element={
            <AuthGuard
              component={<Dashboard page={PagesNames.DashboardHistory} />}
            />
          }
        />
        <Route
          path={appRoutes.dashboard.invoice}
          element={
            <AuthGuard
              component={<Dashboard page={PagesNames.DashboardInvoice} />}
            />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to={appRoutes.dashboard.home} />} />
    </Routes>
  );
};
