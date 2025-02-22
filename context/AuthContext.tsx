import { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextType {
  user: { username: string } | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ username: string } | null>(null);

  const login = async (username: string, password: string) => {
    const response = await axios.post('http://localhost:3001/auth/login', { username, password });
    const token = response.data.token;
    localStorage.setItem('token', token);
    setUser({ username });
  };

  const register = async (username: string, password: string) => {
    await axios.post('http://localhost:3001/auth/register', { username, password });
    alert('Registration successful');
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
