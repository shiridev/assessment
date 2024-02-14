import { FC } from "react";
import { Navigate, Route, Routes, redirect } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Dashboard } from "../pages/dashboard/Dashboard";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};
