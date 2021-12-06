import Button from '@restart/ui/esm/Button';
// import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import myImage from '../../image/profile/sakir.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import './contact.css';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Alert, CircularProgress } from '@mui/material';
const Contact = () => {

    const form = useRef();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const sendEmail = (e) => {
        setLoading(true)
        e.preventDefault();
        emailjs.sendForm('service_n7w6ogv', 'template_2l4tgdf', form.current,
            'user_qEJWIgBqPtobFbsPV8Rgo')
            .then((result) => {
                setSuccess(true)
                setLoading(false)

                form.current.reset();

            }, (error) => {
                setError(true);

            });
    };


    return (
        <div className="mt-5">
            <h2 className="fw-bold fs-1 mb-5 text-uppercase">Contact Me</h2>
            <Container>
                <Row className="gap-5">
                    <Col xs="12" sm="12" lg="4" md="4" className="bodyBg contactBox shadow px-3 mb-5 py-5">
                        <div className="aboutImgBox">
                            <ScrollAnimation animateIn="animate__fadeInDown"
                                animateOut="animate__fadeOutUp">
                                <div >
                                    <img src={myImage} className="aboutImage" alt="Profile" />

                                </div>
                            </ScrollAnimation>

                        </div>

                        <div>
                            <ScrollAnimation animateIn="animate__fadeIn"
                                animateOut="animate__fadeOut" >
                                <div className=" text-center pt-4">
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


                                <div className="mx-4 text-start">
                                    <div >
                                        <p className="pb-0 mb-0 text-uppercase">
                                            Email
                                        </p>
                                        <span>
                                            <a href="mailto:khantanvir03@gmail.com" target="_blank" rel="noreferrer" className="text-decoration-none text-light">khantanvir03@gmail.com</a>
                                        </span>
                                    </div>
                                    <div className="mt-2">
                                        <p className="pb-0 mb-0 text-uppercase">
                                            Phone
                                        </p>
                                        <span>
                                            <a href="callto:01626066474" target="_blank" rel="noreferrer" className="text-decoration-none text-light">+880 1626 06 64 74</a>
                                        </span>
                                    </div>
                                    <div className="my-2">
                                        <p className="pb-0 mb-0 text-uppercase">
                                            Location
                                        </p>
                                        <span className="text-light">
                                            Dhaka, Bangladesh
                                        </span>
                                    </div>

                                </div>


                                <div className="social pb-3 mt-5">
                                    <p>FIND WITH ME</p>
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
                        </div>



                    </Col>
                    <Col xs="12" sm="12" lg="7" md="7" className="bodyBg contactBox shadow px-lg-5 px-md-5 px-sm-2 px-xs-2 mb-5 py-5">

                        {
                            isLoading === true && <CircularProgress color="success" />
                        }
                        {
                            isLoading === false &&



                            <Form ref={form} onSubmit={sendEmail}>
                                <Row>
                                    <Col>
                                        <Form.Control placeholder="Your Name" name="name" required className="boxBackground border-0 shadow form-controls text-light py-3" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Contact number" name="number" required className="boxBackground border-0 shadow form-controls text-light py-3" />
                                    </Col>
                                </Row>
                                <Row className="my-3">
                                    <Col>
                                        <Form.Control placeholder="Email" required name="email" className="boxBackground border-0 shadow form-controls text-light py-3" />
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Control placeholder="Your Message" name="message" required as="textarea" rows={7} className="boxBackground border-0 shadow form-controls text-light " />
                                    </Col>

                                </Row>
                                <Row className="my-3">
                                    <Col>

                                        <Button type="submit" className="w-100 btn-danger btn border-0 py-3 fs-4">Send</Button>
                                    </Col>

                                </Row>




                            </Form>
                        }


                        <div className="mt-5">
                            {
                                success === true && <Alert severity="success">Message Sent Successfully!</Alert>
                            }
                            {
                                error === true && <Alert severity="error">Message Sent Failed!</Alert>
                            }

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;