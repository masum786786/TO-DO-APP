import React from "react";
import "./CommentsForm.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";

const CommentsForm = ({ addNewComments }) => {
  const validate = (values) => {
    const errors = {};

    if (!values.username.trim()) {
      errors.username = "Username is required";
    } else if (values.username.trim().length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    if (!values.rating) {
      errors.rating = "Please select a rating";
    }

    if (!values.remarks.trim()) {
      errors.remarks = "Remarks are required";
    } else if (values.remarks.trim().length < 5) {
      errors.remarks = "Remarks must be at least 5 characters";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      addNewComments(values);
      toast.success("Added Feedback successfully!", {
        position: "top-center",
        autoClose: 2000,
      });
      resetForm();
    },
  });

  return (
    <div className="comments-container">
      <h2>Leave a Comment</h2>
      <form className="comments-form" onSubmit={formik.handleSubmit}>
        {/* Username */}
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && (
          <div className="error">{formik.errors.username}</div>
        )}

        {/* Rating */}
        <label>Rating</label>
        <select
          name="rating"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rating}
        >
          <option value="">Select Rating</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>
        {formik.touched.rating && formik.errors.rating && (
          <div className="error">{formik.errors.rating}</div>
        )}

        {/* Remarks */}
        <label>Remarks</label>
        <textarea
          name="remarks"
          placeholder="Write your comments here..."
          value={formik.values.remarks}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>
        {formik.touched.remarks && formik.errors.remarks && (
          <div className="error">{formik.errors.remarks}</div>
        )}

        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CommentsForm;
