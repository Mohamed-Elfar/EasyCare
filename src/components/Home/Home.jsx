import React from "react";
import "./Home.css";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import doctorImage from "../../assets/images/doctor.png";
import doctorIcon from "../../assets/images/banner.png";
import patientImage from "../../assets/images/patient.png";
import pharmacistImage from "../../assets/images/pharmacy.png";
import doctorImage1 from "../../assets/images/doctorI.png";
import testimonialimg1 from "../../assets/images/doctorTest.jpeg";
import testimonialimg2 from "../../assets/images/PharmacistTest.jpeg";
import testimonialimg3 from "../../assets/images/patientTest.jpeg";
import newsimg1 from "../../assets/images/Designer.jpeg";
import newsimg2 from "../../assets/images/Designer2.jpeg";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Doctor, Patient, and Pharmacist - All in One Place</h1>
          <Link to={"/role"}>
            <button className="cta-button">Let’s Start</button>
          </Link>
        </div>
        <div className="hero-image-icon">
          <img src={doctorIcon} alt="Healthcare Professional" />
        </div>
        <div className="hero-image">
          <img src={doctorImage} alt="Healthcare Professional" />
        </div>
      </div>

      {/* Features Section */}
      <Container className="my-5">
        <h2 className="section-header">Our Features</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={doctorImage1} />
              <Card.Body>
                <Card.Title>Doctor Services</Card.Title>
                <Card.Text>
                  Specialized doctors available to provide the best healthcare
                  and meet patients' needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={patientImage} />
              <Card.Body>
                <Card.Title>Patient Care</Card.Title>
                <Card.Text>
                  Comprehensive care for patients, ensuring good health and
                  comfort.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={pharmacistImage} />
              <Card.Body>
                <Card.Title>Pharmacy Services</Card.Title>
                <Card.Text>
                  A fully stocked pharmacy offering all necessary medications
                  and medical supplies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section */}
      <div className="cta-container">
        <div className="cta-content text-center">
          <h2 className="cta-heading">
            Take the First Step Towards Better Health
          </h2>
          <p className="cta-text">
            Join us today and get personalized healthcare solutions.
          </p>
          <Link to={"/role"}>
            <button className="cta-button">Get Started</button>
          </Link>
        </div>
      </div>

      {/* Latest News Section */}
      <Container className="my-5 news-section">
        <h2 className="section-header text">Latest News</h2>
        <Row>
          <Col md={6}>
            <Card className="news-card shadow mb-4">
              <Card.Img
                variant="top"
                src={newsimg1}
                className="rounded-circle py-2"
              />
              <Card.Body>
                <Card.Title>Telemedicine Service Now Available</Card.Title>
                <Card.Text>
                  Our new telemedicine service allows patients to get expert
                  consultations without leaving their homes.
                </Card.Text>
                <Link to="/news/telemedicine">
                  <button className="news-button">Read More</button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="news-card shadow mb-4">
              <Card.Img
                variant="top"
                className="rounded-circle py-2"
                src={newsimg2}
              />
              <Card.Body>
                <Card.Title>Expanded Pharmacy Services</Card.Title>
                <Card.Text>
                  We are excited to announce expanded pharmacy services with
                  home delivery options for patients.
                </Card.Text>
                <Link to="/news/pharmacy">
                  <button className="news-button">Read More</button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <Container className="my-5 testimonials-section">
        <h2 className="section-header">What Our Clients Say</h2>
        <Slider {...settings}>
          <div>
            <Card className="testimonial-card shadow p-4 mb-5 bg-light ">
              <Card.Body>
                <Card.Text className="quote-text">
                  “Amazing service! The doctors are very professional, and I
                  felt cared for throughout the process.”
                </Card.Text>

                <div>
                  <strong>John Doe</strong>
                  <br />
                  <span>Patient</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="testimonial-card shadow p-4 mb-5 bg-light rounded">
              <Card.Body>
                <Card.Text className="quote-text">
                  “The healthcare here is exceptional, and the pharmacy service
                  makes everything so convenient.”
                </Card.Text>

                <div>
                  <strong>Jane Smith</strong>
                  <br />
                  <span>Pharmacist</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="testimonial-card shadow p-4 mb-5 bg-light rounded">
              <Card.Body>
                <Card.Text className="quote-text">
                  “Having all my healthcare needs met in one place makes life so
                  much easier. Highly recommend!”
                </Card.Text>
                <div>
                  <strong>Emily Johnson</strong>
                  <br />
                  <span>Patient</span>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </Container>
      {/* FAQ Section */}
      <Container className="my-5 ">
        <h2 className="text-center mb-4 section-header">Frequently Asked Questions</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How can I book an appointment?</Accordion.Header>
            <Accordion.Body>
              You can book an appointment online through our website or mobile
              app. Just click "Book Now" and follow the steps.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Are the pharmacy services available 24/7?
            </Accordion.Header>
            <Accordion.Body>
              Yes, our pharmacy services are available round the clock to ensure
              you have access to medications whenever needed.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How do I contact customer support?
            </Accordion.Header>
            <Accordion.Body>
              You can reach us via the "Contact Us" page or call our support
              hotline for immediate assistance.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}
