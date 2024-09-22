import React from "react";
import { Link } from "react-router-dom";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      <Link to="/create">Create New Task</Link>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Assigned To</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.assignedTo}</td>
              <td>{task.priority}</td>
              <td>{task.dueDate}</td>
              <td>{task.comment}</td>
              <td>
                <Link to={`/edit/${task.id}`}>Edit</Link>
                <Link to={`/delete/${task.id}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
