import axios from "axios";

const VITE_APP_API_URL = "http://localhost:8000/api/v1";

export const apiClient = axios.create({
  baseURL: VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
    }
    return Promise.reject(error);
  },
);

export const fetchUsers = async () => {
  try {
    const res = await apiClient.get('/auth/users');  // using apiClient instead of axios
    return res.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error("Couldn't fetch users");  // throwing an error to be caught by the caller
  }
};

export const adminUpdateRole = async (userId, newRole) => {
  try {
    const res = await apiClient.put(`/auth/update-role/${userId}`, { role: newRole });
    return res.data;
  } catch (error) {
    console.error('Error updating role:', error);
    throw new Error("Couldn't update role");
  }
};

export const adminDeleteUser = async (userId) => {
  try {
    const res = await apiClient.delete(`/auth/delete-user/${userId}`);
    return res.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw new Error("Couldn't delete user");
  }
};
