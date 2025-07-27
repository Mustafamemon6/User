// Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const docSnap = await getDoc(doc(db, 'users', userCred.user.uid));
      if (docSnap.exists() && docSnap.data().status === 'accept') {
        navigate('/');
      } else {
        alert('Your account is pending approval by admin.');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg">
          Login
        </button>
        <p className="text-sm text-center">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-green-500 underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
