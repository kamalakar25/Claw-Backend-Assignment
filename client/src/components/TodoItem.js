import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ title: todo.title, description: todo.description, status: todo.status });

  const handleSave = () => {
    updateTodo(todo._id, editedTodo);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input type="text" value={editedTodo.title} onChange={(e) => setEditedTodo({ ...editedTodo, title: e.target.value })} />
          {/* <input type="text" value={editedTodo.description} onChange={(e) => setEditedTodo({ ...editedTodo, description: e.target.value })} /> */}
          <select value={editedTodo.status} onChange={(e) => setEditedTodo({ ...editedTodo, status: e.target.value })}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className='todo-item-container'>
          {editedTodo.status === 'completed' ? (
            <h3 style={{textDecoration: 'line-through'}}>{todo.title}</h3>
          ) : (
            <h3 style={{textDecoration: 'none'}}>{todo.title}</h3>
          )}
          
          {/* <p>{todo.description}</p>
          <p>Status: {todo.status}</p> */}
          <div>
            <button onClick={() => setIsEditing(true)}><FaEdit /></button>
            <button onClick={() => deleteTodo(todo._id)}><RiDeleteBin6Line /></button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
