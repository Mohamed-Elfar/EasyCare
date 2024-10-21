import React from "react";
import style from "./NotFound.module.css";
import image from "../../assets/images/errorPage.png";
export default function NotFound() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-gradient bg-dark">
      <div className=" watermark position-absolute top-50 start-50 translate-middle text-white">
        <div className="text-center position-relative">
          <img src={image} alt="Logo" className="w-100" />
        </div>
      </div>
    </div>
  );
}
