import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useLocation } from "react-router-dom";
import style from "./Otp.module.css";

export default function Otp() {
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  const location = useLocation();
  const email = location.state?.email;

  const otpFormik = useFormik({
    initialValues: {
      otp: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://grackle-notable-hardly.ngrok-free.app/api/verify-otp/",
          {
            email,
            otp: values.otp,
          }
        );
        if (response.data.status === "OTP verified successfully.") {
          setIsOtpVerified(true);
          setApiMessage("OTP verified successfully.");
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.error || "An error occurred. Please try again.";
        setApiMessage(errorMessage);
      }
    },
  });

  const passwordFormik = useFormik({
    initialValues: {
      new_password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://grackle-notable-hardly.ngrok-free.app/api/set-new-password/",
          {
            email,
            otp: otpFormik.values.otp,
            new_password: values.new_password,
          }
        );
        if (response.data.status === "Password updated successfully.") {
          setApiMessage("Your password has been updated successfully.");
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.error || "An error occurred. Please try again.";
        setApiMessage(errorMessage);
      }
    },
  });

  return (
    <div className={style.otpWrapper}>
      <h2 className={style.title}>Enter OTP</h2>

      {/* Display the API message or error here */}
      {apiMessage && (
        <p
          className={style.apiMessage}
          style={{
            color: apiMessage.includes("successfully") ? "green" : "red",
          }}
        >
          {apiMessage}
        </p>
      )}

      {/* OTP Form */}
      {!isOtpVerified ? (
        <form onSubmit={otpFormik.handleSubmit} className={style.form}>
          <div className={style.formGroup}>
            <label htmlFor="otp">OTP</label>
            <input
              type="text"
              id="otp"
              name="otp"
              className={style.inputField}
              value={otpFormik.values.otp}
              onChange={otpFormik.handleChange}
              placeholder="Enter the OTP"
              required
            />
          </div>
          <button type="submit" className={style.submitBtn}>
            Verify OTP
          </button>
        </form>
      ) : (
        // New Password Form
        <form onSubmit={passwordFormik.handleSubmit} className={style.form}>
          <div className={style.formGroup}>
            <label htmlFor="new_password">New Password</label>
            <input
              type="password"
              id="new_password"
              name="new_password"
              className={style.inputField}
              value={passwordFormik.values.new_password}
              onChange={passwordFormik.handleChange}
              placeholder="Enter your new password"
              required
            />
          </div>
          <button type="submit" className={style.submitBtn}>
            Set New Password
          </button>
        </form>
      )}
    </div>
  );
}
