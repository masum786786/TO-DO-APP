import React, { useState } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './componets/Dashboard';
import AddEmployee from './componets/AddEmployee';
import EmployeeDetails from './componets/EmployeeDetails';
import Navebar from "./componets/Navebar"
import Banner from './componets/Banner';
import Footer from './componets/Footer';
import ShowComments from './Formss/ShowComments';
import Login from './Formss/Login';
// import Practice, { Showform } from './Practice';
// import StudentForm from './Pages/StudentForm';
// import StudentTable from './Pages/StudentTable';
// import StudentForm from "./components/StudentForm";
// import StudentTable from "./components/StudentTable";
import { StudentShowData } from './Context/Context';
import UserDetails from './componets/UserDetails';


const App = () => {
  const [studentFormData, setStudentFormData] = useState(null);
  return (
    <>
      <StudentShowData.Provider value={{ studentFormData, setStudentFormData }}>
        <Auth0Provider
             domain="dev-w86qsyinjfh8smgy.us.auth0.com"
             clientId="MdGn1zhwPXcvbHNUbtZOBSB2pNdJeKdj"
             authorizationParams={{
               redirect_uri: window.location.origin
             }}
        >
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


        {/* <Practice />
        <Showform />
        <StudentForm />
        <StudentTable /> */}
<UserDetails/>
        <Footer />
      </Auth0Provider>
    </StudentShowData.Provider >
    </>
  );
};

const handleAddEmployee = (data) => {
  // Save data to backend or state
  console.log('New Employee:', data);
};

export default App;
