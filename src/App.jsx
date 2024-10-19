import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import NavBar from './components/NavBar/NavBar'
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import PatientRegister from "./components/PatientRegister/PatientRegister";
import Doctors from "./components/Doctors/Doctors";
import PharmacyRegister from "./components/PharmacyRegister/PharmacyRegister";

import Contact from "./components/Contact/Contact";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Role from "./components/Role/Role";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import UserContextProvider from "./components/UserContext/UserContext";
import Otp from "./components/Otp/Otp";

function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "patientRegister", element: <PatientRegister /> },
        { path: "doctors", element: <Doctors /> },
        { path: "pharmacyRegister", element: <PharmacyRegister /> },
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
