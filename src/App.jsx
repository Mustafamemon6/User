import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signuo'
import Login from './pages/Login';
import Home from './pages/Home';
import BookAppointment from './pages/BookAppointment';
import RequestHelp from './pages/RequestHelp';
import MyRequests from './pages/MyRequests';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/book-appointment" element={<ProtectedRoute><BookAppointment /></ProtectedRoute>} />
          <Route path="/request-help" element={<ProtectedRoute><RequestHelp /></ProtectedRoute>} />
          <Route path="/my-requests" element={<ProtectedRoute><MyRequests /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />

          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
