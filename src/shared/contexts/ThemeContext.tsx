import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Box, ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "../themes";

interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

const LOCAL_STORAGE_KEY__THEME = "APP_THEME";

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
  children,
}) => {
  const getTheme = (): "light" | "dark" => {
    const accessTheme = localStorage.getItem(LOCAL_STORAGE_KEY__THEME);

    if (accessTheme) {
      setThemeName(JSON.parse(accessTheme));
    } else {
      setThemeName("dark");
    }

    return themeName;
  };

  const [themeName, setThemeName] = useState<"light" | "dark">("dark");

  useEffect(() => {
    getTheme();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY__THEME, JSON.stringify(themeName));
  }, [themeName]);

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
