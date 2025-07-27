// RequestHelp.jsx
import React, { useContext, useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

const RequestHelp = () => {
    const { currentUser } = useAuth();
  const { userData } = useAuth();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    type: '',
    description: ''
  });

  useEffect(() => {
    if (userData) {
      setForm(prev => ({
        ...prev,
        name: userData.name || '',
        phone: userData.phone || ''
      }));
    }
  }, [userData]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'helpRequests'), {
        ...form,
        userId: currentUser.uid,
        status: 'pending',
        createdAt: new Date()
      });
      alert('Help request submitted');
      setForm({ ...form, type: '', description: '' });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Request Help</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={form.name} readOnly className="input" />
        <input type="text" name="phone" value={form.phone} readOnly className="input" />
        <select name="type" value={form.type} onChange={handleChange} className="input" required>
          <option value="">Type of Help</option>
          <option value="Food">Food</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </select>
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Describe your need..." className="input" required />
        <button type="submit" className="btn w-full bg-green-600 text-white">Submit</button>
      </form>
    </div>
  );
};

export const createHelpRequest = async (helpData) => {
  const res = await addDoc(collection(db, "helpRequests"), {
    ...helpData,
    status: "pending",
  });
  return res.id;
};


export default RequestHelp;
