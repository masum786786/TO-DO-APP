import React, { useState ,useContext} from "react";
import { StudentShowData } from "../Context/Context";

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    age: "",
    email: "",
    mobile: "",
    address: "",
    course: ""
  });
  const { setStudentFormData } = useContext(StudentShowData);
//   const [submitted, setSubmitted] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentFormData(studentData)
    console.log(studentData)
    // const { name, age, email, mobile, address, course } = studentData;

    // if (name && age && email && mobile && address && course) {
    // //   setSubmitted(true);
    //   console.log("Student Data:", studentData);
    // } else {
    //   alert("Please fill all fields!");
    // }
    setStudentData({
        name: "",
        age: "",
        email: "",
        mobile: "",
        address: "",
        course: ""
      })
  };

  return (

       
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f4f4f9",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          width: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
          Student Registration Form
        </h2>

        {/* Name */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Name:</label>
          <input
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Age */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Age:</label>
          <input
            type="number"
            name="age"
            value={studentData.age}
            onChange={handleChange}
            placeholder="Enter Age"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Email:</label>
          <input
            type="email"
            name="email"
            value={studentData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Mobile */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={studentData.mobile}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Address */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Address:</label>
          <textarea
            name="address"
            value={studentData.address}
            onChange={handleChange}
            placeholder="Enter Address"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              resize: "none",
            }}
          />
        </div>

        {/* Course */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Course:</label>
          <select
            name="course"
            value={studentData.course}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">Select Course</option>
            <option value="BCA">BCA</option>
            <option value="BSc IT">BSc IT</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>

        {/* Show submitted data */}
        {/* {submitted && (
         
        )} */}
      </form>
    </div>
  
  );
};

export default StudentForm;
