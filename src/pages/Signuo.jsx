// Signup.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { saveUserData } from '../firebase/userService';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, password } = form;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await saveUserData(userCredential.user.uid, {
        name,
        phone,
        email,
        status: 'pending', // Admin will accept/reject
      });
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
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
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
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
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Sign Up
        </button>
        <p className="text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
