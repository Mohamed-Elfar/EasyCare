import React, { useState, useEffect } from "react";
import axios from "axios";
import { DNA } from "react-loader-spinner";
import {
  FaUser,
  FaAddressBook,
  FaBirthdayCake,
  FaPhone,
  FaEnvelope,
  FaGenderless,
  FaClinicMedical,
  FaHospital,
  FaStethoscope,
  FaHeart,
} from "react-icons/fa";

// All category that patient will choose
export default function PatientCatigoryPharmacies() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategory = () => {
    axios
      .get(
        "https://grackle-notable-hardly.ngrok-free.app/api/pharmacists-categories/",
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      )
      .then((response) => {
        // console.log("Pharmacy categories:", response.data); // Log the entire response
        setCategory(response.data); // Assuming response.data is the array of categories
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

      <div className="d-flex flex-wrap flex-column justify-content-center align-items-center p-4 mx-3">
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
        <div className="cardDoc d-flex">
          <div className="container">
            <div className="row">
              {category.map((categoryPharm, index) => (
                <div key={index} className="col-lg-4 ">
                  <div className="DocCat-card rounded-1 py-4  my-4">
                    <div className="d-flex flex-wrap align-items-lg-start">
                      <FaUser className="profile-icon mx-1" />
                      <p>
                        <strong>Pharmacist: </strong>
                        {categoryPharm.full_name || "N/A"}{" "}
                      </p>
                    </div>
                    <div className="d-flex flex-wrap align-items-lg-start">
                      <FaStethoscope className="profile-icon mx-1" />
                      <p>
                        <strong>Pharmacy Name: </strong>
                        {categoryPharm.pharmacy_name || "N/A"}
                      </p>
                    </div>
                    <div className="d-flex flex-wrap  align-items-lg-start">
                      <FaEnvelope className="profile-icon mx-1" />

                      <p>
                        <strong>Pharmacy Address: </strong>{" "}
                        {categoryPharm.pharmacy_address || "N/A"}
                      </p>
                    </div>
                    <div className="d-flex flex-wrap  align-items-lg-start">
                      <FaPhone className="profile-icon mx-1" />
                      <p>
                        <strong>Pharmacy Number: </strong>{" "}
                        {categoryPharm.phone_number || "N/A"}
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
