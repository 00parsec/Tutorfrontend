import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReservedTutorias() {
  const { tutoriasReservadas, eliminarTutoria } = useContext(AuthContext);

  return (
    <div className="container mt-5"  style={{height:'80vh'}}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {tutoriasReservadas.map(tutoria => (
            <div key={tutoria.id} className="card mb-3" style={{ border: '1px solid #ccc' }}>
              <div className="card-body">
                <h5 className="card-title">{tutoria.title}</h5>
                <p className="card-text">Localidad: {tutoria.locacion}</p>
                <p className="card-text">Modalidad: {tutoria.modalidad}</p>
                <p className="card-text">Precio: ${tutoria.precio}</p>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-outline-danger me-2" onClick={() => eliminarTutoria(tutoria.id)} style={{ background: 'grey', color:'white', border:'none' }}>Eliminar</button>
                  <Link to={`/pagar/${tutoria.id}`} className="btn btn-outline-primary" style={{ background: '#03d6b3',color:'white', border:'none' }}>Pagar</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReservedTutorias;




