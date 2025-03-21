import React from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <BootstrapSpinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Carregando...</span>
      </BootstrapSpinner>
    </div>
  );
};

export default Spinner;
