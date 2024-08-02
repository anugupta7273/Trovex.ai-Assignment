import React from 'react';
import './Card.css';

const Card = ({ title }) => {
  return (
    <div className="card">
      <div className="ribbon"></div>
      <h2>{title}</h2>
    </div>
  );
};

export default Card;