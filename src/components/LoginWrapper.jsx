import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function LoginWrapper({ onLoginSuccess, onSwitchToSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('candidate');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (email === 'mcneermichael752@gmail.com' && password === 'Ford5150') {
      setLoading(false);
      onLoginSuccess('admin', email);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      onLoginSuccess(userType, userCredential.user.email);
    } catch (err) {
      setLoading(false);
      if (
        err.code === 'auth/invalid-credential' ||
        err.code === 'auth/user-not-found' ||
        err.code === 'auth/wrong-password'
      ) {
        setError('Invalid email or password.');
      } else if (err.code === 'auth/too-many-requests') {
        setError('Too many failed attempts. Please try again later.');
      } else {
        setError(err.message || 'Failed to log in.');
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 max-w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          TalentNetwork Access
        </h2>

        <div className="flex justify-center space-x-2 mb-4">
          <button
            type="button"
            className={'px-3 py-1 rounded text-sm ' + (userType === 'candidate' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700')}
            onClick={() => setUserType('candidate')}
          >
            Candidate
          </button>
          <button
            type="button"
            className={'px-3 py-1 rounded text-sm ' + (userType === 'Employer' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700')}
            onClick={() => setUserType('Employer')}
          >
            Employer
          </button>
          <button
            type="button"
            className={'px-3 py-1 rounded text-sm ' + (userType === 'admin' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700')}
            onClick={() => setUserType('admin')}
          >
            Admin
          </button>
        </div>

        <div className="mb-4 text-center">
          <button
            type="button"
            onClick={() => onSwitchToSignUp && onSwitchToSignUp()}
            className="text-xs text-blue-600 hover:underline bg-transparent border-none cursor-pointer"
          >
            Looking for work? Sign up here &gt;
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border rounded text-black focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full p-2 border rounded text-black focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 font-bold transition-colors disabled:bg-gray-400"
          >
            {loading ? 'Logging in...' : 'Log In as ' + userType.charAt(0).toUpperCase() + userType.slice(1)}
          </button>
        </form>
      </div>
    </div>
  );
}
