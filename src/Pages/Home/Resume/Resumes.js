import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './resumes.css';
const Resumes = () => {
    return (
        <div className="mt-5">

            <Container>

                <Row> <h2 className="fw-bold fs-1 mb-5 text-uppercase">My Skill</h2>
                    <Col xs="12" sm="12" lg="6" md="6" className="px-5 mb-4">
                        <h2 className="fw-bold fs-3 mb-4 text-uppercase">Web Development Skill</h2>


                        <div className="text-start">
                            <div class="skill-bars">
                                <div class="bar">
                                    <div class="info">
                                        <span>HTML</span>
                                    </div>
                                    <div class="progress-line html">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <div class="info">
                                        <span>CSS</span>
                                    </div>
                                    <div class="progress-line css">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <div class="info">
                                        <span>Bootstrap</span>
                                    </div>
                                    <div class="progress-line bootstrap">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <div class="info">
                                        <span>Javascript</span>
                                    </div>
                                    <div class="progress-line javascript">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <div class="info">
                                        <span>React.js</span>
                                    </div>
                                    <div class="progress-line react">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <div class="info">
                                        <span>Node.js</span>
                                    </div>
                                    <div class="progress-line node">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <div class="info">
                                        <span>Express.js</span>
                                    </div>
                                    <div class="progress-line express">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <div class="info">
                                        <span>MongoDB</span>
                                    </div>
                                    <div class="progress-line mongo">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <div class="info">
                                        <span>Wordpress</span>
                                    </div>
                                    <div class="progress-line wordpress">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" lg="6" md="6" className="px-5">
                        <h2 className="fw-bold fs-3 mb-4 text-uppercase">Other Tools & Software</h2>


                        <div className="text-start">
                            <div class="skill-bars">
                                <div class="bar">
                                    <div class="info">
                                        <span>Adobe Photoshop</span>
                                    </div>
                                    <div class="progress-line photoshop">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <div class="info">
                                        <span>Adobe Illustrator</span>
                                    </div>
                                    <div class="progress-line illustrator">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <div class="info">
                                        <span>Adobe XD</span>
                                    </div>
                                    <div class="progress-line xd">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <div class="info">
                                        <span>Figma</span>
                                    </div>
                                    <div class="progress-line figma">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <div class="info">
                                        <span>Github</span>
                                    </div>
                                    <div class="progress-line github">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <div class="info">
                                        <span>Firebase</span>
                                    </div>
                                    <div class="progress-line firebase">
                                        <span></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Col>

                </Row>








                <Row className="mt-5">
                    <h2 className="fw-bold fs-1 mb-5 text-uppercase">Education</h2>
                    <Col xs="12" sm="12" lg="6" md="6">
                        <ScrollAnimation animateIn="animate__pulse" animateOut="animate__fadeOut">
                            <div className=" text-center justify-content-center boxBg px-4 py-4 mb-4 boxBackground shadow">
                                <div className="text-danger mb-3">

                                </div>
                                <h2 className="fs-3 fw-bold">BBA(Hon's)</h2>
                                <p className="m-0 fw-bold fs-5">Department Of Marketing</p>
                                <p className="m-0 fs-5">University Of Dhaka</p>
                                <p className="m-0 fs-6">Govt. Titumir College</p>
                                <p className="m-0 fs-6">(2015-16)</p>
                                <p className="m-0 fs-6">Passing Year 2021</p>



                            </div>
                        </ScrollAnimation>
                    </Col>

                    <Col xs="12" sm="12" lg="6" md="6">
                        <ScrollAnimation animateIn="animate__pulse" animateOut="animate__fadeOut">
                            <div className=" text-center justify-content-center boxBg px-4 py-4 mb-4 boxBackground shadow">
                                <div className="text-danger mb-3">

                                </div>
                                <h2 className="fs-3 fw-bold">Higher Secondary School (HSC)</h2>
                                <p className="m-0 fw-bold fs-5">Business Studies</p>
                                <p className="m-0 fs-5">Dhaka Board</p>
                                <p className="m-0 fs-6">Dr. Mahabubur Rahman Mollah College</p>
                                <p className="m-0 fs-6">(2013-14)</p>
                                <p className="m-0 fs-6">Passing Year 2015</p>



                            </div>
                        </ScrollAnimation>
                    </Col>




                </Row>
                <Row className="mt-5">
                    <h2 className="fw-bold fs-1 mb-5 text-uppercase">Training Summary</h2>
                    <Col xs="12" sm="12" lg="6" md="6">
                        <ScrollAnimation animateIn="animate__pulse" animateOut="animate__fadeOut">
                            <div className=" text-center justify-content-center boxBg px-4 py-4 mb-4 boxBackground shadow">
                                <div className="text-danger mb-3">

                                </div>
                                <h2 className="fs-3 fw-bold">MERN Stack Development</h2>
                                <p className="m-0 fw-bold fs-5 text-light">Programming Hero</p>
                                <p className="m-0 fs-6">Year 2021</p>
                                <div className="mt-2 text-danger">
                                    <Button className="btn border-0 fw-bold boxBackground fs-6 rounded-pill shadow mx-1 my-2 text-danger">HTML</Button>
                                    <Button className="btn border-0 fw-bold boxBackground fs-6 rounded-pill shadow mx-1 my-2 text-danger">CSS</Button>
                                    <Button className="btn border-0 fw-bold boxBackground fs-6 rounded-pill shadow mx-1 my-2 text-danger">Bootstrap</Button>
                                    <Button className="btn border-0 fw-bold boxBackground fs-6 rounded-pill shadow mx-1 my-2 text-danger">Javascript</Button>
                                    <Button className="btn border-0 fw-bold boxBackground fs-6 rounded-pill shadow mx-1 my-2 text-danger">React.js</Button>
                                    <Button className="btn border-0 fw-bold boxBackground fs-6 rounded-pill shadow mx-1 my-2 text-danger">NodeJs</Button>
                                    <Button className="btn border-0 fw-bold boxBackground fs-6 rounded-pill shadow mx-1 my-2 text-danger">ExpressJs</Button>
                                    <Button className="btn border-0 fw-bold boxBackground fs-6 rounded-pill shadow mx-1 my-2 text-danger">MongoDB</Button>
                                </div>



                            </div>
                        </ScrollAnimation>
                    </Col>
                    <Col xs="12" sm="12" lg="6" md="6">
                        <ScrollAnimation animateIn="animate__pulse" animateOut="animate__fadeOut">
                            <div className=" text-center justify-content-center boxBg px-4 py-4 mb-4 boxBackground shadow">
                                <div className="text-danger mb-3">

                                </div>
                                <h2 className="fs-3 fw-bold">Web Desing</h2>
                                <p className="m-0 fw-bold fs-5 text-light">BASIS Institute of Technology & Management (BITM)</p>
                                <p className="m-0 fs-6">Year 2021</p>
                                <div className="mt-2 text-danger">
                                    <Button className="btn border-0 fw-bold boxBackground fs-6 rounded-pill shadow mx-1 my-2 text-danger">HTML</Button>
                                    <Button className="btn border-0 fw-bold boxBackground fs-6 rounded-pill shadow mx-1 my-2 text-danger">CSS</Button>
                                    <Button className="btn border-0 fw-bold boxBackground fs-6 rounded-pill shadow mx-1 my-2 text-danger">Bootstrap</Button>
                                    <Button className="btn border-0 fw-bold boxBackground fs-6 rounded-pill shadow mx-1 my-2 text-danger">Javascript</Button>

                                </div>



                            </div>
                        </ScrollAnimation>
                    </Col>






                </Row>

            </Container>
        </div>
    );
};

export default Resumes;