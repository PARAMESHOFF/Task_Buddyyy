function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available. Add some tasks!</p>
      ) : (
        tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <div>
              <p>{task.text}</p>
              <span className="priority">{task.priority}</span>
              <span className="category">{task.category}</span>
            </div>

            <div className="task-actions">
              <button
                className="complete-btn"
                onClick={() => toggleComplete(index)}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default TaskList;
