import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Blocks } from "react-loader-spinner";
import "./Doctors.css";

const DoctorRegister = () => {
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  async function submitRegister(values) {
    setLoading(true);
    const updatedValues = {
      ...values,
      user_type: "doctor",
    };

    try {
      const { data } = await axios.post(
        `https://grackle-notable-hardly.ngrok-free.app/api/register/`,
        updatedValues
      );

      if (data.status === "User created") {
        setLoading(false);
        navigate("/Login");
      }
    } catch (error) {
      setLoading(false);
      setApiError(error.response.data.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      national_id: "",
      phone_number: "",
      password: "",
      gender: "",
      birthday: "",
      address: "",
      hospital: "",
      clinic: "",
      specialization: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required("Full Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      national_id: Yup.string()
        .length(14, "National ID must be exactly 14 digits")
        .matches(/^\d+$/, "National ID must be numeric")
        .required("National ID is required"),
      phone_number: Yup.string().required("Phone Number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      gender: Yup.string().required("Gender is required"),
      birthday: Yup.date()
        .max(
          new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
          "You must be at least 1 year old"
        ) // Ensure age is at least 1 year
        .required("Birthday is required")
        .nullable(),
      address: Yup.string().required("Address is required"),
      hospital: Yup.string().required("Hospital is required"),
      clinic: Yup.string().required("Clinic is required"),
      specialization: Yup.string().required("Specialization is required"),
    }),
    onSubmit: submitRegister,
  });

  return (
    <main className="d-flex justify-content-center align-items-center py-5">
      <section className="body d-flex shadow ">
        <div className="photo w-50 rounded">
          <img
            src="src/assets/images/doctorReg.jpg"
            className="rounded border-0"
            alt=""
          />
        </div>

        <div className="form p-2 py-4 shadow">
          <form
            onSubmit={formik.handleSubmit}
            className="d-flex flex-column align-items-center justify-content-center gap-2"
          >
            <h2>Sign Up</h2>
            {apiError && <div className="error">{apiError}</div>}{" "}
            {/* Show API error */}
            {[
              "full_name",
              "email",
              "national_id",
              "phone_number",
              "password",
              "birthday",
              "address",
              "hospital",
              "clinic",
              "specialization",
            ].map((field) => (
              <div className="input-group" key={field}>
                <label htmlFor={field}>
                  {field
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                  :
                </label>
                <input
                  type={
                    field === "password"
                      ? "password"
                      : field === "birthday"
                      ? "date"
                      : "text"
                  }
                  name={field}
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched[field] && formik.errors[field] ? (
                  <div className="error">{formik.errors[field]}</div>
                ) : null}
              </div>
            ))}
            <div className="input-group">
              <label htmlFor="gender">Gender:</label>
              <select
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {formik.touched.gender && formik.errors.gender ? (
                <div className="error">{formik.errors.gender}</div>
              ) : null}
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center">
              {loading ? (
                <button
                  type="button"
                  className="btn myBtn fw-bold mt-3 px-4 py-2"
                >
                  <Blocks
                    height="28"
                    width="40"
                    color="white"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    visible={true}
                  />
                </button>
              ) : (
                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  type="submit"
                  className="btn myBtn fw-bold mt-3 px-3 py-2"
                >
                  Register
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default DoctorRegister;
