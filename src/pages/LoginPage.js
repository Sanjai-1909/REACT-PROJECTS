import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const LoginPage = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await login({ email, password });
         // Redirect to dashboard on successful login
         navigate('/dashboard');
      } catch (error) {
         setError('Login failed. Please try again.');
      }
   };

   return (
      <div>
         <h2>Login</h2>
         {error && <p style={{ color: 'red' }}>{error}</p>}
         <form onSubmit={handleSubmit}>
            <div>
               <label>Email:</label>
               <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
            </div>
            <div>
               <label>Password:</label>
               <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
               />
            </div>
            <button type="submit">Login</button>
         </form>
      </div>
   );
};

export default LoginPage;
