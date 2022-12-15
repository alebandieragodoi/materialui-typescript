import { Form } from "@unform/web";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FerramentasDeDetalhe } from "../../shared/components";
import { VTextField } from "../../shared/forms";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";

export const DetalheDePessoas: React.FC = () => {
  const { id } = useParams<"id">();

  const navigate = useNavigate();

  const handleSave = () => {
    console.log("save");
  };

  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState("");

  useEffect(() => {
    if (id !== "nova") {
      setIsLoading(true);

      PessoasService.getById(Number(id)).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
          navigate("/pessoas");
        } else {
          setNome(result.nomeCompleto);
          console.log(result);
        }
      });
    }
  }, [id]);

  const handleDelete = (id: number) => {
    if (window.confirm("Confirma exclusão do registro?")) {
      PessoasService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          alert("Registro apagado com sucesso.");
          navigate("/pessoas");
        }
      });
    }
  };

  return (
    <LayoutBaseDePagina
      titulo={id == "nova" ? "Nova pessoa" : nome}
      barraDeFerramentas={
        <FerramentasDeDetalhe
          textoBotaoNovo="Nova"
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo={id !== "nova"}
          mostrarBotaoApagar={id !== "nova"}
          aoClicarEmSalvar={handleSave}
          aoClicarEmSalvarEFechar={handleSave}
          aoClicarEmApagar={() => handleDelete(Number(id))}
          aoClicarEmNovo={() => navigate("/pessoas/detalhe/nova")}
          aoClicarEmVoltar={() => navigate("/pessoas")}
        ></FerramentasDeDetalhe>
      }
    >
      {/* {isLoading && <LinearProgress variant="indeterminate" />}
      Detalhe */}

      <Form onSubmit={(dados) => console.log(dados)}>
        <VTextField name="nomeCompleto" />

        <button type="submit">submit</button>
      </Form>
    </LayoutBaseDePagina>
  );
};
