import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, editingTask, onUpdate }) => {
  const [taskText, setTaskText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (editingTask) {
      setTaskText(editingTask.text);
      setIsComplete(editingTask.isComplete);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { text: taskText, isComplete };
    if (editingTask) {
      onUpdate({ ...task, id: editingTask.id });
    } else {
      onSubmit(task);
    }
    setTaskText("");
    setIsComplete(false);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        required
      />
      <label>
        <input
          type="checkbox"
          checked={isComplete}
          onChange={(e) => setIsComplete(e.target.checked)}
        />
        Completed
      </label>
      <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
