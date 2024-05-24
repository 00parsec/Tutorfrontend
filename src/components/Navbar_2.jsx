import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaHome } from 'react-icons/fa';
import logo from '../assets/LogoTutorTarea.png';

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
   
    setIsAuthenticated(false); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo"/> 
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav"> 
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FaHome /> {}
              </Link>
            </li>
            {!isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/tutorias">Tutorías</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Perfil</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://fronttutor.onrender.com/">Cerrar Sesion</a>
                </li>
              </>
            )}
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/tutorias">Tutorías</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reserved-tutorias">Reservas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Perfil</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>Cerrar Sesión</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
