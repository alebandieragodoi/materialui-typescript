import {
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseDePaginaProps {
  children: React.ReactNode;
  titulo: string;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({
  children,
  titulo,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height={"100%"} display="flex" flexDirection={"column"} gap={1}>
      <Box
        padding={1}
        height={theme.spacing(12)}
        display="flex"
        alignItems={"center"}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography variant="h5">{titulo}</Typography>
      </Box>

      <Box>Barra de ferramentas</Box>

      <Box>{children}</Box>
    </Box>
  );
};
