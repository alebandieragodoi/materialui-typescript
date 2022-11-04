import {
  Box,
  Drawer,
  useTheme,
  Avatar,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Icon,
  useMediaQuery,
} from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { useDrawerContext } from "../../contexts";

interface IListItemLinkProps {
  to: string;
  icon: string;
  label: string;
  onClick: () => void | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  icon,
  label,
  onClick,
}) => {
  const navigate = useNavigate();

  const resolvePath = useResolvedPath(to);

  const match = useMatch({ path: resolvePath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick?.(); //se não for undefined execute.
  };
  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>

      <ListItemText primary={label}></ListItemText>
    </ListItemButton>
  );
};

interface IMenuLateralProps {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection={"column"}
        >
          <Box
            width={"100%"}
            height={theme.spacing(20)}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://scontent.fcpq4-1.fna.fbcdn.net/v/t1.6435-1/89617674_10157461845747961_5895838878668947456_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=3mZ11Rx4bQAAX989ASi&_nc_ht=scontent.fcpq4-1.fna&oh=00_AfArGRYHFROATY6KzCehzusIXqQy5vnJCseFTHnbFEWY6g&oe=638B762E"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {/* <ListItemLink
                icon="home"
                to="/pagina-inicial"
                label="Página inicial"
                onClick={toggleDrawerOpen}
              /> */}

              {drawerOptions.map((drawerOptions) => (
                <ListItemLink
                  key={drawerOptions.path}
                  icon={drawerOptions.icon}
                  to="/pagina-inicial"
                  label={drawerOptions.label}
                  onClick={toggleDrawerOpen}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height={"100vh"} marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
