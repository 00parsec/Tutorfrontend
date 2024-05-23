import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';

function TutoriaDetail({ tutoria }) {
  const { user, addTutoria } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleReserva = () => {
    if (user) {
      addTutoria(tutoria);
    } else {
      navigate('/login'); 
    }
  };

  if (!user) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="alert alert-warning" role="alert">
              Debes iniciar sesión para ver los detalles de la tutoría.
            </div>
            <Link to="/login" className="btn btn-primary">Iniciar sesión</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="d-flex justify-content-center">
            <Card className="shadow" style={{ maxWidth: '900px' }}>
              <Card.Img variant="top" src={tutoria.imagenUrl} alt="Tutoría" style={{ maxHeight: '300px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="mb-2 fs-2">{tutoria.title}</Card.Title>
                <Card.Text className="mb-1 text-muted fs-3">{tutoria.description}</Card.Text>
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item"><strong>Descripción:</strong> {tutoria.descripcion}</li>
                  <li className="list-group-item"><strong>Tutor:</strong> {tutoria.nombre}</li>
                  <li className="list-group-item"><strong>Modalidad:</strong> {tutoria.modalidad}</li>
                  <li className="list-group-item"><strong>Horario:</strong> {tutoria.horario}</li>
                  <li className="list-group-item"><strong>Localidad:</strong> {tutoria.locacion}</li>
                  <li className="list-group-item"><strong>Tipo:</strong> {tutoria.tipo}</li>
                  <li className="list-group-item"><strong>Precio:</strong> ${tutoria.precio}</li>
                  <li className="list-group-item"><strong>Inscritos:</strong> {tutoria.cupos}/15</li>
                  <li className="list-group-item"><strong>Fecha:</strong> {tutoria.fecha}</li>
                  <li className="list-group-item"><strong>Duración:</strong> {tutoria.duracion} horas</li>
                </ul>
                <div className="d-grid gap-2">
                  <Link to="/reserved-tutorias">
                    <Button variant="primary" className="w-100" onClick={handleReserva}>Reservar Tutoría</Button>
                  </Link>
                  <Link to="/tutorias" className="btn btn-secondary w-100 mt-2 btn-sm">Volver</Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutoriaDetail;
