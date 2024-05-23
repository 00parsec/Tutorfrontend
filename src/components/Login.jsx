import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/LogoTutorTarea.png';
import { Link } from 'react-router-dom'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
      }

      const data = await response.json();
      localStorage.setItem('token', data.token); 
      window.location.href = '/profile';
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mt-5" style={{height:'100vh'}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img src={logo} alt="Logo" className="img-fluid mb-4" /> 
          <div className="card" style={{ backgroundColor: '#4ccac1' }}> 
            <div className="card-body text-center">
              <h2 className="card-title">Iniciar Sesión</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Nombre de Usuario</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn" style={{ backgroundColor: '#5e5ed3', color: '#fff' }}>Iniciar Sesión</button> 
              </form>
            </div>
            <div className="card-footer text-center"> 
              <p style={{ color: '#fff' }}>¿No tienes una cuenta? <Link to="/registro" className="btn btn-link" style={{ color: '#694cd3' }}>Registrarse</Link></p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
