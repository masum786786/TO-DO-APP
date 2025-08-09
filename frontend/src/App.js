import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './componets/Dashboard';
import AddEmployee from './componets/AddEmployee';
import EmployeeDetails from './componets/EmployeeDetails';
import Navebar from "./componets/Navebar"
import Banner from './componets/Banner';
import Footer from './componets/Footer';
import ShowComments from './Formss/ShowComments';



const App = () => {
  return (
    <>
    <Navebar/>
    <ShowComments/>
    {/* <Banner/> */}
    {/* <Router className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-employee" element={<AddEmployee onSubmit={handleAddEmployee} />} />
        <Route path="/employee-details" element={<EmployeeDetails />} />
      </Routes>
    </Router> */}
    <Footer/>
    </>
  );
};

const handleAddEmployee = (data) => {
  // Save data to backend or state
  console.log('New Employee:', data);
};

export default App;
