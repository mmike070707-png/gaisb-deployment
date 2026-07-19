import React from 'react';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1a1a1a' }}>GAISB</h1>
        <p style={{ fontSize: '1.2rem', color: '#4a4a4a' }}>
          Global AI Staffing & Benchmarking | Powered by Jason Styles
        </p>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>The Future of Staffing</h2>
        <p>
          Meet <strong>Jason Styles</strong>, your dedicated professional go-getter. 
          Whether you are a job seeker looking for your next role or an employer 
          posting openings, Jason handles the heavy lifting.
        </p>
        <p>
          We bridge the gap in the busiest top industries, ensuring you get the best 
          teams through our truth-centered, AI-driven verification process.
        </p>
      </section>

      <footer style={{ marginTop: '4rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
        <small>© 2026 GAISB — Infrastructure for the Future of Work</small>
      </footer>
    </main>
  );
}
