// MyRequests.jsx
import React, { useEffect, useState, useContext } from 'react';
import { db } from '../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
const MyRequests = () => {
  const { currentUser } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [helps, setHelps] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      if (!currentUser?.uid) return;

      const apptRef = query(collection(db, 'appointments'), where('userId', '==', currentUser.uid));
      const helpRef = query(collection(db, 'helpRequests'), where('userId', '==', currentUser.uid));

      const apptSnap = await getDocs(apptRef);
      const helpSnap = await getDocs(helpRef);

      setAppointments(apptSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setHelps(helpSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchRequests();
  }, [currentUser]);

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-6">
      <h2 className="text-xl font-bold">My Appointment Requests</h2>
      {appointments.map((item) => (
        <div key={item.id} className="p-3 border rounded shadow">
          <p><strong>Reason:</strong> {item.reason}</p>
          <p><strong>Date:</strong> {item.datetime}</p>
          <p><strong>Status:</strong> <span className="capitalize">{item.status}</span></p>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-8">My Help Requests</h2>
      {helps.map((item) => (
        <div key={item.id} className="p-3 border rounded shadow">
          <p><strong>Type:</strong> {item.type}</p>
          <p><strong>Description:</strong> {item.description}</p>
          <p><strong>Status:</strong> <span className="capitalize">{item.status}</span></p>
        </div>
      ))}
    </div>
  );
};

export default MyRequests;
