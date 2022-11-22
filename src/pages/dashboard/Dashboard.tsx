import { BarraDeFerramentas } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const DashBoard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página inicial"
      barraDeFerramentas={
        <BarraDeFerramentas mostrarInputBusca textoBotaoNovo="Novo" />
      }
    >
      Testando
    </LayoutBaseDePagina>
  );
};
