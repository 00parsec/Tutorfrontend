import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#323232', padding: '30px 10px', margin:'30spx 0px 0px 0px' }}> 
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 style={{ color: 'white' }} >Contacto</h5>
            <ul className="list-unstyled" style={{ color: 'white' }}> 
              <li><FaPhone /> Teléfono: +1234567890</li>
              <li><FaEnvelope /> Correo: tutorias@correo.com</li>
              <li><FaMapMarkerAlt /> Dirección: Los Maitenes 2929, Santiago, Chile</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;