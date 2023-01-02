import { Environment } from "../../../environment";
import { Api } from "../../axios-config";

export interface IListagemCidade {
  id: number;
  nome: string;
}

export interface IDetalheCidade {
  id: number;
  nome: string;
}

type TCidadesComTotalCount = {
  data: IDetalheCidade[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter = ""
): Promise<TCidadesComTotalCount | Error> => {
  try {
    const urlRelativa =
      Environment.URL_BASE +
      `/cidades?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nome_like=${filter}`;

    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      console.log(data);

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

const getById = async (id: number): Promise<IDetalheCidade | Error> => {
  try {
    const { data } = await Api.get(Environment.URL_BASE + `/cidades/${id}`);

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
  dados: Omit<IDetalheCidade, "id">
): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IDetalheCidade>(
      Environment.URL_BASE + "/cidades",
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
  dados: IDetalheCidade
): Promise<void | Error> => {
  try {
    await Api.put(Environment.URL_BASE + `/cidades/${id}`, dados);
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || "Erro ao atualizar registro."
    );
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete(Environment.URL_BASE + `/cidades/${id}`);
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || "Erro ao apagar registro."
    );
  }
};

export const CidadesService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
