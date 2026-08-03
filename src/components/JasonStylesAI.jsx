import React, { useState } from 'react';

export default function JasonStylesAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m Jason Styles, your AI career assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: input }]);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        'That\'s great! I can help you with interview prep, resume tips, or career advice.',
        'I can help you tailor your resume for this position and practice common interview questions.',
        'Based on your skills, I recommend focusing on projects that demonstrate full-stack capabilities.',
        'Here are some tips for your upcoming interview: Be specific about your achievements, use the STAR method.',
        'Would you like me to help you prepare answers for technical questions or behavioral questions?'
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
    }, 500);

    setInput('');
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
      fontFamily: 'inherit'
    }}>
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '60px',
          right: '0',
          width: '350px',
          height: '500px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 5px 40px rgba(0,0,0,0.16)',
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '10px'
        }}>
          <div style={{ background: '#1e40af', color: 'white', padding: '1rem', borderRadius: '12px 12px 0 0', fontWeight: '600' }}>
            Jason Styles AI 🤖
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', background: '#f9fafb' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                marginBottom: '1rem',
                textAlign: msg.role === 'user' ? 'right' : 'left'
              }}>
                <div style={{
                  display: 'inline-block',
                  maxWidth: '80%',
                  background: msg.role === 'user' ? '#1e40af' : '#e5e7eb',
                  color: msg.role === 'user' ? 'white' : '#1f2937',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem'
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: '1rem', borderTop: '1px solid #e5e7eb', display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Jason..."
              style={{
                flex: 1,
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem'
              }}
            />
            <button onClick={handleSend} style={{
              background: '#1e40af',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontWeight: '600'
            }}>
              Send
            </button>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: '#1e40af',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '28px',
        boxShadow: '0 4px 12px rgba(30, 64, 175, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        💬
      </button>
    </div>
  );
}
