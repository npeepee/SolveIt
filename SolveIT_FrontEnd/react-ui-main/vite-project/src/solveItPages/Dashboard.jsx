import React, { useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState({});

  function handleClick() {
    //GET
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }

  return (
    <>
      <button onClick={handleClick}>Display Users</button>
      <p>{data.title}</p>
    </>
  );
}
