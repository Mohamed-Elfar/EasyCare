import React, { useContext, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "./../Footer/Footer";
import { Outlet } from "react-router-dom";
import { userContext } from "../UserContext/UserContext";

export default function Layout() {
  const { userToken, setUserToken } = useContext(userContext);

  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserToken(localStorage.getItem("userToken"));
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className=" min-vh-100 ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
