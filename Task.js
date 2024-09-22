import React, { useState } from "react";

const Task = ({ task, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleUpdate = () => {
    updateTask(editedTask);
    setIsEditing(false);
  };

  return (
    <li className={`priority-${task.priority.toLowerCase()}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTask.name}
            onChange={(e) =>
              setEditedTask({ ...editedTask, name: e.target.value })
            }
          />
          <input
            type="text"
            value={editedTask.assignedTo}
            onChange={(e) =>
              setEditedTask({ ...editedTask, assignedTo: e.target.value })
            }
          />
          <select
            value={editedTask.priority}
            onChange={(e) =>
              setEditedTask({ ...editedTask, priority: e.target.value })
            }
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input
            type="date"
            value={editedTask.dueDate}
            onChange={(e) =>
              setEditedTask({ ...editedTask, dueDate: e.target.value })
            }
          />
          <textarea
            value={editedTask.comment}
            onChange={(e) =>
              setEditedTask({ ...editedTask, comment: e.target.value })
            }
            placeholder="Comments"
          ></textarea>
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <span>{task.name}</span> - <strong>{task.assignedTo}</strong> -{" "}
          <em>{task.priority} Priority</em> - Due: {task.dueDate}
          <p>{task.comment}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default Task;
