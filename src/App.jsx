import React, { useState, useEffect } from 'react';
import './App.css';
import LoginWrapper from './components/LoginWrapper';

const demoJobs = [
  { id: 1, title: 'Senior React Developer', company: 'Apex Innovations', location: 'Remote', pay: '$140k - $170k' },
  { id: 2, title: 'AI Integration Specialist', company: 'Neural Systems', location: 'NY, NY', pay: '$150k - $190k' }
];

function ApplicantDashboard({ email, onLogout }) {
  return (
    <div className="container p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Applicant Job Reel</h1>
        <div>
          <span className="mr-4 text-sm text-gray-600">{email}</span>
          <button onClick={onLogout} className="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
        </div>
      </div>

      <div className="grid gap-4">
        {demoJobs.map(job => (
          <div key={job.id} className="p-4 border rounded">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-green-600 font-semibold">{job.pay}</span>
              <button className="px-3 py-1 bg-blue-600 text-white rounded">Apply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmployerDashboard({ email, onLogout }) {
  return (
    <div className="container p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Employer Dashboard</h1>
        <div>
          <span className="mr-4 text-sm text-gray-600">{email}</span>
          <button onClick={onLogout} className="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
        </div>
      </div>
      <div>
        <p className="text-gray-700">Post jobs, view applicants, and manage pipelines (demo).</p>
      </div>
    </div>
  );
}

function Home({ onOpenLogin }) {
  return (
    <div className="container p-8">
      <h1 className="text-4xl font-bold mb-4">GAISB</h1>
      <p className="mb-6">Global AI Skills-Based Interviewing Platform</p>
      <button onClick={onOpenLogin} className="px-6 py-3 bg-blue-600 text-white rounded">Login / Sign Up</button>
    </div>
  );
}

export default function App() {
  const [authRole, setAuthRole] = useState(null); // 'applicant' | 'employer' | 'admin' | null
  const [authEmail, setAuthEmail] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    // load token if previously saved
    const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('authRole');
    const email = localStorage.getItem('authEmail');
    if (token && role) {
      setAuthToken(token);
      setAuthRole(role);
      setAuthEmail(email);
    }
  }, []);

  const handleLoginSuccess = (role, email, token) => {
    setAuthRole(role);
    setAuthEmail(email);
    setAuthToken(token);
    if (token) localStorage.setItem('authToken', token);
    if (role) localStorage.setItem('authRole', role);
    if (email) localStorage.setItem('authEmail', email);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setAuthRole(null);
    setAuthEmail(null);
    setAuthToken(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('authRole');
    localStorage.removeItem('authEmail');
  };

  return (
    <div>
      <header className="header p-4 border-b">
        <div className="container flex justify-between">
          <a href="/" className="logo font-bold">GAISB</a>
          <div>
            {authRole ? (
              <button onClick={handleLogout} className="px-3 py-1 bg-red-500 text-white rounded">Logout</button>
            ) : (
              <button onClick={() => setShowLogin(true)} className="px-3 py-1 bg-blue-600 text-white rounded">Login</button>
            )}
          </div>
        </div>
      </header>

      <main>
        {!authRole && <Home onOpenLogin={() => setShowLogin(true)} />}
        {authRole === 'applicant' && <ApplicantDashboard email={authEmail} onLogout={handleLogout} />}
        {authRole === 'employer' && <EmployerDashboard email={authEmail} onLogout={handleLogout} />}
        {authRole === 'admin' && (
          <div className="container p-8">
            <h1>Admin Dashboard (demo)</h1>
            <button onClick={handleLogout} className="px-3 py-1 bg-red-500 text-white rounded mt-4">Logout</button>
          </div>
        )}
      </main>

      {showLogin && <LoginWrapper onLoginSuccess={handleLoginSuccess} onSwitchToSignUp={() => { alert('Sign up flow (not implemented)'); }} />}
    </div>
  );
}
