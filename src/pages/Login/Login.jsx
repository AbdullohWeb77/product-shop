import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // localStorage ga ma'lumotlarni saqlash
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Ochirib tashlash uchun maydonlarni tozalash
    setUsername('');
    setPassword('');
  };

  const handleValidation = () => {
    if (!username || !password) {
      alert('Iltimos toldiring! ❌');
    }
  };

  return (
    <div className='login'>
      <div className="login-con">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className='login-form'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={handleValidation} type="submit" className='submit'>Submit</button>
        <Link to='/new'><button className='submit login-go'>Go to  Add</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Login;