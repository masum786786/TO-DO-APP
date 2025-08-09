import React, { useState } from 'react';
import './EmployeeDetails.css';
import { useNavigate } from 'react-router-dom';

const EmployeeDetails = ({ employees = [], onDelete, onEdit }) => {
    const navigate= useNavigate()
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEditClick = (emp) => {
    setEditId(emp.id);
    setEditData({ ...emp });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (
      !editData.firstName?.trim() ||
      !editData.lastName?.trim() ||
      !editData.dob ||
      !editData.mobile?.trim() ||
      !editData.fatherName?.trim()
    ) {
      alert('Please fill all fields before saving.');
      return;
    }

    onEdit(editId, editData);
    setEditId(null);
  };

  return (
    <div className="employee-table">
      <h3>Employee Details</h3>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Mobile</th>
              <th>Father</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>
                  {editId === emp.id ? (
                    <>
                      <input
                        name="firstName"
                        value={editData.firstName || ''}
                        onChange={handleChange}
                      />
                      <input
                        name="lastName"
                        value={editData.lastName || ''}
                        onChange={handleChange}
                      />
                    </>
                  ) : (
                    `${emp.firstName} ${emp.lastName}`
                  )}
                </td>
                <td>
                  {editId === emp.id ? (
                    <input
                      type="date"
                      name="dob"
                      value={editData.dob || ''}
                      onChange={handleChange}
                    />
                  ) : (
                    emp.dob
                  )}
                </td>
                <td>
                  {editId === emp.id ? (
                    <input
                      name="mobile"
                      value={editData.mobile || ''}
                      onChange={handleChange}
                    />
                  ) : (
                    emp.mobile
                  )}
                </td>
                <td>
                  {editId === emp.id ? (
                    <input
                      name="fatherName"
                      value={editData.fatherName || ''}
                      onChange={handleChange}
                    />
                  ) : (
                    emp.fatherName
                  )}
                </td>
                <td>
                  {editId === emp.id ? (
                    <>
                      <button onClick={handleSave}>Save</button>
                      <button onClick={() => setEditId(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditClick(emp)}>Edit</button>
                      <button onClick={() => onDelete(emp.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <>
      <button onClick={() => navigate('/')}>Back</button>
      </>
    </div>
  );
};

export default EmployeeDetails;
