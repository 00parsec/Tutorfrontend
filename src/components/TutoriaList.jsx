import React, { useState, useEffect } from 'react';
import TutoriaCard from './TutoriaCard';

function TutoriaList() {
  const [tutorias, setTutorias] = useState([]);

  useEffect(() => {
    // Cambia la URL de la solicitud fetch al servidor en línea
    fetch('https://tutorbackend-fnxu.onrender.com/api/tutorias')
      .then(response => response.json())
      .then(data => setTutorias(data))
      .catch(error => console.error('Error al obtener las tutorías:', error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {tutorias.map((tutoria, index) => (
          <div key={index} className="col-md-4 mb-3">
            <TutoriaCard tutoria={tutoria} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TutoriaList;
