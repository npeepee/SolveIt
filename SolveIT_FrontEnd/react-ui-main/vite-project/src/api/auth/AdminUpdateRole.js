import { apiClient } from "../ApiClient";

export async function adminUpdateRole({ user_id, role }) {
  return await apiClient.post(`/auth/user/${user_id}`, {
    role: role,
  });
}

export async function fetchUsers() {
  try {
    const res = await apiClient.get('/auth/users');
    return res.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

export async function adminDeleteUser(userId) {
  try {
    const res = await apiClient.delete(`/auth/user/${userId}`);
    return res.data;
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}
