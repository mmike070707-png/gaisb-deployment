import React, { useState } from 'react';

export default function App() {
  const [authRole, setAuthRole] = useState(null); // 'applicant' | 'employer' | null
  const [currentView, setCurrentView] = useState('home');
  const [profilePic, setProfilePic] = useState(null);
  const [userName, setUserName] = useState('Alex Morgan');
  const [userEmail, setUserEmail] = useState('alex.morgan@example.com');
  const [subscriptionActive, setSubscriptionActive] = useState(true);

  // Resume Data
  const [resumeData, setResumeData] = useState({
    summary: 'Experienced full-stack engineer specializing in React and modern web architectures.',
    experience: 'Senior Developer at TechCorp (2022-Present)\n- Built scalable front-end components using React and Tailwind CSS.',
    skills: 'React, JavaScript, Tailwind CSS, Node.js, Git'
  });

  // Jobs Feed & Employer Posting
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Senior React Developer', company: 'Apex Innovations', location: 'Remote', pay: '$140k - $170k', description: 'Looking for an experienced React engineer to lead our frontend architecture.' },
    { id: 2, title: 'AI Integration Specialist', company: 'Neural Systems', location: 'New York, NY', pay: '$150k - $190k', description: 'Develop intelligent agent integrations and automated screening pipelines.' }
  ]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  // Employer Settings & Criteria
  const [employerSettings, setEmployerSettings] = useState({
    topCandidateCount: 10,
    instructions: 'Evaluate candidates strictly on technical depth, React experience, and clean code principles.',
    questionnaire: '1. Describe a complex state management challenge you solved.\n2. How do you ensure high performance in large-scale React apps?\n3. What is your experience with Tailwind CSS?'
  });

  // Employer Post Job Form State
  const [newJobTitle, setNewJobTitle] = useState('');
  const [newJobPay, setNewJobPay] = useState('');
  const [newJobLoc, setNewJobLoc] = useState('');
  const [newJobDesc, setNewJobDesc] = useState('');
  const [indeedSync, setIndeedSync] = useState(false);

  // Jason Styles AI State (Global Chat + Resume Integration + Interview Simulator)
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'jason', text: "Hello! I'm Jason Styles, your 40-year-old Senior AI Technical Recruiter. How can I assist you with your resume or screening today?" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  
  // AI Video Interview Simulation State
  const [interviewActive, setInterviewActive] = useState(false);
  const [interviewStep, setInterviewStep] = useState(0);
  const [interviewAnswers, setInterviewAnswers] = useState([]);
  const [currentAnswerInput, setCurrentAnswerInput] = useState('');
  const [interviewReport, setInterviewReport] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleApply = (job) => {
    if (!appliedJobs.some(j => j.id === job.id)) {
      setAppliedJobs([...appliedJobs, job]);
      alert(`Successfully applied to ${job.title}! Jason Styles is now processing your resume against employer criteria.`);
    } else {
      alert(`You have already applied to ${job.title}.`);
    }
  };

  const handlePostJob = (e) => {
    e.preventDefault();
    if (!newJobTitle || !newJobDesc) return;
    const newJob = {
      id: jobs.length + 1,
      title: newJobTitle,
      company: 'Apex Innovations (Employer)',
      location: newJobLoc || 'Remote',
      pay: newJobPay || '$100k - $130k',
      description: newJobDesc
    };
    setJobs([newJob, ...jobs]);
    if (indeedSync) {
      alert('Job posted successfully and synced to Indeed feed automatically!');
    } else {
      alert('Job posted successfully to Live Feed!');
    }
    setNewJobTitle('');
    setNewJobPay('');
    setNewJobLoc('');
    setNewJobDesc('');
    setIndeedSync(false);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    const newMsg = [...chatMessages, { sender: 'user', text: inputMessage }];
    setChatMessages(newMsg);
    setInputMessage('');

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { 
          sender: 'jason', 
          text: `I've analyzed your input through our forensic grading matrix. Let's make sure your resume highlights exact metric-driven outcomes for maximum employer appeal.` 
        }
      ]);
    }, 1000);
  };

  const startAiInterview = () => {
    setInterviewActive(true);
    setInterviewStep(0);
    setInterviewAnswers([]);
    setInterviewReport(null);
  };

  const submitInterviewAnswer = () => {
    if (!currentAnswerInput.trim()) return;
    const updatedAnswers = [...interviewAnswers, currentAnswerInput];
    setInterviewAnswers(updatedAnswers);
    setCurrentAnswerInput('');

    if (interviewStep < 2) {
      setInterviewStep(interviewStep + 1);
    } else {
      // Complete interview simulation
      setInterviewActive(false);
      setInterviewReport({
        score: 96,
        summary: 'Exceptional communication and high technical alignment with employer benchmarks.',
        videoRecorded: 'recording_session_gaisb_9841.mp4',
        timestamp: new Date().toLocaleString()
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans relative">
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
          
          {authRole === 'applicant' && (
            <>
              <button onClick={() => setCurrentView('resume')} className={`px-3 py-2 rounded-lg text-sm font-medium transition ${currentView === 'resume' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
                Resume Builder
              </button>
              <button onClick={() => setCurrentView('profile')} className={`px-3 py-2 rounded-lg text-sm font-medium transition ${currentView === 'profile' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
                Profile & Settings
              </button>
              <button onClick={() => setCurrentView('applicant-dashboard')} className={`px-3 py-2 rounded-lg text-sm font-medium transition ${currentView === 'applicant-dashboard' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
                Applicant Dashboard
              </button>
            </>
          )}

          {authRole === 'employer' && (
            <button onClick={() => setCurrentView('employer-dashboard')} className={`px-3 py-2 rounded-lg text-sm font-medium transition ${currentView === 'employer-dashboard' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}>
              Employer Dashboard
            </button>
          )}

          {!authRole ? (
            <button onClick={() => setCurrentView('login')} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl shadow transition">
              Login Portal
            </button>
          ) : (
            <button onClick={() => { setAuthRole(null); setCurrentView('home'); }} className="px-3 py-2 bg-rose-600/20 text-rose-400 border border-rose-500/30 hover:bg-rose-600/30 rounded-lg text-sm font-medium transition">
              Log Out
            </button>
          )}
        </div>
      </header>

      {/* Main View Area */}
      <main className="flex-1 flex flex-col pb-20">
        {currentView === 'home' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Global AI Staffing & Benchmarking
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mb-8">
              The premier automated forensic-grade candidate screening, job board, and AI resume builder engine.
            </p>
            <div className="flex gap-4 flex-wrap justify-center mb-6">
              <button onClick={() => setCurrentView('jobs')} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg transition">
                Browse Live Jobs Feed (Free)
              </button>
              <button onClick={() => { setAuthRole('applicant'); setCurrentView('resume'); }} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 shadow-lg transition">
                Build Resume with Jason
              </button>
            </div>
            {!authRole && (
              <div className="mt-4">
                <button onClick={() => setCurrentView('login')} className="text-blue-400 hover:underline text-sm font-medium">
                  Already have an account? Select Login to access dashboards &rarr;
                </button>
              </div>
            )}
          </div>
        )}

        {currentView === 'login' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl max-w-md w-full shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-2 text-center">GAISB Secure Login</h2>
              <p className="text-slate-400 text-sm text-center mb-6">Choose your portal to access specialized dashboards.</p>
              
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => { setAuthRole('applicant'); setCurrentView('applicant-dashboard'); }}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg transition flex flex-col items-center"
                >
                  <span>Applicant Portal Login</span>
                  <span className="text-xs text-blue-200 font-normal mt-0.5">Access free job feed, resume builder & profile settings</span>
                </button>

                <button 
                  onClick={() => { setAuthRole('employer'); setCurrentView('employer-dashboard'); }}
                  className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 shadow-lg transition flex flex-col items-center"
                >
                  <span>Employer Portal Login</span>
                  <span className="text-xs text-slate-400 font-normal mt-0.5">Manage job feed posts, Indeed sync, criteria & Jason AI screener</span>
                </button>
              </div>
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

        {currentView === 'resume' && (
          <div className="flex-1 p-8 max-w-4xl mx-auto w-full">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white">AI Resume Builder</h1>
                <p className="text-slate-400 text-sm">Craft and refine your professional profile with Jason Styles integrated into your editing flow.</p>
              </div>
              <button onClick={() => setChatOpen(true)} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition flex items-center gap-2">
                <span>💬 Consult Jason</span>
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
              <button onClick={() => alert('Resume updated successfully with Jason integration!')} className="self-end px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition">
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

        {currentView === 'applicant-dashboard' && (
          <div className="flex-1 p-8 max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-6">
              {profilePic && <img src={profilePic} alt="Profile" className="w-12 h-12 rounded-full object-cover border border-blue-500" />}
              <div>
                <h1 className="text-2xl font-bold text-white">Applicant Dashboard</h1>
                <p className="text-slate-400 text-sm">Welcome back, {userName}. Track your applications and AI interview status.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
                <p className="text-slate-400 text-sm">Applications Submitted</p>
                <p className="text-3xl font-extrabold text-blue-400 mt-1">{appliedJobs.length}</p>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
                <p className="text-slate-400 text-sm">AI Screening Status</p>
                <p className="text-3xl font-extrabold text-emerald-400 mt-1">Active</p>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
                <p className="text-slate-400 text-sm">Account Status</p>
                <p className="text-3xl font-extrabold text-emerald-400 mt-1">{subscriptionActive ? 'Active' : 'Cancelled'}</p>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl mb-8">
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
                      <div className="flex items-center gap-3">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-lg text-xs font-semibold">Passed AI Top 10 Screen</span>
                        <button onClick={startAiInterview} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition">
                          Start Jason Video Interview
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {currentView === 'employer-dashboard' && (
          <div className="flex-1 p-8 max-w-7xl mx-auto w-full">
            <h1 className="text-2xl font-bold text-white mb-2">Employer Dashboard & AI Screener Control</h1>
            <p className="text-slate-400 text-sm mb-8">Post jobs to the live feed, sync with Indeed, and manage Jason Styles' applicant screening parameters.</p>

            {/* Post Job & Indeed Integration Section */}
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Post New Job to Live Feed & Indeed</h3>
              <form onSubmit={handlePostJob} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Job Title</label>
                  <input type="text" value={newJobTitle} onChange={(e) => setNewJobTitle(e.target.value)} placeholder="e.g. Senior Frontend Architect" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Compensation Range</label>
                  <input type="text" value={newJobPay} onChange={(e) => setNewJobPay(e.target.value)} placeholder="e.g. $150k - $180k" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Location</label>
                  <input type="text" value={newJobLoc} onChange={(e) => setNewJobLoc(e.target.value)} placeholder="e.g. Remote / Chicago, IL" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                </div>
                <div className="flex items-center pt-6">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={indeedSync} onChange={(e) => setIndeedSync(e.target.checked)} className="w-5 h-5 rounded bg-slate-900 border-slate-800 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm font-medium text-slate-300">Auto-sync and post to Indeed Feed</span>
                  </label>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-300 mb-1">Job Description</label>
                  <textarea value={newJobDesc} onChange={(e) => setNewJobDesc(e.target.value)} rows={3} placeholder="Describe responsibilities and requirements..." className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition">
                    Publish Job Post
                  </button>
                </div>
              </form>
            </div>

            {/* Jason AI Criteria & Settings Section */}
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl mb-8">
              <h3 className="text-lg font-bold text-white mb-2">Jason Styles AI Screener Criteria & Instructions</h3>
              <p className="text-slate-400 text-sm mb-4">Configure how Jason evaluates applicants, weeds out candidates to your preset Top X threshold, and emails questionnaires.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Preset Top Candidate Threshold (#)</label>
                  <input type="number" value={employerSettings.topCandidateCount} onChange={(e) => setEmployerSettings({...employerSettings, topCandidateCount: e.target.value})} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Evaluation Instructions for Jason</label>
                  <input type="text" value={employerSettings.instructions} onChange={(e) => setEmployerSettings({...employerSettings, instructions: e.target.value})} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-300 mb-1">15-Point Questionnaire (Emailed automatically to applicants passing screen)</label>
                <textarea value={employerSettings.questionnaire} onChange={(e) => setEmployerSettings({...employerSettings, questionnaire: e.target.value})} rows={4} className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <button onClick={() => alert('Employer screening criteria saved successfully!')} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition">
                Save Criteria Settings
              </button>
            </div>

            {/* Database & Video Reports Review */}
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Candidate Database & AI Interview Reports</h3>
              <div className="space-y-4">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-white">Alex Morgan - Senior React Developer Applicant</h4>
                    <p className="text-xs text-blue-400 mt-0.5">AI Forensic Score: 96/100 • Status: Interview Completed</p>
                    <p className="text-xs text-slate-400 mt-1">Video Recording: <span className="text-emerald-400 underline cursor-pointer">recording_session_gaisb_9841.mp4</span></p>
                  </div>
                  <button onClick={() => alert('Downloading full report and video copy for review...')} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl border border-slate-700 transition">
                    Review Report & Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Floating Jason Styles AI Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        {!chatOpen ? (
          <button 
            onClick={() => setChatOpen(true)}
            className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-3 rounded-full shadow-2xl border border-blue-400/30 transition transform hover:scale-105"
          >
            <div className="w-9 h-9 rounded-full bg-slate-950 border border-blue-400 overflow-hidden flex items-center justify-center font-bold text-blue-400 text-sm">
              JS
            </div>
            <div className="text-left">
              <p className="text-xs font-bold leading-tight">Jason Styles</p>
              <p className="text-[10px] text-blue-200 leading-tight">AI Recruiter & Screener</p>
            </div>
          </button>
        ) : (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col overflow-hidden">
            <div className="bg-slate-900 p-4 border-b border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">JS</div>
                <div>
                  <h3 className="text-sm font-bold text-white">Jason Styles</h3>
                  <p className="text-[10px] text-blue-400">Senior AI Recruiter (Age 40)</p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-slate-400 hover:text-white text-sm font-bold px-2">✕</button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 text-sm">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`p-3 rounded-xl max-w-[85%] ${msg.sender === 'user' ? 'ml-auto bg-blue-600 text-white' : 'bg-slate-900 border border-slate-800 text-slate-200'}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-800 bg-slate-900 flex gap-2">
              <input 
                type="text" 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask Jason for resume/interview help..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500" 
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-semibold transition">Send</button>
            </form>
          </div>
        )}
      </div>

      {/* AI Video Interview Modal Simulation */}
      {interviewActive && (
        <div className="fixed inset-0 bg-slate-950/90 z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full p-8 flex flex-col shadow-2xl relative">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">JS</div>
                <div>
                  <h2 className="text-xl font-bold text-white">Jason Styles - AI Video Interview</h2>
                  <p className="text-xs text-blue-400">Mahogany Office Studio • Automated Forensic Evaluation</p>
                </div>
              </div>
              <button onClick={() => setInterviewActive(false)} className="text-slate-400 hover:text-white text-lg font-bold">✕</button>
            </div>

            {/* Video Simulation Box */}
            <div className="w-full h-64 bg-slate-950 border border-slate-800 rounded-2xl mb-6 relative overflow-hidden flex flex-col items-center justify-center text-center p-6">
              <div className="absolute top-4 left-4 bg-rose-600/20 text-rose-400 border border-rose-500/30 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span> REC (Session #9841)
              </div>
              <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-blue-500 flex items-center justify-center text-2xl font-extrabold text-blue-400 mb-3 shadow-inner">
                JS
              </div>
              <p className="text-white font-semibold text-base mb-1">Jason Styles (40-year-old Professional Technical Recruiter)</p>
              <p className="text-slate-300 text-sm italic max-w-lg">
                "{interviewStep === 0 ? "Welcome to your technical interview. Question 1: Describe a complex state management challenge you solved recently." : interviewStep === 1 ? "Question 2: How do you optimize rendering performance in large React applications?" : "Question 3: What is your approach to maintaining secure API connections?"}"
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-slate-300">Your Answer (Audio/Text Stream):</label>
              <textarea 
                value={currentAnswerInput}
                onChange={(e) => setCurrentAnswerInput(e.target.value)}
                rows={3}
                placeholder="Type your spoken response or test transcript..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500"
              />
              <button onClick={submitInterviewAnswer} className="self-end px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition">
                {interviewStep < 2 ? 'Submit Answer & Proceed' : 'Complete Interview & Generate Report'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interview Completed Report Popup */}
      {interviewReport && (
        <div className="fixed inset-0 bg-slate-950/90 z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-2">Interview Completed!</h2>
            <p className="text-slate-400 text-sm mb-6">Jason Styles has finalized grading and recorded the session for the employer.</p>
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-2 mb-6 text-sm">
              <p className="text-white font-medium">Score: <span className="text-emerald-400 font-bold">{interviewReport.score}/100</span></p>
              <p className="text-slate-300">{interviewReport.summary}</p>
              <p className="text-xs text-blue-400 pt-2">Saved to Database File: {interviewReport.videoRecorded}</p>
            </div>
            <button onClick={() => setInterviewReport(null)} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition">
              Close Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
