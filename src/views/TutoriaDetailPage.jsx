import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TutoriaDetail from '../components/TutoriaDetail';

function TutoriaDetailPage() {
  const { id } = useParams();
  console.log('ID de la tutoría:', id); 

  const [tutoria, setTutoria] = useState(null);

  useEffect(() => {
    fetch(`https://tutorbackend-fnxu.onrender.com/api/tutorias/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Tutoria obtenida:', data); 
        setTutoria(data);
      })
      .catch(error => console.error('Error al obtener la tutoría:', error));
  }, [id]);

  return tutoria ? <TutoriaDetail tutoria={tutoria} /> : <div>Cargando...</div>;
}

export default TutoriaDetailPage;

