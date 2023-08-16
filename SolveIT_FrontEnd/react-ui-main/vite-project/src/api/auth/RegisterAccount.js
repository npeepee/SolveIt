import { apiClient } from "../ApiClient";

export async function registerAccount({ username, password, repeat_password }) {

  const passwordIsValid = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };
  
  
  if (Object.values(passwordIsValid).some((value) => value === false)) {
    throw new Error("The password is not valid. Please, ensure that it meets all the requirements.");
  }
  
  return await apiClient.post("/auth/create", {
    username: username,
    password: password,
    repeat_password: repeat_password,
  });
}
