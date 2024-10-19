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
  FaStethoscope,
} from "react-icons/fa";
import "./DoctorHome.css";
import { Blocks } from "react-loader-spinner";
import image from "../../assets/images/doctor.jpeg";

export default function DoctorHome() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI5MjE3NjQxLCJpYXQiOjE3MjkxMzEyNDEsImp0aSI6ImQ0MDBlN2Q1Y2ZhZDQyMjc5NjYzYTcxMDE1MmZjZTJiIiwidXNlcl9pZCI6MjN9.lzR99fz8bX3-IosPbwQay9Zkll4TA8tWEAcU-4cY3eI";
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
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProfile();
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
      <img src={image} alt="Doctor image" className="profile-photo" />
      <h1 className="profile-header">Doctor Information</h1>
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
              <strong>Clinic:</strong> {profile.clinic}
            </p>
          </div>
          <div className="profile-card">
            <FaHospital className="profile-icon" />
            <p>
              <strong>Hospital:</strong> {profile.hospital}
            </p>
          </div>
          <div className="profile-card">
            <FaStethoscope className="profile-icon" />
            <p>
              <strong>Specialization: </strong> {profile.specialization}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
