import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import NavBar from './components/NavBar/NavBar'
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import PatientRegister from "./components/PatientRegister/PatientRegister";
import Doctors from "./components/Doctors/Doctors";
import PharmacyRegister from "./components/PharmacyRegister/PharmacyRegister";
import PharmacistHome from "./components/PharmacistHome/PharmacistHome";
import Contact from "./components/Contact/Contact";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Role from "./components/Role/Role";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import UserContextProvider from "./components/UserContext/UserContext";

import Otp from "./components/Otp/Otp";
import DoctorHome from "./components/DoctorHome/DoctorHome";
import PatientHome from "./components/PatientHome/PatientHome";
<<<<<<< HEAD
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
=======
//
>>>>>>> 968ec190a610e9b628d7bc3568673f1c56b31938
function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "home",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        { path: "patientRegister", element: <PatientRegister /> },
        {
          path: "doctors",
          element: (
            <ProtectedRoute>
              <Doctors />
            </ProtectedRoute>
          ),
        },
        { path: "pharmacyRegister", element: <PharmacyRegister /> },
        {
          path: "pharmacistHome",
          element: (
            <ProtectedRoute>
              {" "}
              <PharmacistHome />
            </ProtectedRoute>
          ),
        },
        {
          path: "doctorHome",
          element: (
            <ProtectedRoute>
              <DoctorHome />
            </ProtectedRoute>
          ),
        },
        {
          path: "patientHome",
          element: (
            <ProtectedRoute>
              <PatientHome />
            </ProtectedRoute>
          ),
        },
        { path: "forgotPassword", element: <ForgetPassword /> },
        { path: "otp", element: <Otp /> },
        { path: "contact", element: <Contact /> },
        { path: "role", element: <Role /> },
        { path: "role/register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <UserContextProvider>
        <RouterProvider router={routers}></RouterProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
