import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getJobs, createApplication, createResume } from '../config/supabase';
import JasonStylesAI from '../components/JasonStylesAI';

function CandidateDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [resumeTitle, setResumeTitle] = useState('');
  const [resumeContent, setResumeContent] = useState('');
  const [showResumeBuilder, setShowResumeBuilder] = useState(false);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    const { data, error } = await getJobs();
    if (!error) setJobs(data || []);
  };

  const handleApplyJob = async (jobId) => {
    try {
      await createApplication(user.id, jobId);
      alert('Application submitted! Good luck!');
    } catch (err) {
      alert('Error applying: ' + err.message);
    }
  };

  const handleCreateResume = async (e) => {
    e.preventDefault();
    try {
      await createResume(user.id, resumeTitle, resumeContent);
      alert('Resume saved!');
      setResumeTitle('');
      setResumeContent('');
      setShowResumeBuilder(false);
    } catch (err) {
      alert('Error saving resume: ' + err.message);
    }
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
        <h1>Candidate Dashboard</h1>
        
        <section style={{ marginTop: '2rem' }}>
          <h2>Available Jobs</h2>
          {jobs.map(job => (
            <div key={job.id} className="card" style={{ marginBottom: '1rem' }}>
              <h3>{job.title}</h3>
              <p><strong>{job.company_name || 'Company'}</strong> • {job.level}</p>
              <p>{job.description}</p>
              <p><strong>${job.salary_min} - ${job.salary_max}</strong></p>
              <button className="btn" onClick={() => handleApplyJob(job.id)} style={{ marginTop: '1rem' }}>Apply Now</button>
            </div>
          ))}
        </section>

        <section style={{ marginTop: '3rem' }}>
          <h2>Tools</h2>
          <div className="grid">
            <div className="card">
              <h3>📄 Resume Builder</h3>
              <p>Create a professional resume</p>
              <button className="btn" onClick={() => setShowResumeBuilder(!showResumeBuilder)}>
                {showResumeBuilder ? 'Close' : 'Build Resume'}
              </button>
            </div>
            <div className="card">
              <h3>💬 Jason Styles AI</h3>
              <p>Get interview prep help</p>
              <button className="btn">Chat with Jason (bottom right)</button>
            </div>
          </div>
        </section>

        {showResumeBuilder && (
          <section style={{ marginTop: '2rem', padding: '2rem', background: '#f9fafb', borderRadius: '8px' }}>
            <h2>Create Resume</h2>
            <form onSubmit={handleCreateResume}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Resume Title</label>
                <input 
                  type="text" 
                  value={resumeTitle} 
                  onChange={(e) => setResumeTitle(e.target.value)} 
                  placeholder="e.g., Senior React Developer Resume"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} 
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Resume Content</label>
                <textarea 
                  value={resumeContent} 
                  onChange={(e) => setResumeContent(e.target.value)} 
                  placeholder="Paste your resume content here..."
                  rows="10"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'monospace' }} 
                />
              </div>
              <button type="submit" className="btn">Save Resume</button>
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

export default CandidateDashboard;
