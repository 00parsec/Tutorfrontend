import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from '../context/AuthContext';

function TutoriaCard({ tutoria }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleVerDetalle = () => {
    if (user) {
      navigate(`/tutoria/${tutoria.clases_id}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="card h-100">
      <div className="card-img-top bg-cover" style={{ backgroundImage: `url(${tutoria.imagenUrl})`, height: '200px' }}>
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          {tutoria.asignatura}
        </h5>
        <p className="card-text">
          {tutoria.descripcion}
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Modalidad: {tutoria.modalidad}</li>
          <li className="list-group-item">Locación: {tutoria.locacion}</li>
          <li className="list-group-item">Tipo: {tutoria.tipo}</li>
        </ul>
        <div className="mt-auto">
          <button onClick={handleVerDetalle} className="btn btn-primary" style={{ backgroundColor: '#03d6b3', border: 'none' }}>
            Ver Detalle
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(TutoriaCard);
