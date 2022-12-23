import axios from "axios";
import { Environment } from "../../environment";
import { responseInterceptor, erroInterceptor } from "./interceptors";

const Api = axios.create({
  baseURL: Environment.URL_BASE,
  // headers: {
  //   Authorization: `Bearer ${JSON.parse(
  //     localStorage.getItem("APP_ACCESS_TOKEN") || ""
  //   )}`,
  //},
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => erroInterceptor(error)
);

export { Api };
