import React, { useState } from 'react';
import './Dashboard.css';
import SalesEmployeeList from './SalesEmployeeList';
import Card from './Card';
import { useNavigate } from 'react-router-dom'
import CommentsForm from '../Formss/CommentsForms';
import ShowComments from '../Formss/ShowComments';

const Dashboard = () => {
  const navigate = useNavigate()
  const [showSales, setShowSales] = useState(false);

  const assignedWork = 24;
  const pendingWork = 8;

  return (
    <div className="dashboard">
      <h1>🏠 Estate Management Dashboard</h1>
      {/* <p>{new Date().toLocaleDateString()}</p> */}

      <div className="card-container">
        <Card title="Assigned Work" count={assignedWork} color="#4caf50" />
        <Card title="Pending Work" count={pendingWork} color="#f44336" />
        <Card
          title="Sales Team"
          count="Click to View"
          color="#2196f3"
          onClick={() => setShowSales(!showSales)}
        />
        <Card title="Add Employee"
          count="Click to Add" color="#9c27b0"
          onClick={() => navigate('/add-employee')} />

        <Card title="Employee Details" count="View All"
          color="#ff9800"
          onClick={() => navigate('/employee-details')} />
        <Card title="Task Completed" count="16" color="#009688" />

      </div>
      {/* <CommentsForm/> */}
      {/* <ShowComments /> */}
      {showSales && <SalesEmployeeList />}
    </div>
  );
};

export default Dashboard;
