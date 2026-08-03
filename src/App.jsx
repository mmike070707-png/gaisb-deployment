import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <div className="nav-container">
          <a href="/" className="logo">GAISB</a>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Global AI Skills-Based Interviewing Platform</h1>
          <p>Transform how you hire and get hired with AI-powered skill assessments</p>
          <button className="btn" onClick={() => alert('Welcome to GAISB!')}>
            Get Started
          </button>
        </div>
      </section>

      <section className="container" id="features">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Why Choose GAISB?</h2>
        <div className="grid">
          <div className="card"><h3>🎯 Skill-Based Matching</h3><p>AI-powered assessment</p></div>
          <div className="card"><h3>⚡ Fast & Efficient</h3><p>Complete in minutes</p></div>
          <div className="card"><h3>🌍 Global Reach</h3><p>Connect worldwide</p></div>
          <div className="card"><h3>📊 Data-Driven</h3><p>Real-time insights</p></div>
          <div className="card"><h3>🔒 Professional</h3><p>Enterprise security</p></div>
          <div className="card"><h3>🤖 AI-Powered</h3><p>AI assistant</p></div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)', color: 'white', padding: '3rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Transform Your Hiring?</h2>
          <button className="btn" style={{ background: 'white', color: '#1e40af' }}>Start Free Trial</button>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 GAISB</p>
      </footer>
    </div>
  );
}

export default App;
