import React, { useState } from 'react';
import { login, register } from '../api';

const Auth = ({ setToken, token }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = isLogin ? await login(email, password) : await register(email, password);
      setToken(response.data.token);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token'); // Optionally, remove token from localStorage
  };

  if (token) {
    return (
      <div>
        <h2>You are logged in</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='layout-container'>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='layout-container'>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className='space-button'>{isLogin ? 'Login' : 'Register'}</button>
        <button type="button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Switch to Register' : 'Switch to Login'}
        </button>
      </form>
    </div>
  );
};

export default Auth;
