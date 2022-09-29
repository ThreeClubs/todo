function TaskList({ tasksArray, deleteTaskFromArray }) {
  return (
    <div className="tasklist-wrapper">
      <h2 className="tasklist-heading">Task List</h2>
      <div className="tasklist">
        {tasksArray.map((task, index) => (
          <h3 key={index} className="Tasklist-task">
            {index + 1}. {task}
            <button
              className="list-btn"
              onClick={() => deleteTaskFromArray(task)}
            >
              X
            </button>
          </h3>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
