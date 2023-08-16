import React, {useContext} from "react";
import {adminUpdateRole} from "../api/auth/AdminUpdateRole.js";
import { AuthContext } from "../solveItComponents/AuthProvider";

export default function Admin() {
  const { user, login } = useContext(AuthContext);

  let component

  if (user) {
    component =
    <>
      <link rel="stylesheet" href="../css/styles.css" />
      <link rel="stylesheet" href="../css/Bootstrap.css" />
      <section className="content p-5 text-center">
        <p>Update User Role</p>

      </section>
    </>
  } else {
    component = <p>Not Authorized</p>
  }
  return (
    {component}
  );

      //let currentTime = new Date()

}
