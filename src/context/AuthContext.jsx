
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';


const AuthContext = createContext();


export const useAuth = () => {
  return useContext(AuthContext);
};


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tutoriasReservadas, setTutoriasReservadas] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('/api/profile', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user', error);
          logout();
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, []);


  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('token', token);  
  };


  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    setTutoriasReservadas([]);
    };
  const addTutoria = (tutoria) => {
    setTutoriasReservadas([...tutoriasReservadas, tutoria]);
  };

  const eliminarTutoria = (id) => {
    setTutoriasReservadas(tutoriasReservadas.filter(tutoria => tutoria.id !== id));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, tutoriasReservadas, addTutoria, eliminarTutoria }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;



