import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Auth functions
export const signUp = (email, password) => 
  supabase.auth.signUp({ email, password });

export const signIn = (email, password) => 
  supabase.auth.signInWithPassword({ email, password });

export const signOut = () => 
  supabase.auth.signOut();

// Database functions
export const createUser = (id, email, userType, fullName = '') =>
  supabase.from('users').insert([{
    id,
    email,
    user_type: userType,
    full_name: fullName
  }]);

export const getUser = (id) =>
  supabase.from('users').select('*').eq('id', id).single();

export const getJobs = () =>
  supabase.from('jobs').select('*, users(company_name)').order('created_at', { ascending: false });

export const createApplication = (candidateId, jobId, resumeUrl = '') =>
  supabase.from('applications').insert([{
    candidate_id: candidateId,
    job_id: jobId,
    resume_url: resumeUrl,
    status: 'applied'
  }]);

export const getApplications = (userId, userType) => {
  if (userType === 'candidate') {
    return supabase
      .from('applications')
      .select('*, jobs(title, company_name)')
      .eq('candidate_id', userId);
  } else {
    return supabase
      .from('applications')
      .select('*, jobs(id, title), users(full_name, email)')
      .eq('jobs.employer_id', userId);
  }
};

export const createResume = (userId, title, content) =>
  supabase.from('resumes').insert([{
    user_id: userId,
    title,
    content
  }]);

export const getResumes = (userId) =>
  supabase.from('resumes').select('*').eq('user_id', userId);

