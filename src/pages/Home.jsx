// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">
      <Link
        to="/book-appointment"
        className="w-full block text-center bg-blue-600 text-white py-3 rounded-lg"
      >
        Book Appointment
      </Link>
      <Link
        to="/request-help"
        className="w-full block text-center bg-green-600 text-white py-3 rounded-lg"
      >
        Request Help
      </Link>
      <Link
        to="/my-requests"
        className="w-full block text-center bg-purple-600 text-white py-3 rounded-lg"
      >
        My Requests
      </Link>
      <Link
        to="/profile"
        className="w-full block text-center bg-gray-700 text-white py-3 rounded-lg"
      >
        Profile
      </Link>
      <Link
        to="/settings"
        className="w-full block text-center bg-red-500 text-white py-3 rounded-lg"
      >
        Settings
      </Link>
    </div>
  );
};

export default Home;
