import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../solveItComponents/AuthProvider";
import { fetchUsers, adminUpdateRole, adminDeleteUser } from "../api/auth/AdminUpdateRole";

export default function Admin() {
  const { user, login } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedUsers = await fetchUsers();
      console.log("Fetched users:", fetchedUsers);  // Debugging line
      setUsers(fetchedUsers);
    }
    fetchData();
  }, []);
  
  useEffect(() => {
    console.log("Current users:", users);  // Debugging line
  }, [users]);

  const handleRoleChange = async (userId, newRole) => {
    await adminUpdateRole(userId, newRole);
    // Update the users state to reflect the change
    setUsers(users.map(u => u.user_id === userId ? { ...u, role: newRole } : u));
  };

  const handleDelete = async (userId) => {
    if (user.user_id === userId) {
      alert('Admin cannot delete themselves.');
      return;
    }
    await adminDeleteUser(userId);
    // Update the users state to remove the user
    setUsers(users.filter(u => u.user_id !== userId));
  };

  if (!user || user.role !== 2) {
    return <p>Not Authorized</p>;
  }

  return (
    <>
      <link rel="stylesheet" href="../css/styles.css" />
      <link rel="stylesheet" href="../css/suka.css" />
      <section className="content p-5 text-center">
        <p>Update User Role</p>
        <table className="user-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.user_id}>
                <td>{user.user_id}</td>
                <td>{user.username}</td>
                <td>
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.user_id, e.target.value)}
                  >
                    <option value={1}>Normal User</option>
                    <option value={2}>Admin</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => handleDelete(user.user_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
