import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import style from "./ForgetPassword.module.css";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const [apiMessage, setApiMessage] = useState("");
  let navigate = useNavigate();

  const handleSendOtp = async (formData) => {
    try {
      const response = await axios.post(
        "https://grackle-notable-hardly.ngrok-free.app/api/request-password-reset/",
        formData
      );
      setApiMessage("OTP has been sent to your email.");
      navigate("/otp", { state: { email: formik.values.email } });
    } catch (error) {
      console.error(error.response?.data);
      const errorMessage =
        error.response?.data?.error || "An error occurred. Please try again.";
      setApiMessage(errorMessage);
    }
  };

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: handleSendOtp,
  });

  return (
    <div className={style.forgetPasswordWrapper}>
      <h2 className={style.title}>Forgot Password</h2>
      <p className={style.instructions}>
        Please enter your email address. We will send you an OTP to reset your
        password.
      </p>

      {/* Display the API message or error here */}
      {apiMessage && <p className={style.apiMessage}>{apiMessage}</p>}

      <form onSubmit={formik.handleSubmit} className={style.form}>
        <div className={style.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={style.inputField}
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <button type="submit" className={style.submitBtn}>
          Send OTP
        </button>
      </form>
    </div>
  );
}
