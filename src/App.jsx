import React, { useState } from 'react';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Navigation Header */}
      <header className="bg-slate-950 border-b border-slate-800 p-4 flex justify-between items-center px-8 shadow-md">
        <div className="text-xl font-bold tracking-wider text-blue-400 cursor-pointer" onClick={() => setCurrentView('home')}>
          GAISB<span className="text-white">.pro</span>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setCurrentView('home')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${currentView === 'home' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
            Home
          </button>
          <button onClick={() => setCurrentView('chat')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${currentView === 'chat' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
            Jason Styles (Interviewer)
          </button>
          <button onClick={() => setCurrentView('dashboard')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${currentView === 'dashboard' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
            Employer Dashboard
          </button>
        </div>
      </header>

      {/* Main View Area */}
      <main className="flex-1 flex flex-col">
        {currentView === 'home' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Global AI Staffing & Benchmarking
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mb-8">
              The premier automated forensic-grade candidate screening and evaluation engine.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setCurrentView('chat')} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg transition">
                Meet Jason Styles
              </button>
              <button onClick={() => setCurrentView('dashboard')} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 shadow-lg transition">
                Employer Portal
              </button>
            </div>
          </div>
        )}

        {currentView === 'chat' && (
          <div className="flex-1 flex flex-col items-center p-8 max-w-4xl mx-auto w-full">
            <div className="w-full bg-slate-950 border border-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col h-[75vh]">
              <div className="bg-slate-900 p-4 border-b border-slate-800">
                <h2 className="text-lg font-bold text-white">Jason Styles</h2>
                <p className="text-xs text-blue-400">Senior AI Technical Recruiter</p>
              </div>
              <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl max-w-[80%] text-slate-200">
                  Hello! I'm Jason Styles. I'll be conducting your technical screening today. Are you ready to begin?
                </div>
              </div>
              <div className="p-4 border-t border-slate-800 bg-slate-950 flex gap-2">
                <input type="text" placeholder="Type your answer..." className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition">Send</button>
              </div>
            </div>
          </div>
        )}

        {currentView === 'dashboard' && (
          <div className="flex-1 p-8 max-w-7xl mx-auto w-full">
            <h1 className="text-2xl font-bold mb-6 text-white">Employer Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
                <p className="text-slate-400 text-sm">Active Job Postings</p>
                <p className="text-3xl font-extrabold text-white mt-1">12</p>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
                <p className="text-slate-400 text-sm">Candidates Screened</p>
                <p className="text-3xl font-extrabold text-white mt-1">148</p>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
                <p className="text-slate-400 text-sm">Pending Review</p>
                <p className="text-3xl font-extrabold text-blue-400 mt-1">7</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
