import { createTheme } from "@mui/material";

export type Theme = "light" | "dark";

export const appTheme = (theme: Theme) =>
    createTheme({
        palette: {
            mode: theme,
            primary: {
                main: theme === "dark" ? "#DE832E" : "#1976d2",
            },
        },
        components: {
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        "&:nth-of-type(even)": {
                            backgroundColor: theme === "dark" ? "#191919" : "#f5f5f5",
                        },
                    },
                },
            },
        },
    });
