import React from 'react';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1a1a1a' }}>GAISB</h1>
        <p style={{ fontSize: '1.2rem', color: '#4a4a4a' }}>
          Global AI Staffing & Benchmarking
        </p>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Truth-Centered Hiring</h2>
        <p>
          Welcome to the 4HireAI module. We provide verified, data-driven insights 
          to match talent with opportunity, ensuring transparency in every step 
          of the staffing process.
        </p>
      </section>

      <footer style={{ marginTop: '4rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
        <small>© 2026 GAISB — Infrastructure for the Future of Work</small>
      </footer>
    </main>
  );
}
