import React, { useState } from "react";
import reactdom from 'react-dom'
function TodoApp() {
  // State to store tasks (array of objects)
  const [tasks, setTasks] = useState([]);

  // State for input fields
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (task && date && time) {
      const newTask = {
        id: Date.now(), // unique id

        task: task,
        date: date,
        time: time,
      };

      setTasks([...tasks, newTask]); // add to existing tasks
      alert("you are adding task");
      setTask(""); // clear input
      setDate("");
      setTime("");
    } else {
      alert("Please fill all fields");
    }
  };

  // Function to delete a task
  const deleteTask = (id) => {
    alert("ensure you are deleting this task");
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>To-Do App</h2>

      {/* Input Fields */}
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={styles.input}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={styles.input}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        style={styles.input}
      />
      <button onClick={addTask} style={styles.addButton}>Add Task</button>

      {/* Display Tasks */}
      <ul style={styles.list}>
        {tasks.map((t) => (
          <li key={t.id} style={styles.listItem}>
            <div>
              <strong>{t.task}</strong> <br />
              {t.date} at {t.time}
            </div>
            <button onClick={() => deleteTask(t.id)} style={styles.deleteButton}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Some inline CSS
const styles = {
  container: { textAlign: "center", padding: "20px" },
  input: { margin: "5px", padding: "5px" },
  addButton: { padding: "6px 12px", margin: "5px" },
  list: { listStyle: "none", padding: 0 },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
  deleteButton: { background: "red", color: "white", border: "none", padding: "5px" },
};

export default TodoApp;