import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = "Novo",
  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
}) => {
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
      {mostrarBotaoSalvar && (
        <Button
          variant="contained"
          color="primary"
          disableElevation={true}
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvar}
        >
          Salvar
        </Button>
      )}
      {mostrarBotaoSalvarEFechar && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation={true}
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvarEFechar}
        >
          Salvar e voltar
        </Button>
      )}
      {mostrarBotaoApagar && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation={true}
          startIcon={<Icon>delete</Icon>}
          onClick={aoClicarEmApagar}
        >
          Apagar
        </Button>
      )}
      {mostrarBotaoNovo && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation={true}
          startIcon={<Icon>arrow_back</Icon>}
          onClick={aoClicarEmNovo}
        >
          {textoBotaoNovo}
        </Button>
      )}

      <Divider variant="middle" orientation="vertical" />

      {mostrarBotaoVoltar && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation={true}
          startIcon={<Icon>add</Icon>}
          onClick={aoClicarEmVoltar}
        >
          Voltar
        </Button>
      )}
    </Box>
  );
};
