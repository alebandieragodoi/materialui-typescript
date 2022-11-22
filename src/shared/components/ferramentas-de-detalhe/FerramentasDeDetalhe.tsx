import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = "Novo",

  mostrarBotaoNovo = false,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
}) => {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

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
      {mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando && (
        <Button
          variant="contained"
          color="primary"
          disableElevation={true}
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvar}
        >
          <Typography
            variant="button"
            textOverflow={"ellipsis"}
            overflow="hidden"
            whiteSpace={"nowrap"}
          >
            Salvar
          </Typography>
        </Button>
      )}

      {mostrarBotaoSalvarCarregando && <Skeleton width={110} height={60} />}

      {mostrarBotaoSalvarEFechar &&
        !mostrarBotaoSalvarEFecharCarregando &&
        !smDown &&
        !mdDown && (
          <Button
            variant="outlined"
            color="primary"
            disableElevation={true}
            startIcon={<Icon>save</Icon>}
            onClick={aoClicarEmSalvarEFechar}
          >
            <Typography
              variant="button"
              textOverflow={"ellipsis"}
              overflow="hidden"
              whiteSpace={"nowrap"}
            >
              Salvar e fechar
            </Typography>
          </Button>
        )}

      {mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown && (
        <Skeleton width={180} height={60} />
      )}

      {mostrarBotaoApagar && !mostrarBotaoApagarCarregando && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation={true}
          startIcon={<Icon>delete</Icon>}
          onClick={aoClicarEmApagar}
        >
          <Typography
            variant="button"
            textOverflow={"ellipsis"}
            overflow="hidden"
            whiteSpace={"nowrap"}
          >
            Apagar
          </Typography>
        </Button>
      )}

      {mostrarBotaoApagarCarregando && <Skeleton width={110} height={60} />}

      {mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation={true}
          startIcon={<Icon>add</Icon>}
          onClick={aoClicarEmNovo}
        >
          <Typography
            variant="button"
            textOverflow={"ellipsis"}
            overflow="hidden"
            whiteSpace={"nowrap"}
          >
            {textoBotaoNovo}
          </Typography>
        </Button>
      )}

      {mostrarBotaoNovoCarregando && !smDown && (
        <Skeleton width={110} height={60} />
      )}

      {mostrarBotaoVoltar &&
        (mostrarBotaoNovo ||
          mostrarBotaoApagar ||
          mostrarBotaoSalvar ||
          mostrarBotaoSalvarEFechar) && (
          <Divider variant="middle" orientation="vertical" />
        )}

      {mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation={true}
          startIcon={<Icon>arrow_back</Icon>}
          onClick={aoClicarEmVoltar}
        >
          <Typography
            variant="button"
            textOverflow={"ellipsis"}
            overflow="hidden"
            whiteSpace={"nowrap"}
          >
            Voltar
          </Typography>
        </Button>
      )}

      {mostrarBotaoVoltarCarregando && <Skeleton width={110} height={60} />}
    </Box>
  );
};
