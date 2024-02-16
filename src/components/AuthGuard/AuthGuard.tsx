import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { appRoutes } from "../../routes/routes";

interface props {
  component: ReactNode;
}

export const AuthGuard: FC<props> = ({ component }) => {
  const isAuthenticated =
    localStorage.getItem("token") ===
    "jkflksjflksdaflhasjkdfhkjashflkjhasjkfdhkajshfdkjahskjhfasjkfhjkasf";

  if (isAuthenticated) {
    return component;
  } else {
    return <Navigate to={appRoutes.login} />;
  }
};
