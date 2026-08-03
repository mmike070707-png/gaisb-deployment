import React from 'react';
import { Link } from 'react-router-dom';
import JasonStylesAI from '../components/JasonStylesAI';

function Home() {
  return (
    <div>
      <header className="header">
        <div className="nav-container">
          <a href="/" className="logo">GAISB</a>
          <nav className="nav-links">
            <Link to="/login" style={{ color: '#1e40af', fontWeight: '500' }}>Login</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Global AI Skills-Based Interviewing Platform</h1>
          <p>Transform how you hire and get hired with AI-powered skill assessments</p>
          <Link to="/login" className="btn" style={{ display: 'inline-block' }}>
            Get Started
          </Link>
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

      <footer>
        <p>&copy; 2024 GAISB. All rights reserved.</p>
      </footer>

      <JasonStylesAI />
    </div>
  );
}

export default Home;
