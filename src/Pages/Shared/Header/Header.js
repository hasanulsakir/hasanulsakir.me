import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Bannar from '../../Home/Bannar/Bannar';
import myImage from '../../../image/profile/sakir.jpg';
// import Typewriter from 'typewriter-effect';
import { Typewriter } from 'react-simple-typewriter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import './Header.css'
import Button from '@restart/ui/esm/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ScrollAnimation from 'react-animate-on-scroll';
const Header = () => {
    return (
        <div>
            <div className="headerBg">
                <Bannar />


                <div className="boxBg py-5 mb-5 shadow-lg rounded-3 box">
                    <Container>
                        <Row>
                            <Col xs="12" sm="12" md="3" xl="3" >
                                <ScrollAnimation animateIn="animate__fadeInDown"
                                    animateOut="animate__fadeOutUp">
                                    <div >
                                        <img src={myImage} className="profileImage" alt="Profile" />

                                    </div>
                                </ScrollAnimation>


                            </Col>
                            <Col xs="12" sm="12" md="4" xl="4" className="rigthBorder" >
                                <ScrollAnimation animateIn="animate__fadeIn"
                                    animateOut="animate__fadeOut" >
                                    <div className=" text-lg-start text-md-start text-sm-center pt-4">
                                        <h2 className="display-6 fw-bold">Hasanul Sakir</h2>
                                        <p>I am {' '}
                                            <span className="text-danger fw-bold">


                                                <Typewriter
                                                    words={['MERN Stack Developer', 'Javascript Developer', 'Graphics Design', ' Repeat!', 'Jr. MERN Stack Developer']}
                                                    loop={20}
                                                    cursor
                                                    cursorStyle='_'
                                                    typeSpeed={70}
                                                    deleteSpeed={50}
                                                    delaySpeed={1000}

                                                /></span>


                                        </p>

                                    </div>


                                    <div className="social pb-5 text-lg-start text-md-start text-sm-center">
                                        <Button className="shadow bg-dark py-2 px-3 rounded-3  btn">
                                            <a href="https://www.facebook.com/hasanul.sakir/" target="_blank" rel="noreferrer"><FacebookOutlinedIcon className="text-light" /></a>
                                        </Button>
                                        <Button className="shadow mx-3 bg-dark py-2 px-3 rounded-3 btn">
                                            <a href="https://www.linkedin.com/in/hasanulsakir/" target="_blank" rel="noreferrer"><LinkedInIcon className="text-light" /></a>
                                        </Button>
                                        <Button className="shadow  bg-dark py-2 px-3 rounded-3 btn">
                                            <a href="https://github.com/hasanulsakir" target="_blank" rel="noreferrer"><GitHubIcon className="text-light" /></a>
                                        </Button>


                                    </div>
                                </ScrollAnimation>

                            </Col>
                            <Col xs="12" sm="12" md="5" xl="5" className="text-start d-flex align-items-center">
                                <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate_fadeOut">
                                    <div className="d-flex align-items-center ">
                                        <div className="mx-4">
                                            <div >
                                                <p className="pb-0 mb-0 text-uppercase">
                                                    Email
                                                </p>
                                                <span>
                                                    <a href="mailto:khantanvir03@gmail.com" target="_blank" rel="noreferrer" className="text-decoration-none text-light">khantanvir03@gmail.com</a>
                                                </span>
                                            </div>
                                            <div className="mt-4">
                                                <p className="pb-0 mb-0 text-uppercase">
                                                    Phone
                                                </p>
                                                <span>
                                                    <a href="callto:01626066474" target="_blank" rel="noreferrer" className="text-decoration-none text-light">+880 1626 06 64 74</a>
                                                </span>
                                            </div>

                                        </div>
                                        <div>

                                            <div>
                                                <p className="pb-0 mb-0 text-uppercase">
                                                    Location
                                                </p>
                                                <span>
                                                    Dhaka, Bangladesh
                                                </span>
                                            </div>
                                            <div className=" mt-4">
                                                <p className="pb-0 mb-0 text-uppercase">
                                                    Blood Group
                                                </p>
                                                <span>
                                                    B<sup>+</sup>
                                                </span>
                                            </div>



                                        </div>

                                    </div>
                                </ScrollAnimation>
                            </Col>

                        </Row>
                    </Container>
                </div>


            </div>
        </div>
    );
};

export default Header;