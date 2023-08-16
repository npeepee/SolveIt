import { apiClient } from "../ApiClient";

export async function adminUpdateRole({ user_id, role }) {
    return await apiClient.post(`/auth/user/${user_id}`, {
        role: role,
    });
}
