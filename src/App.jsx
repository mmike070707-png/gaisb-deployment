import React, { useState } from 'react';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [profilePic, setProfilePic] = useState(null);
  const [userName, setUserName] = useState('Alex Morgan');
  const [userEmail, setUserEmail] = useState('alex.morgan@example.com');
  const [resumeData, setResumeData] = useState({
    summary: 'Experienced full-stack engineer specializing in React and modern web architectures.',
    experience: 'Senior Developer at TechCorp (2022-Present)\n- Built scalable front-end components using React and Tailwind CSS.',
    skills: 'React, JavaScript, Tailwind CSS, Node.js, Git'
  });
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Senior React Developer', company: 'Apex Innovations', location: 'Remote', pay: '$140k - $170k', description: 'Looking for an experienced React engineer to lead our frontend architecture.' },
    { id: 2, title: 'AI Integration Specialist', company: 'Neural Systems', location: 'New York, NY', pay: '$150k - $190k', description: 'Develop intelligent agent integrations and automated screening pipelines.' },
    { id: 3, title: 'Full Stack Engineer', company: 'CloudScale Global', location: 'Austin, TX', pay: '$120k - $150k', description: 'Build and maintain cloud infrastructure dashboards and secure user portals.' }
  ]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'jason', text: "Hello! I'm Jason Styles. I'll be helping you build and optimize your resume today. What specific role are you targeting?" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [subscriptionActive, setSubscriptionActive] = useState(true);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApply = (job) => {
    if (!appliedJobs.some(j => j.id === job.id)) {
      setAppliedJobs([...appliedJobs, job]);
      alert(`Successfully applied to ${job.title} at ${job.company}!`);
    } else {
      alert(`You have already applied to ${job.title}.`);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessages = [...chatMessages, { sender: 'user', text: inputMessage }];
    setChatMessages(newMessages);
    setInputMessage('');

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { 
          sender: 'jason', 
          text: `That's a strong point for your resume summary. Let's make sure your experience highlights quantifiable impact for that objective.` 
        }
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Navigation Header */}
      <header className="bg-slate-950 border-b border-slate-800 p-4 flex justify-between items-center px-8 shadow-md">
        <div className="text-xl font-bold tracking-wider text-blue-400 cursor-pointer flex items-center gap-3" onClick={() => setCurrentView('home')}>
          {profilePic && <img src={profilePic} alt="Profile" className="w-8 h-8 rounded-full object-cover border border-blue-500" />}
          GAISB<span className="text-white">.pro</span>
        </div>
        <div className="flex gap-3 flex-wrap items-center">
          <button onClick={() => setCurrentView('home')} className={`px-3 py-2 rounded-lg text-sm font-medium transition ${currentView === 'home' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
            Home
          </button>
          <button onClick={() => setCurrentView('jobs')} className={`px-3 py-2 rounded-lg text-sm font-medium transition ${currentView === 'jobs' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
            Jobs Feed
          </button>
          <button onClick={() => setCurrentView('chat')} className={`px-3 py-2 rounded-lg text-sm font-medium transition ${currentView === 'chat' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
            Jason Styles
          </button>
          <button onClick={() => setCurrentView('resume')} className={`px-3 py-2 rounded-lg text-sm font-medium transition ${currentView === 'resume' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
            Resume Builder
          </button>
          <button onClick={() => setCurrentView('profile')} className={`px-3 py-2 rounded-lg text-sm font-medium transition ${currentView === 'profile' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
            Profile & Settings
          </button>
          <button onClick={() => setCurrentView('dashboard')} className={`px-3 py-2 rounded-lg text-sm font-medium transition ${currentView === 'dashboard' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
            Dashboard
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
              The premier automated forensic-grade candidate screening, job board, and AI resume builder engine.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <button onClick={() => setCurrentView('jobs')} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg transition">
                Browse Live Jobs Feed (Free)
              </button>
              <button onClick={() => setCurrentView('resume')} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 shadow-lg transition">
                Build Resume with Jason
              </button>
            </div>
          </div>
        )}

        {currentView === 'jobs' && (
          <div className="flex-1 p-8 max-w-6xl mx-auto w-full">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-white">Live Job Postings</h1>
                <p className="text-slate-400 text-sm mt-1">Explore live employer postings and apply instantly for free.</p>
              </div>
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold">Feed Active</span>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {jobs.map(job => (
                <div key={job.id} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-slate-700 transition">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                    <p className="text-blue-400 font-medium text-sm mt-0.5">{job.company} • <span className="text-slate-400">{job.location}</span></p>
                    <p className="text-slate-300 text-sm mt-3 max-w-2xl">{job.description}</p>
                    <div className="mt-3 inline-block bg-slate-900 border border-slate-800 text-emerald-400 px-3 py-1 rounded-lg text-xs font-semibold">
                      {job.pay}
                    </div>
                  </div>
                  <button 
                    onClick={() => handleApply(job)}
                    className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow transition"
                  >
                    Apply Now (Free)
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'chat' && (
          <div className="flex-1 flex flex-col items-center p-8 max-w-4xl mx-auto w-full">
            <div className="w-full bg-slate-950 border border-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col h-[75vh]">
              <div className="bg-slate-900 p-4 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white">Jason Styles</h2>
                  <p className="text-xs text-blue-400">Senior AI Technical Recruiter & Resume Coach</p>
                </div>
                <button onClick={() => setCurrentView('resume')} className="text-xs bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1.5 rounded-lg hover:bg-blue-600/30 transition">
                  Open Resume Builder
                </button>
              </div>
              <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`p-4 rounded-xl max-w-[80%] text-slate-200 ${msg.sender === 'user' ? 'ml-auto bg-blue-600 text-white' : 'bg-slate-900 border border-slate-800'}`}>
                    {msg.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-800 bg-slate-950 flex gap-2">
                <input 
                  type="text" 
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask Jason for resume advice or interview tips..." 
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" 
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition">Send</button>
              </form>
            </div>
          </div>
        )}

        {currentView === 'resume' && (
          <div className="flex-1 p-8 max-w-4xl mx-auto w-full">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white">AI Resume Builder</h1>
                <p className="text-slate-400 text-sm">Craft and refine your professional profile with Jason's assistance.</p>
              </div>
              <button onClick={() => setCurrentView('chat')} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition">
                Consult Jason Styles
              </button>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Professional Summary</label>
                <textarea 
                  value={resumeData.summary}
                  onChange={(e) => setResumeData({...resumeData, summary: e.target.value})}
                  rows={3}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Work Experience</label>
                <textarea 
                  value={resumeData.experience}
                  onChange={(e) => setResumeData({...resumeData, experience: e.target.value})}
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Key Skills</label>
                <input 
                  type="text" 
                  value={resumeData.skills}
                  onChange={(e) => setResumeData({...resumeData, skills: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <button onClick={() => alert('Resume updated successfully!')} className="self-end px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition">
                Save Resume
              </button>
            </div>
          </div>
        )}

        {currentView === 'profile' && (
          <div className="flex-1 p-8 max-w-4xl mx-auto w-full">
            <h1 className="text-2xl font-bold text-white mb-6">Profile & Settings</h1>
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex flex-col gap-6">
              <div className="flex items-center gap-6 pb-6 border-b border-slate-800">
                <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-700 overflow-hidden flex items-center justify-center">
                  {profilePic ? (
                    <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-slate-500 text-xs">No Image</span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Upload Profile Picture</label>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500 cursor-pointer" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6 border-b border-slate-800">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2">Subscription & Account Cancellation</h3>
                <p className="text-slate-400 text-sm mb-4">Manage your account status and membership options.</p>
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex justify-between items-center">
                  <div>
                    <p className="text-white font-medium">Free Jobs Feed & Applicant Account</p>
                    <p className="text-xs text-slate-400 mt-0.5">Status: <span className={subscriptionActive ? "text-emerald-400 font-semibold" : "text-rose-400 font-semibold"}>{subscriptionActive ? "Active" : "Cancelled"}</span></p>
                  </div>
                  {subscriptionActive ? (
                    <button onClick={() => { if(confirm('Are you sure you want to cancel your account?')) setSubscriptionActive(false); }} className="px-4 py-2 bg-rose-600/20 text-rose-400 border border-rose-500/30 hover:bg-rose-600/30 text-sm font-semibold rounded-xl transition">
                      Cancel Account
                    </button>
                  ) : (
                    <button onClick={() => setSubscriptionActive(true)} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition">
                      Reactivate Account
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'dashboard' && (
          <div className="flex-1 p-8 max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-6">
              {profilePic && <img src={profilePic} alt="Profile" className="w-12 h-12 rounded-full object-cover border border-blue-500" />}
              <div>
                <h1 className="text-2xl font-bold text-white">Employer & Applicant Dashboard</h1>
                <p className="text-slate-400 text-sm">Welcome back, {userName}. Track your applications and hiring metrics.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
                <p className="text-slate-400 text-sm">Active Job Feed Postings</p>
                <p className="text-3xl font-extrabold text-white mt-1">{jobs.length}</p>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
                <p className="text-slate-400 text-sm">Applications Submitted</p>
                <p className="text-3xl font-extrabold text-blue-400 mt-1">{appliedJobs.length}</p>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
                <p className="text-slate-400 text-sm">Account Status</p>
                <p className="text-3xl font-extrabold text-emerald-400 mt-1">{subscriptionActive ? 'Active' : 'Cancelled'}</p>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Your Applied Positions</h3>
              {appliedJobs.length === 0 ? (
                <p className="text-slate-400 text-sm">You haven't applied to any positions yet. Check out the <button onClick={() => setCurrentView('jobs')} className="text-blue-400 underline">Jobs Feed</button>.</p>
              ) : (
                <div className="space-y-3">
                  {appliedJobs.map(job => (
                    <div key={job.id} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-white">{job.title}</h4>
                        <p className="text-xs text-blue-400">{job.company} • {job.location}</p>
                      </div>
                      <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-lg text-xs font-semibold">Applied</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
