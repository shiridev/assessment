import { History, Home, List } from "@mui/icons-material";
import { Drawer, ModalClose, Sheet, Typography } from "@mui/joy";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectOpenDrawerMenuState } from "../../redux/selectors/dashboard";
import { toggleDrawerMenu } from "../../redux/slices/dashboard";
import { appRoutes } from "../../routes/routes";
import { NavButton } from "../NavButton/NavButton";
import styles from "./styles.module.scss";

export const DrawerMenu = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(selectOpenDrawerMenuState);
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnNavClick = (pathname: string) => {
    navigate({ pathname: pathname });
    dispatch(toggleDrawerMenu());
  };

  return (
    <div className={styles.mainContainer}>
      <Drawer
        size="sm"
        variant="plain"
        open={open}
        onClose={() => dispatch(toggleDrawerMenu())}
        slotProps={{
          content: {
            sx: {
              bgcolor: "transparent",
              p: { md: 3, sm: 0 },
              boxShadow: "none",
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: 8,
            borderTopLeftRadius: { xs: 0, lg: 8 },
            borderBottomLeftRadius: { xs: 0, lg: 8 },
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <div className={styles.header}>
            <Typography level="title-lg">Menu</Typography>
            <ModalClose />
          </div>

          <NavButton
            text="Home"
            icon={<Home />}
            active={location.pathname === appRoutes.dashboard.home}
            pathname={appRoutes.dashboard.home}
            handleOnClick={handleOnNavClick}
          />

          <NavButton
            text="History"
            icon={<History />}
            active={location.pathname === appRoutes.dashboard.history}
            pathname={appRoutes.dashboard.history}
            handleOnClick={handleOnNavClick}
          />

          <NavButton
            text="Invoice"
            icon={<List />}
            active={location.pathname === appRoutes.dashboard.invoice}
            pathname={appRoutes.dashboard.invoice}
            handleOnClick={handleOnNavClick}
          />
        </Sheet>
      </Drawer>
    </div>
  );
};
