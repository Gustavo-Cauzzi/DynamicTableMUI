import { Paper } from "@mui/material";
import DynamicTable from "./components/DynamicTable";
import { CustomThemeProvider } from "./CustomThemeProvider";
import "./styles/global.css";

export const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <Paper sx={{ margin: 2 }} elevation={3}>
        <DynamicTable
          config={[
            {
              group: "MEU FUNDO",
              result: { "MARKET VALUE": 900, VAR: 113 },
              inner: [
                {
                  group: "STOCK",
                  result: { "MARKET VALUE": 350, VAR: 95 },
                  inner: [
                    {
                      group: "PREFERRED",
                      result: { "MARKET VALUE": 150, VAR: 30 },
                    },
                    {
                      group: "ORDINARY",
                      result: { "MARKET VALUE": 200, VAR: 65 },
                    },
                  ],
                },
                {
                  group: "BOND",
                  result: { "MARKET VALUE": 550, VAR: 18 },
                  inner: [
                    {
                      group: "GOV",
                      result: { "MARKET VALUE": 450, VAR: 8 },
                    },
                    {
                      group: "CORP",
                      result: { "MARKET VALUE": 100, VAR: 10 },
                    },
                  ],
                },
              ],
            },
          ]}
        />
      </Paper>
    </CustomThemeProvider>
  );
};
