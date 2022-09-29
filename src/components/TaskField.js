import { useState } from "react";

function TaskField({ addTaskToArray }) {
  const [task, setTask] = useState("");

  const changeTask = (e) => setTask(e.target.value);

  const submitTask = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      addTaskToArray(task);
      setTask("");
    } else {
      alert("Please input a task.");
    }
  };

  return (
    <div className="taskfield-wrapper">
      <form onSubmit={submitTask} className="TaskField-form_control">
        <label className="label">Input Task</label>
        <input
          value={task}
          onChange={changeTask}
          className="taskfield"
          type="text"
        ></input>
        <button className="taskfield-button">Save Task</button>
      </form>
    </div>
  );
}

export default TaskField;
