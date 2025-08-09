import React from 'react';
import './OurCustomer.css';

const customers = [
  {
    name: 'Anjali Sharma',
    image: 'https://via.placeholder.com/150',
    description: 'RealEstateCo helped me find my dream home in no time. Their team is incredibly supportive and professional.',
  },
  {
    name: 'Rahul Mehta',
    image: 'https://via.placeholder.com/150',
    description: 'A seamless property-buying experience! Highly recommend their transparent and quick services.',
  },
  {
    name: 'Priya Desai',
    image: 'https://via.placeholder.com/150',
    description: 'Very trustworthy and knowledgeable. I was guided throughout the purchase process with confidence.',
  }
];

const OurCustomer = () => {
  return (
    <div className="our-customer-section">
      <h2>Our Customers</h2>
      <div className="customer-cards">
        {customers.map((cust, index) => (
          <div className="customer-card" key={index}>
            <img src={cust.image} alt={cust.name} className="customer-image" />
            <h4>{cust.name}</h4>
            <p>{cust.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCustomer;
