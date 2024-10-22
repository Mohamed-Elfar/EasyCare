import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./NavBar.css";
import imageL from "../../assets/images/imageLogo.png";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { userContext } from "../UserContext/UserContext";
import { FaUser } from "react-icons/fa";

export default function NavBar() {
  const { userToken, setUserToken } = useContext(userContext);
  const { userType, setUserType } = useContext(userContext);
  let navigate = useNavigate();

  async function logout() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userType");
    setUserToken(null);
    setUserType(null);
    navigate("/login");
  }

  const profileLink =
    userType === "patient"
      ? "/patientHome"
      : userType === "doctor"
      ? "/doctorProfile"
      : userType === "pharmacist"
      ? "/pharmacistHome"
      : "/";
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="home">
            <Row className="align-items-center">
              <Col xs={12} md={2}>
                <img
                  src={imageL}
                  alt="Logo"
                  width="60"
                  height="60"
                  className="d-inline-block"
                />
              </Col>
              <Col xs={12} md={10}>
                <h1 className="brand m-3">EasyCare</h1> {/* العنوان */}
              </Col>
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ms-auto">
              <ul className="navbar-nav mx-auto signUP">
                {userToken !== null ? (
                  <>
                    <li className="nav-item">
                      <Link
                        to={"/contact"}
                        className="nav-link custom-nav-link px-3 py-3"
                      >
                        Contact us
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link custom-nav-link px-3 py-3"
                        aria-current="page"
                        to={"/role"}
                      >
                        JOIN US
                      </Link>
                    </li>
                  </>
                )}

                {userToken !== null ? (
                  <>
                    <li className="nav-item">
                      <Link
                        onClick={() => {
                          logout();
                        }}
                        className="nav-link custom-nav-link px-3 py-3"
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link custom-nav-link py-3"
                        aria-current="page"
                        to={"/login"}
                      >
                        Login
                      </Link>
                    </li>
                  </>
                )}

                {userToken && (
                  <li className=" d-flex align-items-center">
                    <Link
                      to={profileLink}
                      onClick={() => console.log(userType)}
                      className="nav-profile-link"
                    >
                      <FaUser size={24} /> {/* Profile icon */}
                    </Link>
                  </li>
                )}
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
