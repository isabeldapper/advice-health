import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; 

const Footer = () => {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between align-items-center py-2 my-3 border-top mt-auto">
        <div className="container">
          <p className="col-md-4 mb-0 text-body-secondary">&copy; 2024 Company, Inc</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;