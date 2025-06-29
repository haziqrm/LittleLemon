import React from 'react';
import { Link } from 'react-router-dom';

function Confirmation() {
  return (
    <div className="confirmation container-8">
      <h2>Thank you for your reservation!</h2>
      <p>Your table has been booked successfully.</p>
      <Link to="/" className="home-link">
        Go Back Home
      </Link>
    </div>
  );
}

export default Confirmation;
