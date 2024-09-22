import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState("");
  const [comment, setComment] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTasks, setSelectedTasks] = useState([]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      const task = {
        name: newTask,
        assignedTo: assignedTo,
        priority: priority,
        dueDate: dueDate,
        comment: comment,
        isComplete: false,
      };
      setTasks([...tasks, task]);
      setNewTask("");
      setAssignedTo("");
      setPriority("Low");
      setDueDate("");
      setComment("");
    }
  };

  const updateTask = (index) => {
    const updatedTask = prompt("Update the task:", tasks[index].name);
    if (updatedTask !== null) {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, name: updatedTask } : task
      );
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  const deleteSelectedTasks = () => {
    const remainingTasks = tasks.filter((_, index) => !selectedTasks.includes(index));
    setTasks(remainingTasks);
    setSelectedTasks([]);
  };

  const toggleTaskSelection = (index) => {
    if (selectedTasks.includes(index)) {
      setSelectedTasks(selectedTasks.filter((i) => i !== index));
    } else {
      setSelectedTasks([...selectedTasks, index]);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="todo-app">
      <h1> Todo List</h1>

      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Task Name"
        />
        <input
          type="text"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          placeholder="Assigned To"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <input
        type="text"
        placeholder="Search Tasks"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />

      <table className="task-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Task</th>
            <th>Assigned To</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Comment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks
            .filter((task) =>
              task.name.toLowerCase().includes(searchTerm)
            )
            .map((task, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedTasks.includes(index)}
                    onChange={() => toggleTaskSelection(index)}
                  />
                </td>
                <td>{task.name}</td>
                <td>{task.assignedTo}</td>
                <td className={`priority-${task.priority.toLowerCase()}`}>
                  {task.priority}
                </td>
                <td>{task.dueDate}</td>
                <td>{task.comment}</td>
                <td>
                  <button onClick={() => updateTask(index)}>Edit</button>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <button className="delete-selected" onClick={deleteSelectedTasks}>
        Delete
      </button>
    </div>
  );
};

export default App;
