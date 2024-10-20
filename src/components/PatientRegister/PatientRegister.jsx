import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import image from "../../assets/images/medical.65d592a94c9a25.07563121 (1).png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

import { Blocks } from "react-loader-spinner";

export default function PatientRegister() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function submitRegister(values) {
    setIsLoading(true);
    const updatedValues = {
      ...values,
      user_type: "patient",
    };

    try {
      const { data } = await axios.post(
        `https://grackle-notable-hardly.ngrok-free.app/api/register/`,
        updatedValues
      );

      if (data.status === "User created") {
        setIsLoading(false);
        toast.success("Successfully Registered!");
        navigate("/Login");
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.message);
    }
  }

  let validationSchema = Yup.object({
    full_name: Yup.string()
      .matches(
        /^[a-zA-Z]{3,}(?: [a-zA-Z]+){1,3}$/,
        "Name should include a first name with at least 3 letters and at least one additional name. You may include up to three additional names. Only alphabetic characters and spaces are allowed."
      )
      .required("Name is required"),
    email: Yup.string()
      .email("Email pattern is invalid")
      .required("Email is required"),
    national_id: Yup.string()
      .matches(/^\d{14}$/, "National ID must be a number.")
      .required("National id is required"),
    phone_number: Yup.string()
      .matches(
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/.0-9]*$/,
        "Phone is invalid"
      )
      .required("Phone is required"),
    password: Yup.string()
      .matches(
        /^[A-Za-z0-9]{9,20}/,
        "Please enter a password that is 9 to 20 characters long. The password can only contain letters (A-Z, a-z) and numbers (0-9)."
      )
      .required("Password is required")
      .min(9)
      .max(20),
    gender: Yup.string()
      .oneOf(["male", "female"], "Please choose one")
      .required("Please choose one"),
    birthday: Yup.date().required("Please enter your date of birth"),
    address: Yup.string()
      .matches(
        /^[a-zA-Z0-9\s,.'-]{5,100}$/,
        "Please enter a valid address. It should be between 5 and 100 characters long (e.g., 123 Main St., Apt 4B)"
      )
      .required("Address is required"),
    diabetes: Yup.boolean().required("Please choose one"),
    heart_disease: Yup.boolean().required("Please choose one"),
    allergies: Yup.string()
      .matches(
        /^[a-zA-Z\s,]{3,100}$/,
        "Please enter any allergies, separated by commas (e.g., peanuts, shellfish)."
      )
      .required("Allergies is required"),
    other_diseases: Yup.string()
      .matches(
        /^[a-zA-Z\s,]{3,100}$/,
        "Please enter any other diseases, separated by commas (e.g., seasonal flu, asthma)."
      )
      .required("other_diseases is required"),
  });

  let formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      national_id: "",
      phone_number: "",
      password: "",
      gender: "",
      birthday: "",
      address: "",
      diabetes: "",
      heart_disease: "",
      allergies: "",
      other_diseases: "",
    },
    validationSchema,
    onSubmit: submitRegister,
  });
  return (
    <>
      <Helmet>
        <title>Patient Register</title>
        <meta name="description" content="easy care patient register page" />
      </Helmet>

      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-start">
              <div>
                <h1 className="fw-bold mb-4">New Patient Enrollment </h1>
                {error ? <div className="alert alert-danger">{error}</div> : ""}
                <form onSubmit={formik.handleSubmit}>
                  <label htmlFor="full_name" className="form-label mt-3">
                    Full Name :
                  </label>
                  <input
                    name="full_name"
                    id="full_name"
                    value={formik.values.full_name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Mary Elizabeth Smith"
                  />
                  {formik.errors.full_name && formik.touched.full_name ? (
                    <div className="text-danger font-bold mt-2 p-2">
                      {formik.errors.full_name}
                    </div>
                  ) : (
                    ""
                  )}

                  <label htmlFor="email" className="form-label mt-3">
                    Email :
                  </label>
                  <input
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    className="form-control"
                    placeholder="hm1234@gmail.com"
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="text-danger font-bold mt-2 p-2">
                      {formik.errors.email}
                    </div>
                  ) : (
                    ""
                  )}

                  <label htmlFor="national_id" className="form-label mt-3">
                    National id :
                  </label>
                  <input
                    name="national_id"
                    id="national_id"
                    value={formik.values.national_id}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="number"
                    className="form-control"
                    placeholder="22183480382445"
                  />
                  {formik.errors.national_id && formik.touched.national_id ? (
                    <div className="text-danger font-bold mt-2 p-2">
                      {formik.errors.national_id}
                    </div>
                  ) : (
                    ""
                  )}

                  <label htmlFor="phone_number" className="form-label mt-3">
                    Phone :
                  </label>
                  <input
                    name="phone_number"
                    id="phone_number"
                    value={formik.values.phone_number}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="tel"
                    className="form-control"
                    placeholder="01288349572"
                  />
                  {formik.errors.phone_number && formik.touched.phone_number ? (
                    <div className="text-danger font-bold mt-2 p-2">
                      {formik.errors.phone_number}
                    </div>
                  ) : (
                    ""
                  )}

                  <label htmlFor="password" className="form-label mt-3">
                    Password :
                  </label>
                  <input
                    name="password"
                    id="password"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    className="form-control"
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className="text-danger font-bold mt-2 p-2">
                      {formik.errors.password}
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="form-label mt-3">Gender:</div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="genderFemale"
                      value="female"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label" htmlFor="genderFemale">
                      Female
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="genderMale"
                      value="male"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label" htmlFor="genderMale">
                      male
                    </label>
                  </div>
                  {formik.errors.gender && formik.touched.gender ? (
                    <div className="text-danger font-bold mt-2 p-2">
                      {formik.errors.gender}
                    </div>
                  ) : (
                    ""
                  )}

                  <label htmlFor="birthday" className="form-label mt-3">
                    Date Of Birth :
                  </label>
                  <input
                    name="birthday"
                    id="birthday"
                    value={formik.values.birthday}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="date"
                    className="form-control"
                  />
                  {formik.errors.birthday && formik.touched.birthday ? (
                    <div className="text-danger font-bold mt-2 p-2">
                      {formik.errors.birthday}
                    </div>
                  ) : (
                    ""
                  )}

                  <label htmlFor="address" className="form-label mt-3">
                    Address :
                  </label>
                  <input
                    name="address"
                    id="address"
                    value={formik.values.address}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="e.g., 123 Main St., Apt 4B"
                  />
                  {formik.errors.address && formik.touched.address ? (
                    <div className="text-danger font-bold mt-2 p-2">
                      {formik.errors.address}
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="form-label mt-3">Do you have diabetes ?</div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="diabetes"
                      id="diabetesTrue"
                      value={true}
                      onBlur={formik.handleBlur}
                      onChange={() => formik.setFieldValue("diabetes", true)}
                      checked={formik.values.diabetes === true}
                    />
                    <label className="form-check-label" htmlFor="diabetesTrue">
                      Yes
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="diabetes"
                      id="diabetesFalse"
                      value={false}
                      onBlur={formik.handleBlur}
                      onChange={() => formik.setFieldValue("diabetes", false)}
                      checked={formik.values.diabetes === false}
                    />
                    <label className="form-check-label" htmlFor="diabetesFalse">
                      No
                    </label>
                  </div>

                  {formik.errors.diabetes && formik.touched.diabetes ? (
                    <div className="text-danger font-bold mt-2 p-2">
                      {formik.errors.diabetes}
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="form-label mt-3">
                    Do you have heart disease ?
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="heart_disease"
                      id="heart_diseaseTrue"
                      value={true}
                      onBlur={formik.handleBlur}
                      onChange={() =>
                        formik.setFieldValue("heart_disease", true)
                      }
                      checked={formik.values.heart_disease === true}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="heart_diseaseTrue"
                    >
                      Yes
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="heart_disease"
                      id="heart_diseaseFalse"
                      value={false}
                      onBlur={formik.handleBlur}
                      onChange={() =>
                        formik.setFieldValue("heart_disease", false)
                      }
                      checked={formik.values.heart_disease === false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="heart_diseaseFalse"
                    >
                      No
                    </label>
                  </div>

                  {formik.errors.heart_disease &&
                  formik.touched.heart_disease ? (
                    <div className="text-danger font-bold mt-2 p-2">
                      {formik.errors.heart_disease}
                    </div>
                  ) : (
                    ""
                  )}

                  <label htmlFor="allergies" className="form-label mt-3">
                    Allergies :
                  </label>
                  <input
                    name="allergies"
                    id="allergies"
                    value={formik.values.allergies}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="e.g., peanuts , shellfish , ..."
                  />
                  {formik.errors.allergies && formik.touched.allergies ? (
                    <div className="text-danger font-bold mt-2 p-2">
                      {formik.errors.allergies}
                    </div>
                  ) : (
                    ""
                  )}
                  <label htmlFor="other_diseases" className="form-label mt-3">
                    Other Diseases :
                  </label>
                  <input
                    name="other_diseases"
                    id="other_diseases"
                    value={formik.values.other_diseases}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="e.g., seasonal flu , asthma , ..."
                  />
                  {formik.errors.other_diseases &&
                  formik.touched.other_diseases ? (
                    <div className="text-danger font-bold mt-2 p-2">
                      {formik.errors.other_diseases}
                    </div>
                  ) : (
                    ""
                  )}
                  {isLoading ? (
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
                </form>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="RegisterImage">
                <img src={image} alt="register page" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
