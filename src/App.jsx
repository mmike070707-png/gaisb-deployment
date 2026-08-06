import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import CandidateDashboard from './pages/CandidateDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import Home from './pages/Home';

function ProtectedRoute({ children, requiredType }) {
  const { user, userType, loading } = useAuth();

  if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>;

  if (!user) return <Navigate to="/login" />;

  if (requiredType && userType !== requiredType) return <Navigate to="/" />;

  return children;
}

function AppRoutes() {
  const { user, userType } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={user ? <Navigate to={userType === 'candidate' ? '/candidate' : '/employer'} /> : <Login />} />
      <Route path="/candidate" element={<ProtectedRoute requiredType="candidate"><CandidateDashboard /></ProtectedRoute>} />
      <Route path="/employer" element={<ProtectedRoute requiredType="employer"><EmployerDashboard /></ProtectedRoute>} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
// Force redeploy
