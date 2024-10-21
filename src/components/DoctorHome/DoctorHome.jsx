import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState, useContext } from "react";
import { userContext } from "../UserContext/UserContext";
import "./DoctorHome.css";
import { ThreeDots } from "react-loader-spinner";

export default function DoctorHome() {
  const { userToken } = useContext(userContext);
  const [isLoading, setIsLoading] = useState(false);

  // Validation Schema
  const validationSchema = Yup.object({
    patient_id: Yup.string()
      .length(14, "Patient ID must be exactly 14 characters")
      .required("Patient ID is required"),
    medicine_name: Yup.string().required("Medicine name is required"),
    dosage: Yup.string().required("Dosage is required"),
    instructions: Yup.string().required("Instructions are required"),
  });

  // Function to handle form submission
  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true); // Start loading
    try {
      const response = await axios.post(
        `https://grackle-notable-hardly.ngrok-free.app/api/patients/${values.patient_id}/prescriptions/`,
        {
          medicine_name: values.medicine_name,
          dosage: values.dosage,
          instructions: values.instructions,
        },
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log("API Response:", response.data);
      // Clear form fields except for patient_id
      resetForm({ values: { patient_id: values.patient_id, medicine_name: '', dosage: '', instructions: '' } });
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const formik = useFormik({
    initialValues: {
      patient_id: "",
      medicine_name: "",
      dosage: "",
      instructions: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <nav className="d-flex justify-content-end px-5 py-2">
        
        <div className="">
            <NavLink to="/DoctorShowHistory" className="link2">Show Patient History</NavLink>
          </div>
          <div className="icon">
          <NavLink to="/doctorProfile" className="link">
            <FaUser className="profile-icon mx-2" />
          </NavLink>
         
        </div>
      </nav>

      <div className="addForm d-flex flex-column justify-content-center align-items-center text-center">
        <h1>Add Prescription</h1>
        <div className="form text-start w-75">
          <form onSubmit={formik.handleSubmit}>
            {/* Patient ID */}
            <div className="form-group">
              <label htmlFor="patient_id">Patient ID:</label>
              <input
                type="text"
                id="patient_id"
                name="patient_id"
                value={formik.values.patient_id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control"
                placeholder="Enter patient ID"
              />
              {formik.touched.patient_id && formik.errors.patient_id ? (
                <div className="error">{formik.errors.patient_id}</div>
              ) : null}
            </div>

            {/* Medicine Name */}
            <div className="form-group">
              <label htmlFor="medicine_name">Medicine Name:</label>
              <input
                type="text"
                id="medicine_name"
                name="medicine_name"
                value={formik.values.medicine_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control"
                placeholder="Enter medicine name"
              />
              {formik.touched.medicine_name && formik.errors.medicine_name ? (
                <div className="error">{formik.errors.medicine_name}</div>
              ) : null}
            </div>

            {/* Dosage */}
            <div className="form-group">
              <label htmlFor="dosage">Dosage:</label>
              <input
                type="text"
                id="dosage"
                name="dosage"
                value={formik.values.dosage}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control"
                placeholder="Enter dosage"
              />
              {formik.touched.dosage && formik.errors.dosage ? (
                <div className="error">{formik.errors.dosage}</div>
              ) : null}
            </div>

            {/* Instructions */}
            <div className="form-group">
              <label htmlFor="instructions">Instructions:</label>
              <textarea
                id="instructions"
                name="instructions"
                value={formik.values.instructions}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control"
                placeholder="Enter instructions"
              />
              {formik.touched.instructions && formik.errors.instructions ? (
                <div className="error">{formik.errors.instructions}</div>
              ) : null}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary mt-3" disabled={isLoading}>
              {isLoading ? (
                <ThreeDots
                  visible={true}
                  height="10"
                  width="80"
                  color="#091929"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                'Add Prescription'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
)}
