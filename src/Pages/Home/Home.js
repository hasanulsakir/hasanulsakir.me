import {
    Outlet,
    NavLink
} from "react-router-dom";
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import './Home.css'
const Home = () => {


    return (
        < >

            <div className="mb-5">
                <Header />
            </div>

            <div className=" homeContent">
                <div className="homeBox">
                    <Container fluid>
                        <Row>
                            <Col xs="12" sm="12" md="2" xl="2">
                                <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut">
                                    <div className="navMobileMenu boxBg shadow-lg rounded-3 text-decoration-none">

                                        <div>
                                            <NavLink to="/"
                                                className={({ isActive }) => isActive ? "bg-danger d-block rounded-3 text-decoration-none fw-bold  text-color px-3 py-5" : "d-block text-decoration-none fw-bold  text-color px-3 py-5 rounded-3  navHover"}>About</NavLink>
                                        </div>
                                        <div>
                                            <NavLink to="/resumes" className={({ isActive }) => isActive ? "bg-danger d-block rounded-3 text-decoration-none fw-bold  text-color px-3  py-5" : "d-block text-decoration-none fw-bold  text-color px-3 py-lg-5 py-sm-4 rounded-3  navHover"} >Resume</NavLink>
                                        </div>
                                        <div>
                                            <NavLink to="/myproject" className={({ isActive }) => isActive ? "bg-danger d-block rounded-3 text-decoration-none fw-bold  text-color px-3 py-5" : "d-block text-decoration-none fw-bold  text-color px-3 py-5 rounded-3   navHover "}>Work</NavLink>
                                        </div>
                                        {/* <div>
                                            <NavLink to="/service" className={({ isActive }) => isActive ? "bg-danger d-block rounded-3 text-decoration-none fw-bold  text-color px-3 py-5" : "d-block text-decoration-none fw-bold  text-color px-3 py-5 rounded-3  navHover"}>Service</NavLink>
                                        </div> */}
                                        <div>
                                            <NavLink to="/contact" className={({ isActive }) => isActive ? "bg-danger d-block rounded-3 text-decoration-none fw-bold  text-color px-3 py-5" : "d-block text-decoration-none fw-bold  text-color px-3 py-5 rounded-3  navHover"}>Contact</NavLink>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </Col>



                            <Col xs="12" sm="12" md="10" xl="10">
                                <div className="boxBg  text-color shadow-lg rounded-3 py-4 px-2">
                                    <Outlet />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Home;