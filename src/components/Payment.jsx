import React, { useState } from 'react';
import qr from '../assets/qr.png';

function Payment() {
  const [montoTotal, setMontoTotal] = useState(15000); 
  const [metodoPago, setMetodoPago] = useState('Transferencia'); 
  const [mensaje, setMensaje] = useState('');

  const handleAccept = () => {
    setMensaje('Usted recibirá un correo con el link de pago. Una vez realizado el pago, recibirá la invitación del tutor');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
      <img src={qr} alt="qr" className="img-fluid mb-4" /> 
        <h2 className="mb-4">Pago</h2>
        <p>Monto Total: {montoTotal}</p>
        <p>Método de Pago: {metodoPago}</p>
        <button className="btn btn-primary mb-3" onClick={handleAccept}>Aceptar</button>
        {mensaje && (
          <div className="alert alert-success" role="alert">
            {mensaje}
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;


