import React, { useState } from "react";
import style from "./Login.module.css"; // Custom CSS for styling
import { useFormik } from "formik";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  let [apiError, setError] = useState("");

  // Handle login
  async function handleRegister(formsData) {
    await axios
      .post(
        "https://grackle-notable-hardly.ngrok-free.app/api/login/",
        formsData
      )
      .then((response) => {
        response.data.user_type === "pharmacist"
          ? navigate("/pharmacistHome")
          : response.data.user_type === "doctor"
          ? navigate("/doctorHome")
          : navigate("/patientHome");
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  }

  let formik = useFormik({
    initialValues: {
      national_id: "",
      password: "",
    },
    onSubmit: handleRegister,
  });

  return (
    <div className={style.loginWrapper}>
      <div className={style.loginContainer}>
        <h2 className={`${style.loginTitle} fade-in`}>Login</h2>

        {/* Display API Error if any */}
        {apiError && (
          <p className={`text-danger text-center ${style.errorMsg}`}>
            {apiError}
          </p>
        )}

        <form className={style.loginForm} onSubmit={formik.handleSubmit}>
          <div className={`${style.formGroup} slide-in`}>
            <label htmlFor="nationalId">National ID</label>
            <input
              type="text"
              className={style.inputField}
              id="nationalId"
              name="national_id"
              value={formik.values.national_id}
              onChange={formik.handleChange}
              placeholder="Enter your National ID"
            />
          </div>

          <div className={`${style.formGroup} slide-in`}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={style.inputField}
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter your Password"
            />
          </div>

          <div className={`${style.formActions} fade-in`}>
            {/* Forgot Password Link */}
            <NavLink
              to={"/forgotPassword"}
              className={style.forgotPasswordLink}
            >
              Forgot Password?
            </NavLink>

            <button className={style.loginBtn} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
