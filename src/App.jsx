

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Navbar_2 from './components/Navbar_2'; 
import Footer from './components/footer'; 
import Home from './views/Home';
import Tutorias from './views/Tutorias';
import TutoriaDetailPage from './views/TutoriaDetailPage'; 
import LoginRegister from './views/LoginRegister'; 
import ProfilePage from './views/ProfilePage'; 
import './index.css'
import ReservedTutoriasPage from './views/ReservedTutoriasPage';
import Registro from './views/Registro';
import Payment from './components/Payment';

function App() {
  return (
    <AuthProvider>
      <Router>
        <DynamicNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tutorias" element={<Tutorias />} />
          <Route path="/tutoria/:id" element={<TutoriaDetailPage />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/reserved-tutorias" element={<ReservedTutoriasPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/pagar/:id" element={<Payment />} />
        </Routes>
        <Footer /> 
      </Router>
    </AuthProvider>
  );
}

function DynamicNavbar() {
  const { pathname } = window.location;

 
  const isProfilePage = pathname === '/profile';

  
  return isProfilePage ? <Navbar_2 /> : <Navbar />;
}

export default App;
