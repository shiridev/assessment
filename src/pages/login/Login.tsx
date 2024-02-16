import { Button, FormControl, Input, Stack, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.svg";
import { login } from "../../redux/asyncThunks/login";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectLoginInputsData } from "../../redux/selectors/login";
import { setPassword, setUsername } from "../../redux/slices/loginSlice";
import { appRoutes } from "../../routes/routes";
import { IAuth } from "../../utils/types";
import styles from "./styles.module.scss";

export const Login = () => {
  const dispatch = useAppDispatch();
  const loginStates = useAppSelector(selectLoginInputsData);
  const navigate = useNavigate();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = loginStates.username;
    const password = loginStates.password;
    if (username !== "admin" || password !== "admin") {
      toast.error("username or password is not currect!");
    } else {
      dispatch(login({ username: username, password: password }))
        .then((v) => {
          localStorage.setItem("token", (v.payload as IAuth).token);
          navigate(appRoutes.dashboard.home);
        })
        .catch((error) => toast.error(error.message));
    }
  };

  const handleInputOnChange = (value: string, name: string) => {
    if (name === "username") {
      dispatch(setUsername(value));
    }
    if (name === "password") {
      dispatch(setPassword(value));
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <Typography level="h3">Login</Typography>
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={handleOnSubmit}>
          <Stack spacing={2}>
            <FormControl required>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputOnChange(e.target.value, e.target.name)
                }
              />
            </FormControl>
            <FormControl required>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputOnChange(e.target.value, e.target.name)
                }
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              color="primary"
              loading={loginStates.loading}
            >
              Login
            </Button>
            <Button variant="plain" fullWidth>
              Reset Password
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
};
