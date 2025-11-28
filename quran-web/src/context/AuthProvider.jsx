import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        setUser(session?.user ?? null);
      } catch (error) {
        console.warn('Error checking auth status:', error);
        // Don't set error state for missing Supabase config - just continue without auth
        if (error.message && !error.message.includes('placeholder')) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    // Listen for auth changes - wrap in try-catch to handle errors
    let subscription;
    try {
      const { data } = supabase.auth.onAuthStateChange(
        (event, session) => {
          setUser(session?.user ?? null);
        }
      );
      subscription = data.subscription;
    } catch (error) {
      console.warn('Error setting up auth listener:', error);
    }

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      return data;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const register = async (email, password, userData) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData,
        },
      });
      if (error) throw error;
      return data;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

