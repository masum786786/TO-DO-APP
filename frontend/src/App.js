import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './componets/Dashboard';
import AddEmployee from './componets/AddEmployee';
import EmployeeDetails from './componets/EmployeeDetails';
import Navebar from "./componets/Navebar"
import Banner from './componets/Banner';
import Footer from './componets/Footer';
import ShowComments from './Formss/ShowComments';
import Login from './Formss/Login';
import Practice, { Showform } from './Practice';
import StudentForm from './Pages/StudentForm';
import StudentTable from './Pages/StudentTable';
// import StudentForm from "./components/StudentForm";
// import StudentTable from "./components/StudentTable";
import { StudentShowData } from './Context/Context';


const App = () => {
  const [studentFormData, setStudentFormData] = useState(null);
  return (
    <>
      <StudentShowData.Provider value={{ studentFormData, setStudentFormData }}>
        <Navebar />
        <ShowComments />
        <Login />
        {/* <Banner/> */}
        <Router className="App">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-employee" element={<AddEmployee onSubmit={handleAddEmployee} />} />
            <Route path="/employee-details" element={<EmployeeDetails />} />
          </Routes>
        </Router>


        <Practice />
        <Showform />
        <StudentForm />
        <StudentTable />

        <Footer />
      </StudentShowData.Provider>
    </>
  );
};

const handleAddEmployee = (data) => {
  // Save data to backend or state
  console.log('New Employee:', data);
};

export default App;
