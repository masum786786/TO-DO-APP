import React from 'react';
import './Dashboard.css';

const Card = ({ title, count, color, onClick }) => {
  return (
    <div className="card" style={{ backgroundColor: color }} onClick={onClick}>
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
};

export default Card;
