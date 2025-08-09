import React, { useState } from 'react';
import './AddEmployee.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEmployee = ({ onSubmit }) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        mobile: '',
        permanentAddress: '',
        localAddress: '',
        fatherName: '',
        fatherContact: '',
        description: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
        if (!formData.dob) newErrors.dob = 'Date of Birth is required';
        if (!formData.mobile.match(/^\d{11}$/)) newErrors.mobile = 'Enter valid 10-digit number';
        if (!formData.permanentAddress.trim()) newErrors.permanentAddress = 'Permanent address is required';
        if (!formData.localAddress.trim()) newErrors.localAddress = 'Local address is required';
        if (!formData.fatherName.trim()) newErrors.fatherName = 'Father name is required';
        if (!formData.fatherContact.match(/^\d{11}$/)) newErrors.fatherContact = 'Enter valid 10-digit number';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log('Employee Data:', formData);
            toast.success('Employee added successfully!', {
                position: 'top-center',
                autoClose: 2000,
                onClose: () => navigate('/')
            });

            onSubmit(formData);
            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                dob: '',
                mobile: '',
                permanentAddress: '',
                localAddress: '',
                fatherName: '',
                fatherContact: '',
                description: ''
            });
        }
    };

    return (
        <div className="form-container">
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                </div>

                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                    {errors.dob && <span className="error">{errors.dob}</span>}
                </div>

                <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                    {errors.mobile && <span className="error">{errors.mobile}</span>}
                </div>

                <div className="form-group">
                    <label>Permanent Address</label>
                    <input type="text" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} />
                    {errors.permanentAddress && <span className="error">{errors.permanentAddress}</span>}
                </div>

                <div className="form-group">
                    <label>Local Address</label>
                    <input type="text" name="localAddress" value={formData.localAddress} onChange={handleChange} />
                    {errors.localAddress && <span className="error">{errors.localAddress}</span>}
                </div>

                <div className="form-group">
                    <label>Father Name</label>
                    <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
                    {errors.fatherName && <span className="error">{errors.fatherName}</span>}
                </div>

                <div className="form-group">
                    <label>Father Contact Number</label>
                    <input type="text" name="fatherContact" value={formData.fatherContact} onChange={handleChange} />
                    {errors.fatherContact && <span className="error">{errors.fatherContact}</span>}
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" rows="4" value={formData.description} onChange={handleChange}></textarea>
                </div>

                <button type="submit">Add Employee</button>

            </form>
            <ToastContainer />

        </div>
    );
};

export default AddEmployee;
