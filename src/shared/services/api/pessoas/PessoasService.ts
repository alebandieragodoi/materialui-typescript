import { Environment } from "../../../environment";
import { Api } from "../../axios-config";

export interface IListagemPessoa {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}
export interface IDetalhePessoa {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}

type TPessoasComTotalCount = {
  data: IDetalhePessoa[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter = ""
): Promise<TPessoasComTotalCount | Error> => {
  try {
    const urlRelativa =
      Environment.URL_BASE +
      `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(headers["x-total-count"] || data.length),
      };
    }

    return new Error("Erro ao listar os registros.");
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || "Erro ao listar os registros."
    );
  }
};

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
  try {
    const { data } = await Api.get(Environment.URL_BASE + `/pessoas/${id}`);

    if (data) {
      return data;
    }

    return new Error("Erro ao consultar os registros.");
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message ||
        "Erro ao consultar os registros."
    );
  }
};

const create = async (
  dados: Omit<IDetalhePessoa, "id">
): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IDetalhePessoa>(
      Environment.URL_BASE + "/pessoas",
      dados
    );

    if (data) {
      return data.id;
    }

    return new Error("Erro ao criar registro.");
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || "Erro ao criar registro."
    );
  }
};

const updateById = async (
  id: number,
  dados: IDetalhePessoa
): Promise<void | Error> => {
  try {
    await Api.put(Environment.URL_BASE + `/pessoas/${id}`, dados);
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || "Erro ao atualizar registro."
    );
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete(Environment.URL_BASE + `/pessoas/${id}`);
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || "Erro ao apagar registro."
    );
  }
};

export const PessoasService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
