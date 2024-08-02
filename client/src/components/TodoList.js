import React, { useEffect, useState } from 'react';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../api';
import TodoItem from './TodoItem';

const TodoList = ({ token, setToken }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos(token);
        setTodos(response.data);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          // Token is invalid or expired
          setToken('');
          localStorage.removeItem('token');
        }
        setError(err.response.data.error);
      }
    };
    fetchTodos();
  }, [token, setToken]);

  const handleCreateTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await createTodo(token, newTodo);
      setTodos([...todos, response.data]);
      setNewTodo({ title: '', description: '' });
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setToken('');
        localStorage.removeItem('token');
      }
      setError(err.response.data.error);
    }
  };

  const handleUpdateTodo = async (id, updatedTodo) => {
    try {
      const response = await updateTodo(token, id, updatedTodo);
      setTodos(todos.map(todo => todo._id === id ? response.data : todo));
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setToken('');
        localStorage.removeItem('token');
      }
      setError(err.response.data.error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(token, id);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setToken('');
        localStorage.removeItem('token');
      }
      setError(err.response.data.error);
    }
  };

  return (
    <div className='todo-container'>
      <h2>Todo List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleCreateTodo} className='todo-form-container'>
        <input type="text" placeholder="Task" value={newTodo.title} onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })} required />
        {/* <input type="text" placeholder="Description" value={newTodo.description} onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })} /> */}
        <button type="submit" className='add-button'>Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} updateTodo={handleUpdateTodo} deleteTodo={handleDeleteTodo} />
        ))}
      </ul>
      <button onClick={() => { setToken(''); localStorage.removeItem('token'); }}>Logout</button>
    </div>
  );
};

export default TodoList;
