import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./PatientCatigoryDoctors.module.css";
import { DNA } from "react-loader-spinner";
import {
  FaUser,
  FaStethoscope,
  FaPhone,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

export default function PatientCatigoryDoctors() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategory = () => {
    axios
      .get(
        "https://grackle-notable-hardly.ngrok-free.app/api/doctors-categories/",
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      )
      .then((response) => {
        setCategory(response.data);
        setLoading(false); // Data fetched successfully
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false); // Stop loading even in case of error
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <hr />
      <div className="d-flex flex-column justify-content-center align-items-center p-4 mx-3 mt-5">
        <h2 className="catDoc">Our Categories</h2>
        <p className="catDoc">
          You Can Choose Your Favorite Doctor and Your Nearest Pharmacy From Our
          Categories
        </p>
      </div>
      {loading ? (
        <div className="loading">
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <div className="cardDoc d-flex justify-content-center">
          <div className="container">
            <div className="row">
              {category.map((categoryDoc, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 my-3">
                  <div className="DocCat-card rounded-1 py-4">
                    <div className="d-flex align-items-start">
                      <FaUser className="profile-icon mx-1" />
                      <p>
                        <strong>DOC: </strong>
                        {categoryDoc.full_name || "N/A"}
                      </p>
                    </div>
                    <div className="d-flex align-items-start">
                      <FaStethoscope className="profile-icon mx-1" />
                      <p>
                        <strong>Specialization: </strong>
                        {categoryDoc.specialization || "N/A"}
                      </p>
                    </div>
                    <div className="d-flex align-items-start">
                      <FaEnvelope className="profile-icon mx-1" />
                      <p>
                        <strong>Email: </strong> {categoryDoc.email || "N/A"}
                      </p>
                    </div>
                    <div className="d-flex align-items-start">
                      <FaPhone className="profile-icon mx-1" />
                      <p>
                        <strong>Clink Number: </strong>{" "}
                        {categoryDoc.phone_number || "N/A"}
                      </p>
                    </div>
                    <div className="d-flex justify-content-end align-items-end">
                      <FaHeart className="love" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
