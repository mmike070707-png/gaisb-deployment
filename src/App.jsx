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
          <button className="btn" onClick={() => alert('🎉 Welcome to GAISB!\n\n✅ Professional Design\n✅ Blue Gradient Hero\n✅ Feature Cards\n✅ Responsive Layout')}>
            Get Started
          </button>
        </div>
      </section>

      <section className="container" id="features">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Why Choose GAISB?</h2>
        <div className="grid">
          <div className="card"><h3>🎯 Skill-Based Matching</h3><p>AI-powered assessment matches candidates with perfect job fits</p></div>
          <div className="card"><h3>⚡ Fast & Efficient</h3><p>Complete interviews in minutes, not hours</p></div>
          <div className="card"><h3>🌍 Global Reach</h3><p>Connect with top talent worldwide</p></div>
          <div className="card"><h3>📊 Data-Driven</h3><p>Real-time analytics and insights for better hiring</p></div>
          <div className="card"><h3>🔒 Professional</h3><p>Enterprise-grade security and compliance</p></div>
          <div className="card"><h3>🤖 AI-Powered</h3><p>Jason Styles AI assistant guides every step</p></div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)', color: 'white', padding: '3rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Transform Your Hiring?</h2>
          <p style={{ marginBottom: '2rem' }}>Join thousands of companies using GAISB</p>
          <button className="btn" style={{ background: 'white', color: '#1e40af' }}>Start Free Trial</button>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 GAISB. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
