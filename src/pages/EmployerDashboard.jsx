import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import JasonStylesAI from '../components/JasonStylesAI';

function EmployerDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [applications] = useState([
    { id: 1, name: 'John Doe', position: 'Senior React Developer', status: 'Applied', date: '2024-08-01' },
    { id: 2, name: 'Jane Smith', position: 'Senior React Developer', status: 'Interview Scheduled', date: '2024-08-02' },
  ]);
  const [showJobForm, setShowJobForm] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handlePostJob = async (e) => {
    e.preventDefault();
    alert('Job posted! (Demo)');
    setJobTitle('');
    setJobDescription('');
    setShowJobForm(false);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div>
      <header className="header">
        <div className="nav-container">
          <a href="/" className="logo">GAISB</a>
          <nav className="nav-links">
            <span>Welcome, {user?.email}</span>
            <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', fontWeight: '600' }}>Logout</button>
          </nav>
        </div>
      </header>

      <div className="container">
        <h1>Employer Dashboard</h1>
        
        <section style={{ marginTop: '2rem' }}>
          <h2>Applications</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ background: '#f3f4f6' }}>
              <tr>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Position</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Status</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <tr key={app.id}>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>{app.name}</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>{app.position}</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>{app.status}</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
                    <button className="btn" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Review</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section style={{ marginTop: '3rem' }}>
          <h2>Tools</h2>
          <div className="grid">
            <div className="card">
              <h3>📝 Post Job</h3>
              <p>Create new job listings</p>
              <button className="btn" onClick={() => setShowJobForm(!showJobForm)}>
                {showJobForm ? 'Close' : 'Post Job'}
              </button>
            </div>
            <div className="card">
              <h3>🎥 Video Interviews</h3>
              <p>Schedule and conduct interviews</p>
              <button className="btn">Schedule Interview</button>
            </div>
            <div className="card">
              <h3>💬 Jason Styles AI</h3>
              <p>Get AI insights on candidates</p>
              <button className="btn">Chat with Jason (bottom right)</button>
            </div>
          </div>
        </section>

        {showJobForm && (
          <section style={{ marginTop: '2rem', padding: '2rem', background: '#f9fafb', borderRadius: '8px' }}>
            <h2>Post New Job</h2>
            <form onSubmit={handlePostJob}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Job Title</label>
                <input 
                  type="text" 
                  value={jobTitle} 
                  onChange={(e) => setJobTitle(e.target.value)} 
                  placeholder="e.g., Senior React Developer"
                  required
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} 
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Job Description</label>
                <textarea 
                  value={jobDescription} 
                  onChange={(e) => setJobDescription(e.target.value)} 
                  placeholder="Describe the job responsibilities and requirements..."
                  required
                  rows="6"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} 
                />
              </div>
              <button type="submit" className="btn">Post Job</button>
            </form>
          </section>
        )}
      </div>

      <footer>
        <p>&copy; 2024 GAISB. All rights reserved.</p>
      </footer>

      <JasonStylesAI />
    </div>
  );
}

export default EmployerDashboard;
