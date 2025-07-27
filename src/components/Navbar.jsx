// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, CalendarPlus, LifeBuoy, ListChecks, User } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: <Home size={20} /> },
  { path: '/book-appointment', label: 'Appointment', icon: <CalendarPlus size={20} /> },
  { path: '/request-help', label: 'Help', icon: <LifeBuoy size={20} /> },
  { path: '/my-requests', label: 'Requests', icon: <ListChecks size={20} /> },
  { path: '/profile', label: 'Profile', icon: <User size={20} /> },
];

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t shadow-sm z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-500'
              }`
            }
          >
            {item.icon}
            <span className="mt-1">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
