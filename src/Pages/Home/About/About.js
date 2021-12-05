import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aboutpic from '../../../image/profile/sakir2.jpg';
import './About.css';
const About = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col sm="12" xs="12" md="5" lg="5">
            <div className="shadow aboutImg">
              <img className="img-fluid" src={Aboutpic} alt="About Images" />

            </div>
          </Col>
          <Col sm="12" xs="12" md="7" lg="7">
            <div className="text-lg-start mt-4 mx-3 text-md-start">
              <p className="text-danger fs-6 fw-bold">Visit My Portfolio & Hire Me</p>
              <h2 className="fs-2 text-light fw-bold">About Me</h2>
              <p className="textJustify">I am a young learner intending to continue my developement in IT arena. I am enthusiastic, energetic and I work with decisiveness and onviction. I have a proactive attitude and find positive ways to stimulate and engage with people.
                I am looking forward to a challenging and rewarding position in the IT industry by utilizing my technical and leadership skills to the optimum and growing along with the company.
              </p>
              <div className="d-flex flex-row justify-content-sm-center justify-content-xs-center justify-content-md-start justify-content-lg-start">
                <ul className="list-unstyled disabled">
                  <li>✓</li>
                  <li>✓</li>
                  <li>✓</li>



                </ul>
                <ul className="list-unstyled mx-2 text-start">
                  <li>Web Design Full stack</li>
                  <li>MERN Stack Development</li>
                  <li>Javascript, React.js, Node.js, ExpressJs, MongoDB</li>


                </ul>
              </div>
              <div className="d-flex flex-row justify-content-sm-center justify-content-xs-center justify-content-md-start justify-content-lg-start">
                <a href="/resume" target="_blank">
                  <Button className="boxBackground border-0 shadow py-3 px-4 text-danger fw-bold">View Cv</Button>

                </a>
                <a href="../../../pdf/cv.hasanulkarim.pdf" target="_blank">
                  <Button className="boxBackground mx-3 border-0 shadow py-3 px-4 text-danger fw-bold">Download Cv</Button>

                </a>
                <Link to="/contact">

                  <Button className="boxBackground border-0 shadow py-3 px-4">Hire Me</Button>
                </Link>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;