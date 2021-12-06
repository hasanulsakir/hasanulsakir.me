import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aboutpic from '../../../image/profile/sakir2.jpg';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import './About.css';
import ScrollAnimation from 'react-animate-on-scroll';
const About = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col sm="12" xs="12" md="5" lg="5">
            <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut">
              <div className="shadow aboutImg">

                <img className="img-fluid" src={Aboutpic} alt="About Images" />

              </div></ScrollAnimation>
          </Col>
          <Col sm="12" xs="12" md="7" lg="7">
            <div className="text-lg-start mt-5 mx-lg-3 mx-md-3 mx-sm-0 text-md-start">
              <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut">
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
              </ScrollAnimation>
              <div className="d-flex flex-md-row  gap-3 flex-sm-column flex-wrap justify-content-evenly">
                <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut">
                  <a href="/resume" target="_blank">
                    <Button className="boxBackground fontSM border-0 shadow py-3 px-4 text-danger fw-bold">View Cv</Button>

                  </a>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut">
                  <a href="../../../pdf/cv.hasanulkarim.pdf" target="_blank">
                    <Button className="boxBackground fontSM mx-3 border-0 shadow py-3 px-4 text-danger fw-bold">Download Cv</Button>

                  </a>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" >
                  <Link to="/contact">

                    <Button className="boxBackground fontSM border-0 shadow py-3 px-4">Hire Me</Button>
                  </Link>
                </ScrollAnimation>

              </div>
            </div>
          </Col>
        </Row>


        <div className="mt-5 mx-4">

          <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut">
            <h3 className="my-4">What I am Doing</h3>
          </ScrollAnimation>
          <Row>
            <Col xs="12" sm="12" lg="6" md="6">
              <ScrollAnimation animateIn="animate__pulse" animateOut="animate__fadeOut">
                <div className=" text-center justify-content-center boxBg px-4 py-4 mb-4 cardBox">
                  <div className="text-danger mb-3">
                    <CodeIcon fontSize="large" style={{ fontSize: "3rem" }} />
                  </div>
                  <h2>Web Development</h2>
                  <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
              </ScrollAnimation>
            </Col>
            <Col xs="12" sm="12" lg="6" md="6">
              <ScrollAnimation animateIn="animate__pulse" animateOut="animate__fadeOut">
                <div className=" text-center justify-content-center boxBg px-4 py-4 mb-4 cardBox">
                  <div className="text-danger mb-3">
                    <WebIcon fontSize="large" style={{ fontSize: "3rem" }} />
                  </div>
                  <h2>Web Design</h2>
                  <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
              </ScrollAnimation>
            </Col>



          </Row>
        </div>
        <div className="mt-4 mx-4">

          <Row>
            <Col xs="12" sm="12" lg="6" md="6">
              <ScrollAnimation animateIn="animate__pulse" animateOut="animate__fadeOut">
                <div className=" text-center justify-content-center boxBg px-4 py-4 mb-4 cardBox">
                  <div className="text-danger mb-3">
                    <DesignServicesIcon fontSize="large" style={{ fontSize: "3rem" }} />
                  </div>
                  <h2>Graphics</h2>
                  <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
              </ScrollAnimation>
            </Col>
            <Col xs="12" sm="12" lg="6" md="6">
              <ScrollAnimation animateIn="animate__pulse" animateOut="animate__fadeOut">
                <div className=" text-center justify-content-center boxBg px-4 py-4 mb-4 cardBox">
                  <div className="text-danger mb-3">
                    <ConnectWithoutContactIcon fontSize="large" style={{ fontSize: "3rem" }} />
                  </div>
                  <h2>Digital Marketing</h2>
                  <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
              </ScrollAnimation>
            </Col>



          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;