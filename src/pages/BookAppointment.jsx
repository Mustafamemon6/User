// BookAppointment.jsx
import React, { useContext, useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import {  getDocs } from "firebase/firestore";


const BookAppointment = () => {
    const { currentUser } = useAuth();
  const { userData } = useAuth();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    reason: '',
    datetime: ''
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
      await addDoc(collection(db, 'appointments'), {
        ...form,
        userId: currentUser.uid,
        status: 'pending',
        createdAt: new Date()
      });
      alert('Appointment request submitted');
      setForm({ ...form, reason: '', datetime: '' });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Book Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={form.name} readOnly className="input" />
        <input type="text" name="phone" value={form.phone} readOnly className="input" />
        <input type="text" name="reason" value={form.reason} onChange={handleChange} placeholder="Reason" className="input" required />
        <input type="datetime-local" name="datetime" value={form.datetime} onChange={handleChange} className="input" required />
        <button type="submit" className="btn w-full bg-blue-600 text-white">Submit</button>
      </form>
    </div>
  );
};


export const createAppointment = async (appointmentData) => {
  const res = await addDoc(collection(db, "appointments"), {
    ...appointmentData,
    status: "pending",
    datetime: new Date(appointmentData.datetime).toISOString(),
  });
  return res.id;
};

export default BookAppointment;
