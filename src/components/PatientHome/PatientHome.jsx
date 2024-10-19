import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaUser,
  FaAddressBook,
  FaBirthdayCake,
  FaPhone,
  FaEnvelope,
  FaGenderless,
  FaClinicMedical,
  FaHospital,
  FaNotesMedical,
} from "react-icons/fa";
import { Blocks } from "react-loader-spinner";
import image from "../../assets/images/patient.jpeg";
import "./PatientHome.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const PatientHome = async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI5NDQ1MTg5LCJpYXQiOjE3MjkzNTg3ODksImp0aSI6IjJlYWE0YzllOTcwZTRmMTY5YjY5MTA1NjMyYzZiYjBjIiwidXNlcl9pZCI6NTh9.dVwg7JibP-yLNJk4ia80NInEUX5xXhEBOR4u3jU7eTU";
      try {
        const response = await axios.get(
          "https://grackle-notable-hardly.ngrok-free.app/api/profile/",
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    PatientHome();
  }, []);

  if (loading)
    return (
      <div className="loading-container">
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          colors={["#FF6F61", "#FFD700", "#3CB371"]}
        />
      </div>
    );

  if (error)
    return (
      <div className="error-container">
        <p className="error">Error fetching profile: {error.message}</p>
      </div>
    );

  return (
    <div className="profile-container">
      <img src={image} alt="Doctor" className="profile-photo" />
      <h1 className="profile-header">Patient Information</h1>
      {profile && (
        <div className="profile-cards">
          <div className="profile-card">
            <FaUser className="profile-icon" />
            <p>
              <strong>Full Name:</strong> {profile.full_name}
            </p>
          </div>
          <div className="profile-card">
            <FaAddressBook className="profile-icon" />
            <p>
              <strong>Address:</strong> {profile.address}
            </p>
          </div>
          <div className="profile-card">
            <FaBirthdayCake className="profile-icon" />
            <p>
              <strong>Birthday:</strong> {profile.birthday}
            </p>
          </div>
          <div className="profile-card">
            <FaPhone className="profile-icon" />
            <p>
              <strong>Phone Number:</strong> {profile.phone_number}
            </p>
          </div>
          <div className="profile-card">
            <FaEnvelope className="profile-icon" />
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
          </div>
          <div className="profile-card">
            <FaGenderless className="profile-icon" />
            <p>
              <strong>Gender:</strong> {profile.gender}
            </p>
          </div>
          <div className="profile-card">
            <FaClinicMedical className="profile-icon" />
            <p>
              <strong>User Type:</strong> {profile.user_type}
            </p>
          </div>
          <div className="profile-card">
            <FaNotesMedical className="profile-icon" />
            <p>
              <strong>Diabetes:</strong> {profile.diabetes ? "Yes" : "No"}
            </p>
          </div>
          <div className="profile-card">
            <FaNotesMedical className="profile-icon" />
            <p>
              <strong>Heart Disease:</strong>{" "}
              {profile.heart_disease ? "Yes" : "No"}
            </p>
          </div>
          <div className="profile-card">
            <FaNotesMedical className="profile-icon" />
            <p>
              <strong>Allergies:</strong> 
              {Array.isArray(profile.allergies) && profile.allergies.length > 0 
                ? profile.allergies.join(", ") 
                : "None"}
            </p>
          </div>
          <div className="profile-card">
            <FaNotesMedical className="profile-icon" />
            <p>
              <strong>Other Diseases:</strong> {profile.other_diseases}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
