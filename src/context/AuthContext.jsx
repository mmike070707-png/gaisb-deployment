import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, signUp, signIn, signOut } from '../config/supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
        const type = localStorage.getItem(`userType_${session.user.id}`);
        setUserType(type);
      }
      setLoading(false);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user);
        const type = localStorage.getItem(`userType_${session.user.id}`);
        setUserType(type);
      } else {
        setUser(null);
        setUserType(null);
      }
    });

    return () => subscription?.unsubscribe();
  }, []);

  const register = async (email, password, type, fullName = '') => {
    const { data, error } = await signUp(email, password);
    if (error) throw error;
    
    localStorage.setItem(`userType_${data.user.id}`, type);
    setUserType(type);
    
    return data.user;
  };

  const login = async (email, password) => {
    const { data, error } = await signIn(email, password);
    if (error) throw error;
    return data.user;
  };

  const logout = async () => {
    await signOut();
    setUserType(null);
  };

  return (
    <AuthContext.Provider value={{ user, userType, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
