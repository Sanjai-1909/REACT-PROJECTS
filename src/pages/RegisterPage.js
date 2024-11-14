import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';

const RegisterPage = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         setError('Passwords do not match');
         return;
      }

      try {
         await register({ email, password });
         navigate('/login');
      } catch (error) {
         setError('Registration failed. Please try again.');
      }
   };

   return (
      <div>
         <h2>Register</h2>
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
            <div>
               <label>Confirm Password:</label>
               <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
               />
            </div>
            <button type="submit">Register</button>
         </form>
      </div>
   );
};

export default RegisterPage;
