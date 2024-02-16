import {
  IconButton,
  Avatar,
  Dropdown,
  MenuButton,
  MenuItem,
  Menu,
} from "@mui/joy";
import styles from "./style.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import { toggleDrawerMenu } from "../../redux/slices/dashboard";
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/avatar.jpg";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../routes/routes";

export const DashboardHeader = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOnMenuButtonClick = () => {
    dispatch(toggleDrawerMenu());
  };

  const handleLogoutOnClick = () => {
    localStorage.clear();
    navigate({ pathname: appRoutes.login }, { replace: true });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <IconButton
          variant="outlined"
          color="neutral"
          onClick={handleOnMenuButtonClick}
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="logo" />
      </div>
      <Dropdown>
        <MenuButton slots={{ root: Avatar }}>
          <Avatar
            src={avatar}
            alt="Travis Howard"
            sx={{
              cursor: "pointer",
            }}
          />
        </MenuButton>
        <Menu>
          <MenuItem onClick={handleLogoutOnClick}>Logout</MenuItem>
        </Menu>
      </Dropdown>
    </div>
  );
};
