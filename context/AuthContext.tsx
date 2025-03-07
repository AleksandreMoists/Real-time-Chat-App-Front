import { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextType {
  user: { firstName: string, lastName: string } | null;
  login: (firstName: string, lastName: string, password: string) => Promise<void>;
  register: (firstName: string, lastName: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ firstName: string, lastName: string, } | null>(null);

  const login = async (firstName: string, lastName: string, password: string) => {
    const response = await axios.post('http://localhost:3001/auth/login', { firstName, lastName, password });
    const token = response.data.token;
    localStorage.setItem('token', token);
    setUser({ firstName, lastName });
  };

  const register = async (firstName: string, lastName: string, password: string) => {
    await axios.post('http://localhost:3001/auth/register', { firstName, lastName, password });
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
