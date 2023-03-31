import { IconButton, IconButtonProps, ThemeProvider, useTheme } from "@mui/material";
import { PropsWithChildren, useEffect, useState } from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { appTheme, Theme } from "./appTheme";

export const CustomThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.body.style.backgroundColor = currentTheme === "dark" ? "#000" : "#Fff";
  }, [currentTheme]);

  return (
    <>
      <ThemeProvider theme={appTheme(currentTheme)}>
        {children}
        <ChangeThemeButton onClick={() => setCurrentTheme((state) => (state === "light" ? "dark" : "light"))} />
      </ThemeProvider>
    </>
  );
};

// Separeted component so the "useThene" hook can access data provided inside MUI's Theme Provider
const ChangeThemeButton: React.FC<IconButtonProps> = ({ ...props }) => {
  const theme = useTheme();

  return (
    <div
      className="theme-btn"
      style={{
        background: theme.palette.primary.main,
      }}
    >
      <IconButton {...props}>
        <Brightness7Icon style={{ color: "white" }} />
      </IconButton>
    </div>
  );
};
