import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  DashBoard,
  ListagemDePessoas,
  DetalheDePessoas,
  ListagemDeCidades,
  DetalheDeCidades,
} from "../pages";
import { useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: "home",
        path: "/pagina-inicial",
        label: "Página inicial",
      },
      {
        icon: "location_city",
        path: "/cidades",
        label: "Cidades",
      },
      {
        icon: "people",
        path: "/pessoas",
        label: "Pessoas",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<DashBoard />} />

      <Route path="/pessoas" element={<ListagemDePessoas />} />
      <Route path="/pessoas/detalhe/:id" element={<DetalheDePessoas />} />

      <Route path="/cidades" element={<ListagemDeCidades />} />
      <Route path="/cidades/detalhe/:id" element={<DetalheDeCidades />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
