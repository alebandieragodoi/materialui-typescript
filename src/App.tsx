import "./shared/forms/TraducoesYup";

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { MenuLateral } from "./shared/components/menu-lateral/MenuLateral";
import { DrawerProvider } from "./shared/contexts";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
