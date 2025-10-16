import React from "react";
import "./CommentsForm.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { useAuth0 } from "@auth0/auth0-react";

const CommentsForm = ({ addNewComments }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const validate = (values) => {
    const errors = {};

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
      username: "", // will be auto-filled for logged-in user
      remarks: "",
      rating: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      const commentData = {
        ...values,
        username: user.name || user.email || "@guest", // ✅ dynamic username
      };

      addNewComments(commentData);
      toast.success("Feedback added successfully!", {
        position: "top-center",
        autoClose: 2000,
      });
      resetForm();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated)
    return (
      <div className="comments-login-message">
        <p>Please log in to leave a comment.</p>
      </div>
    );

  return (
    <div className="comments-container">
      <h2>Leave a Comment</h2>
      <form className="comments-form" onSubmit={formik.handleSubmit}>
        {/* ✅ Username (auto-filled and disabled) */}
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.name || user.email}
          disabled
        />

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
