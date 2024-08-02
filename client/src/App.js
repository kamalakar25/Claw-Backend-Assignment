import React, { useEffect, useState } from 'react';
import "./App.css";
import Auth from './components/Auth';
import TodoList from './components/TodoList';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    }
  }, [token]);

  return (
    <div className="App">
      {!token ? (
        <Auth setToken={setToken} token={token} />
      ) : (
        <TodoList token={token} setToken={setToken} />
      )}
    </div>
  );
};

export default App;
