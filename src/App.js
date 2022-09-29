// CSS
import "./App.css";
// COMPONENTS
import Header from "./components/Header";
import TaskField from "./components/TaskField";
import TaskList from "./components/TaskList";
//USE STATE
import { useState } from "react";

function App() {
  const [tasksArray, setTasksArray] = useState([]);

  const addTaskToArray = (task) => {
    setTasksArray([...tasksArray, task]);
  };

  const deleteTaskFromArray = (taskToDelete) => {
    setTasksArray(tasksArray.filter((task) => task !== taskToDelete));
  };

  return (
    <div className="container">
      <Header></Header>
      <TaskField addTaskToArray={addTaskToArray}></TaskField>
      <TaskList
        tasksArray={tasksArray}
        deleteTaskFromArray={deleteTaskFromArray}
      ></TaskList>
    </div>
  );
}

export default App;
