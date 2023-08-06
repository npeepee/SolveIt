import ErrorPage from "../../solveItPages/ErrorPage";
import { apiClient } from "../ApiClient";

export async function LogIn({ username, password }) {
  if (username === undefined || password === undefined) {
    return ErrorPage;
  }
  return await apiClient.post("/auth/login", {
    username: username,
    password: password,
  });
}
