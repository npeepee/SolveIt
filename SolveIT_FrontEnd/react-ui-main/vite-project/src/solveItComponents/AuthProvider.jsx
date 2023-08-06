import {
  createContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { LogIn } from "../api/auth/LogIn";
import { registerAccount } from "../api/auth/RegisterAccount";

export const AuthContext = createContext({
  user: null,
  isLoading: true,
  login: async () => {},
  logout: () => {},
  updateUser: () => {},
  registerUserAccount: async () => 0,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async ({ username, password }) => {
    try {
      const response = await LogIn({ username, password });
      const { data, access_token } = response.data;
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("access_token", access_token);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const registerUserAccount = useCallback(
    async ({ username, password, repeat_password }) => {
      const response = await registerAccount({
        username,
        password,
        repeat_password,
      });
      const user = response.data;
      setUser(user.data);
      localStorage.setItem("user", JSON.stringify(user.data));
      localStorage.setItem("access_token", user.access_token);
      return response.status;
    },
    [],
  );

  const providerValue = useMemo(
    () => ({
      user,
      isLoading,
      login,
      logout,
      updateUser,
      registerUserAccount,
    }),
    [user, isLoading, login, logout, updateUser, registerUserAccount],
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {!isLoading ? children : "Loading..."}
    </AuthContext.Provider>
  );
};
