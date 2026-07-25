import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    { sender: 'Jason', text: "Hello! I'm Jason Styles, your virtual staffing assistant. Are you looking to hire top talent or find your next career opportunity today?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'You', text: input };
    setMessages(prev => [...prev, userMessage]);
    const query = input;
    setInput('');

    setTimeout(() => {
      let reply = "I'm here to help streamline your staffing and benchmarking needs. Would you like to check available talent or submit a job opening?";
      const lower = query.toLowerCase();
      if (lower.includes('hire') || lower.includes('employer') || lower.includes('job')) {
        reply = "Wonderful! As an employer, I can help you benchmark top candidates instantly through our verification pipeline.";
      } else if (lower.includes('work') || lower.includes('seeker') || lower.includes('apply')) {
        reply = "Excellent! Let's get your profile benchmarked so top employers can find you right away.";
      }
      setMessages(prev => [...prev, { sender: 'Jason', text: reply }]);
    }, 1000);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100vh)', color: '#fff', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <header style={{ padding: '20px 40px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>GAISB</h1>
        <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Global AI Staffing & Benchmarking</span>
      </header>

      <main style={{ maxWidth: '800px', width: '100%', margin: '0 auto', padding: '40px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <span style={{ background: '#3b82f6', color: '#fff', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>Powered by Jason Styles</span>
          <h2 style={{ fontSize: '2.5rem', margin: '15px 0 10px 0' }}>The Future of Staffing</h2>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>Meet Jason Styles, your dedicated professional go-getter. Whether you are a job seeker looking for your next role or an employer posting openings, Jason handles the heavy lifting.</p>
        </div>

        <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', height: '350px' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', color: '#60a5fa' }}>Chat with Jason Styles</div>
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '15px', paddingRight: '5px' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ alignSelf: msg.sender === 'You' ? 'flex-end' : 'flex-start', background: msg.sender === 'You' ? '#2563eb' : '#334155', padding: '10px 16px', borderRadius: '8px', maxWidth: '75%', fontSize: '0.95rem' }}>
                <strong style={{ display: 'block', fontSize: '0.75rem', marginBottom: '3px', opacity: 0.8 }}>{msg.sender}</strong>
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} style={{ display: 'flex', gap: '10px' }}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message to Jason..." style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #475569', background: '#1e293b', color: '#fff', outline: 'none' }} />
            <button type="submit" style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '0 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Send</button>
          </form>
        </div>
      </main>

      <footer style={{ padding: '20px 40px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem' }}>
        © 2026 GAISB — Infrastructure for the Future of Work
      </footer>
    </div>
  );
}

export default App;
