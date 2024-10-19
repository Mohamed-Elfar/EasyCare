import React from 'react'
import './Home.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import doctorImage from '../../assets/images/doctor.png';
import doctorIcon from '../../assets/images/banner.png';
import patientImage from '../../assets/images/patient.png';
import pharmacistImage from '../../assets/images/pharmacy.png';
import doctorImage1 from '../../assets/images/doctorI.png';

export default function Home() {
  return (
    <>
    <div className="hero-container">
            <div className="hero-content">
                <h1>Doctor, Patient, and Pharmacist - All in One Place</h1>
                <button className="cta-button">Let’s Start</button>
            </div>
            <div className="hero-image-icon">
                <img src={doctorIcon} alt="Healthcare Professional" />
            </div>
            <div className="hero-image">
                <img src={doctorImage} alt="Healthcare Professional" />
            </div>
           
        </div>
        <Container className="my-5">
      <h2 className="text-center mb-4">Our Features</h2>
      <Row>
        
        <Col md={4} className="mb-4">
          <Card >
          <Card.Img variant="top" src={doctorImage1}  /> 
            <Card.Body>
              <Card.Title>Doctor Services</Card.Title>
              <Card.Text>
              Specialized doctors available to provide the best healthcare and meet patients' needs.
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
              Comprehensive care for patients, ensuring good health and comfort.
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
              A fully stocked pharmacy offering all necessary medications and medical supplies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <div className="cta-container">
      <div className="cta-content text-center">
        <h2 className="cta-heading">Take the First Step Towards Better Health</h2>
        <p className="cta-text">Join us today and get personalized healthcare solutions.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>


    </>
  )
}
