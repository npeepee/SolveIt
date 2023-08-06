import { apiClient } from "../ApiClient";

export async function registerAccount({ username, password, repeat_password }) {
  return await apiClient.post("/auth/create", {
    username: username,
    password: password,
    repeat_password: repeat_password,
  });
}
