import React, { useContext } from "react";
import { StudentShowData } from "../Context/Context";

const StudentTable = () => {
  const { studentFormData } = useContext(StudentShowData);
console.log(studentFormData,'llllllll')
  if (!studentFormData) return null;

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        background: "#e6ffe6",
        borderRadius: "6px",
        color: "#333",
        fontSize: "14px",
      }}
    >
      <strong>Submitted Data:</strong>
      <p>Name: {studentFormData.name}</p>
      <p>Age: {studentFormData.age}</p>
      <p>Email: {studentFormData.email}</p>
      <p>Mobile: {studentFormData.mobile}</p>
      <p>Address: {studentFormData.address}</p>
      <p>Course: {studentFormData.course}</p>
    </div>
  );
};

export default StudentTable;
