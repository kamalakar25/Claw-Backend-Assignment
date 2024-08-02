import axios from 'axios';

const API_URL = 'https://claw-backend-assignment.onrender.com/api'; //'http://localhost:5000/api';

const register = (email, password) => axios.post(`${API_URL}/auth/register`, { email, password });
const login = (email, password) => axios.post(`${API_URL}/auth/login`, { email, password });
const createTodo = (token, todo) => axios.post(`${API_URL}/todos`, todo, { headers: { Authorization: `Bearer ${token}` } });
const getTodos = (token) => axios.get(`${API_URL}/todos`, { headers: { Authorization: `Bearer ${token}` } });
const updateTodo = (token, id, todo) => axios.put(`${API_URL}/todos/${id}`, todo, { headers: { Authorization: `Bearer ${token}` } });
const deleteTodo = (token, id) => axios.delete(`${API_URL}/todos/${id}`, { headers: { Authorization: `Bearer ${token}` } });

export { createTodo, deleteTodo, getTodos, login, register, updateTodo };

