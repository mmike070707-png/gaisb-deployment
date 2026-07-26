export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">
          Global AI Staffing & Benchmarking (GAISB)
        </h1>
        <p className="text-xl text-center mb-12 text-gray-700">
          Welcome to the future of hiring.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/chat" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Meet Jason Styles (Interviewer)
          </a>
          <a href="/dashboard" className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
            Employer Dashboard
          </a>
        </div>
      </div>
    </main>
  );
}
