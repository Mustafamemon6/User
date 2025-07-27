// Profile.jsx
import React, { useContext } from 'react';
import { useAuth } from '../context/AuthContext';
const Profile = () => {
  const { userData } = useAuth();
  const { currentUser } = useAuth();
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>
      {userData ? (
        <div className="space-y-3 text-sm">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
          <p><strong>Status:</strong> <span className="capitalize">{userData.status}</span></p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
