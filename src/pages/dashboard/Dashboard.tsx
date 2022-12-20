import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { FerramentasDaListagem } from "../../shared/components/ferramentas-da-listagem/FerramentasDaListagem";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { useEffect, useState } from "react";
import { CidadesService } from "../../shared/services/api/cidades/CidadesService";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";

export const DashBoard = () => {
  const [isLoadingCidades, setisLoadingCidades] = useState(true);
  const [TotalCountCidades, setTotalCountCidades] = useState(0);

  const [isLoadingPessoas, setisLoadingPessoas] = useState(true);
  const [TotalCountPessoas, setTotalCountPessoas] = useState(0);

  useEffect(() => {
    setisLoadingCidades(true);
    setisLoadingPessoas(true);

    CidadesService.getAll(1).then((result) => {
      setisLoadingCidades(false);

      if (result instanceof Error) {
        alert(result.message);
      } else {
        setTotalCountCidades(result.totalCount);
      }
    });

    PessoasService.getAll(1).then((result) => {
      setisLoadingPessoas(false);

      if (result instanceof Error) {
        alert(result.message);
      } else {
        setTotalCountPessoas(result.totalCount);
      }
    });
  }, []);

  return (
    <LayoutBaseDePagina
      titulo="Página inicial"
      barraDeFerramentas={<FerramentasDaListagem mostrarBotaoNovo={false} />}
    >
      <Box width="100%" display="flex">
        <Grid container margin={1}>
          <Grid item container spacing={1}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">
                    Total de cidades
                  </Typography>

                  <Box
                    padding={6}
                    display="flex"
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    {!isLoadingCidades && (
                      <Typography variant="h1">{TotalCountCidades}</Typography>
                    )}

                    {isLoadingCidades && (
                      <Typography variant="h6">Carregando...</Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">
                    Total de pessoas
                  </Typography>

                  <Box
                    padding={6}
                    display="flex"
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    {!isLoadingPessoas && (
                      <Typography variant="h1">{TotalCountPessoas}</Typography>
                    )}

                    {isLoadingPessoas && (
                      <Typography variant="h6">Carregando...</Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </LayoutBaseDePagina>
  );
};
