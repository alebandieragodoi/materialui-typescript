import { Environment } from "../../../environment";
import { Api } from "../../axios-config";

interface IAuth {
  accessToken: string;
}
const auth = async (
  email: string,
  password: string
): Promise<IAuth | Error> => {
  try {
    const { data } = await Api.get(Environment.URL_BASE + "/auth", {
      data: { email, password },
    });

    if (data) {
      return data[0];
    }

    return new Error("Erro no login.");
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || "Erro no login."
    );
  }
};

export const AuthService = {
  auth,
};
