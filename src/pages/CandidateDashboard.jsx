import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function CandidateDashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <header className="header">
        <div className="nav-container">
          <a href="/" className="logo">GAISB</a>
          <nav className="nav-links">
            <a href="#jobs">Browse Jobs</a>
            <a href="#resume">Resume Builder</a>
            <button onClick={logout} style={{ background: 'none', color: '#dc2626', cursor: 'pointer', border: 'none', fontSize: '1rem', fontWeight: '500' }}>Logout</button>
          </nav>
        </div>
      </header>
      <div className="container" style={{ marginTop: '30px' }}>
        <h1>Welcome, {user?.email}!</h1>
        <p style={{ fontSize: '1.1rem', color: '#6b7280' }}>Candidate Dashboard</p>
        <div className="grid" style={{ marginTop: '30px' }}>
          <div className="card"><h3>🎯 Find Jobs</h3><p>Browse available jobs</p><button className="btn btn-primary">View Jobs</button></div>
          <div className="card"><h3>📄 Build Resume</h3><p>Create your resume</p><button className="btn btn-primary">Build Resume</button></div>
          <div className="card"><h3>🎬 Interview Prep</h3><p>Practice with Jason AI</p><button className="btn btn-primary">Practice</button></div>
          <div className="card"><h3>📊 Applications</h3><p>Track applications</p><button className="btn btn-primary">View</button></div>
        </div>
      </div>
    </div>
  );
}
