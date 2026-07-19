export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to GAISB</h1>
      <p>This is your home page content.</p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
      </div>
    </main>
  );
}
