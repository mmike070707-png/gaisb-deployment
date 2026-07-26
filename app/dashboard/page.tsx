export default function EmployerDashboard() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-slate-700 tracking-wider">
          GAISB<span className="text-blue-400">.pro</span>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <a href="#" className="p-3 bg-blue-600 rounded-lg font-semibold shadow">Dashboard</a>
          <a href="#" className="p-3 hover:bg-slate-800 rounded-lg transition">Active Jobs</a>
          <a href="#" className="p-3 hover:bg-slate-800 rounded-lg transition">Candidates</a>
          <a href="#" className="p-3 hover:bg-slate-800 rounded-lg transition">Jason Styles Logs</a>
        </nav>
        <div className="p-4 border-t border-slate-700 text-sm text-slate-400">
          Logged in as: Employer
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold text-slate-800">Employer Overview</h1>
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-200 transition">
            + Post New Job
          </button>
        </header>

        {/* Dashboard Widgets */}
        <div className="p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-slate-500 text-sm font-medium mb-1">Active Job Postings</h3>
              <p className="text-3xl font-bold text-slate-800">12</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-slate-500 text-sm font-medium mb-1">Candidates Screened</h3>
              <p className="text-3xl font-bold text-slate-800">148</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-slate-500 text-sm font-medium mb-1">Interviews Pending Review</h3>
              <p className="text-3xl font-bold text-blue-600">7</p>
            </div>

          </div>

          {/* Recent Activity Table */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-lg font-semibold text-slate-800">Recent AI Screenings</h2>
            </div>
            <div className="p-6 text-slate-500 flex justify-center py-12">
              Database connection required to load candidates.
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
