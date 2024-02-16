import { Button } from "@mui/joy";
import { FC } from "react";

interface props {
  text: string;
  icon: React.ReactNode;
  pathname: string;
  active: boolean;
  handleOnClick: (pathname: string) => void;
}

export const NavButton: FC<props> = ({
  text,
  icon,
  pathname,
  active,
  handleOnClick,
}) => {
  return (
    <Button
      onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
        handleOnClick(pathname)
      }
      variant={active ? "solid" : "plain"}
      startDecorator={icon}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      {text}
    </Button>
  );
};
