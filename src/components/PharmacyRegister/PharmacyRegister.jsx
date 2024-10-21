// import React from 'react'
import "./PharmacyRegister.css";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Blocks } from "react-loader-spinner";
import image from "../../assets/images/patient.jpg";
export default function PharmacyRegister() {
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  async function handelRegister(values) {
    setLoading(true);
    setApiError(null);
    const updatedValues = {
      ...values,
      user_type: "pharmacist",
    };
    try {
      const response = await axios.post(
        "https://grackle-notable-hardly.ngrok-free.app/api/register/",
        updatedValues
      );
      if (response.data.status === "User created") {
        navigate("/login");
      }
    } catch (error) {
      setApiError(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  let validationSchema = Yup.object({
    full_name: Yup.string()
      .required("Full Name is required")
      .min(5, "Min length is 5")
      .max(30, "Max length is 30"),
    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid E-mail"),
    phone_number: Yup.string()
      .required("Phone is required")
      .matches(/^01[0-9]{9}$/, "Phone is not valid"),
    password: Yup.string()
      .required("Password is required")
      .matches(/[A-Za-z\d]{6,12}/, "Password must be between 6-12 characters"),
    national_id: Yup.string()
      .required("National ID is required")
      .matches(/^[0-9]{14}$/, "Your National ID must be 14 numbers"),
    birthday: Yup.date()
      .required("Birthday is required")
      .max(new Date(), "Birthday can't be in the future"),
    address: Yup.string()
      .required("Address is required")
      .min(10, "Min length is 10")
      .max(50, "Max length is 50"),
    pharmacy_name: Yup.string()
      .required("Pharmacy Name is required")
      .min(5, "Min length is 5")
      .max(25, "Max length is 25"),
    pharmacy_address: Yup.string()
      .required("Pharmacy Address is required")
      .min(5, "Min length is 5")
      .max(50, "Max length is 50"),
  });

  let formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      phone_number: "",
      national_id: "",
      gender: "",
      birthday: "",
      address: "",
      pharmacy_name: "",
      pharmacy_address: "",
    },
    validationSchema: validationSchema,
    onSubmit: handelRegister,
  });
  return (
    <>
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card border border-light-subtle rounded-3 shadow-sm">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="text-center mb-3">
                    {/* Logo placeholder */}
                  </div>
                  <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                    Enter your details to register
                  </h2>
                  {apiError && <div className="text-danger">{apiError}</div>}
                  <form onSubmit={formik.handleSubmit} action="#!">
                    <div className="row gy-2 overflow-hidden">
                      {/* Full Name Field */}
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            className={`form-control ${
                              formik.touched.full_name &&
                              formik.errors.full_name
                                ? "is-invalid"
                                : ""
                            }`}
                            name="full_name"
                            value={formik.values.full_name}
                            id="full_name"
                            placeholder="Full Name"
                            required
                          />
                          <label htmlFor="full_name" className="form-label">
                            Write Full Name
                          </label>
                          {formik.touched.full_name &&
                          formik.errors.full_name ? (
                            <div className="text-danger">
                              {formik.errors.full_name}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="email"
                            className={`form-control ${
                              formik.touched.email && formik.errors.email
                                ? "is-invalid"
                                : ""
                            }`}
                            name="email"
                            value={formik.values.email}
                            id="email"
                            placeholder="name@example.com"
                            required
                          />
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          {formik.touched.email && formik.errors.email ? (
                            <div className="text-danger">
                              {formik.errors.email}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                            className={`form-control ${
                              formik.touched.password && formik.errors.password
                                ? "is-invalid"
                                : ""
                            }`}
                            name="password"
                            value={formik.values.password}
                            id="password"
                            placeholder="Password"
                            required
                          />
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          {formik.touched.password && formik.errors.password ? (
                            <div className="text-danger">
                              {formik.errors.password}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="tel"
                            className={`form-control ${
                              formik.touched.national_id &&
                              formik.errors.national_id
                                ? "is-invalid"
                                : ""
                            }`}
                            name="national_id"
                            value={formik.values.national_id}
                            id="national_id"
                            placeholder="National Id"
                            required
                          />
                          <label htmlFor="national_id" className="form-label">
                            National ID
                          </label>
                          {formik.touched.national_id &&
                          formik.errors.national_id ? (
                            <div className="text-danger">
                              {formik.errors.national_id}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="tel"
                            className={`form-control ${
                              formik.touched.phone_number &&
                              formik.errors.phone_number
                                ? "is-invalid"
                                : ""
                            }`}
                            name="phone_number"
                            value={formik.values.phone_number}
                            id="phone"
                            placeholder="Phone"
                            required
                          />
                          <label htmlFor="phone" className="form-label">
                            Phone
                          </label>
                          {formik.touched.phone_number &&
                          formik.errors.phone_number ? (
                            <div className="text-danger">
                              {formik.errors.phone_number}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="" className="form-label">
                          Gender
                        </label>
                        <div className="form-radio">
                          <input
                            className="form-radio-input"
                            type="radio"
                            value="Male"
                            name="gender"
                            id="male"
                            checked={formik.values.gender === "Male"}
                            onChange={formik.handleChange}
                            required
                          />
                          <label
                            className="form-radio-label text-secondary mx-2"
                            htmlFor="male"
                          >
                            Male
                          </label>
                          <label htmlFor="" className="mx-5"></label>
                          <input
                            className="form-radio-input"
                            type="radio"
                            value="Female"
                            name="gender"
                            id="female"
                            checked={formik.values.gender === "Female"}
                            onChange={formik.handleChange}
                            required
                          />
                          <label
                            className="form-radio-label text-secondary mx-2"
                            htmlFor="female"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="date"
                            className={`form-control ${
                              formik.touched.birthday && formik.errors.birthday
                                ? "is-invalid"
                                : ""
                            }`}
                            name="birthday"
                            value={formik.values.birthday}
                            id="birthday"
                            placeholder="Birthday"
                            required
                          />
                          <label htmlFor="birthday" className="form-label">
                            Birthday
                          </label>
                          {formik.touched.birthday && formik.errors.birthday ? (
                            <div className="text-danger">
                              {formik.errors.birthday}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            className={`form-control ${
                              formik.touched.address && formik.errors.address
                                ? "is-invalid"
                                : ""
                            }`}
                            name="address"
                            value={formik.values.address}
                            id="address"
                            placeholder="Address"
                            required
                          />
                          <label htmlFor="address" className="form-label">
                            Your Address
                          </label>
                          {formik.touched.address && formik.errors.address ? (
                            <div className="text-danger">
                              {formik.errors.address}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            className={`form-control ${
                              formik.touched.pharmacy_name &&
                              formik.errors.pharmacy_name
                                ? "is-invalid"
                                : ""
                            }`}
                            name="pharmacy_name"
                            value={formik.values.pharmacy_name}
                            id="pharmacy_name"
                            placeholder="Pharmacy Name"
                            required
                          />
                          <label htmlFor="pharmacy_name" className="form-label">
                            Pharmacy Name
                          </label>
                          {formik.touched.pharmacy_name &&
                          formik.errors.pharmacy_name ? (
                            <div className="text-danger">
                              {formik.errors.pharmacy_name}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            className={`form-control ${
                              formik.touched.pharmacy_address &&
                              formik.errors.pharmacy_address
                                ? "is-invalid"
                                : ""
                            }`}
                            name="pharmacy_address"
                            value={formik.values.pharmacy_address}
                            id="pharmacy_address"
                            placeholder="Pharmacy Address"
                            required
                          />
                          <label
                            htmlFor="pharmacy_address"
                            className="form-label"
                          >
                            Pharmacy Address
                          </label>
                          {formik.touched.pharmacy_address &&
                          formik.errors.pharmacy_address ? (
                            <div className="text-danger">
                              {formik.errors.pharmacy_address}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col-12">
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
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="RegisterImage">
                <img src={image} alt="register page" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
