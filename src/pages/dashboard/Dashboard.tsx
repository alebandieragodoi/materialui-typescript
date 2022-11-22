import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const DashBoard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página inicial"
      barraDeFerramentas={
        <FerramentasDaListagem mostrarInputBusca textoBotaoNovo="Novo" />
      }
    >
      Testando
    </LayoutBaseDePagina>
  );
};
