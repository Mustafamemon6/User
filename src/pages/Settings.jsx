// Settings.jsx
import React, { useContext } from 'react';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Settings = () => {
    const { currentUser } = useAuth();
    const { userData } = useAuth();
  const { setCurrentUser, setUserData } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    setCurrentUser(null);
    setUserData(null);
    navigate('/login');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      <button onClick={handleLogout} className="btn w-full bg-red-600 text-white">Logout</button>
    </div>
  );
};

export default Settings;
