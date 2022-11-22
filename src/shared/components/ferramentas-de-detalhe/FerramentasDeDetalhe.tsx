import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

export const FerramentasDeDetalhe: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}
    >
      <Button
        variant="contained"
        color="primary"
        disableElevation={true}
        startIcon={<Icon>save</Icon>}
      >
        Salvar
      </Button>

      <Button
        variant="outlined"
        color="primary"
        disableElevation={true}
        startIcon={<Icon>save</Icon>}
      >
        Salvar e voltar
      </Button>

      <Button
        variant="outlined"
        color="primary"
        disableElevation={true}
        startIcon={<Icon>delete</Icon>}
      >
        Apagar
      </Button>

      <Button
        variant="outlined"
        color="primary"
        disableElevation={true}
        startIcon={<Icon>arrow_back</Icon>}
      >
        Novo
      </Button>

      <Divider variant="middle" orientation="vertical" />

      <Button
        variant="outlined"
        color="primary"
        disableElevation={true}
        startIcon={<Icon>add</Icon>}
      >
        Voltar
      </Button>
    </Box>
  );
};
