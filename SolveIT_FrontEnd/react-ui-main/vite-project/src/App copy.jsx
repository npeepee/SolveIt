import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { tasks } from "./data/tasks";
import TaskItem from "./todo-components/TaskItem";

//Todos we have Create Read Update Delete

function App() {
  const [currentTasks, setCurrentTasks] = useState(tasks);
  const [inputTask, setInputTask] = useState("");

  function handleClick() {
    setCurrentTasks([
      ...currentTasks,
      { id: currentTasks.length + 1, task: inputTask, isEditing: false },
    ]);
  }

  function handleDelete(id) {
    setCurrentTasks(
      currentTasks.filter((currentTasks) => currentTasks.id !== id),
    );
  }

  return (
    <>
      <h1>To Do App</h1>
      <p>Please add a task here</p>
      <input type="text" onChange={(e) => setInputTask(e.target.value)} />
      <button onClick={handleClick}>Add Task</button>
      <ul>
        {currentTasks.map(function (currentTask) {
          return (
            <>
              <li>{currentTask.task}</li>
              <button onClick={() => handleDelete(currentTask.id)}>X</button>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default App;
