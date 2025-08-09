import React from 'react';
import './Dashboard.css';

const SalesEmployeeList = () => {
  const employees = ['Rahul Mehra', 'Ayesha Khan', 'Vikram Sharma', 'Nina Roy'];

  return (
    <div className="employee-list">
      <h2>Sales Employees</h2>
      <ol>
        {employees.map((emp, idx) => (
          <li key={idx}>{emp}</li>
        ))}
      </ol>
    </div>
  );
};

export default SalesEmployeeList;
