import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { SiCoolermaster } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import './Footer.css'

const Footer = () => {
    return (
        <section className='Footer mb-0'>
            <Container fluid className='px-lg-100 py-5 pb-3'>
                <Row className="justify-content-between Footer__border-bottom pb-4">
                    <Col lg={6} xs={12} className='Footer__logo'>
                        <h3><span>easy</span>trademarks</h3>
                    </Col>
                    <Col lg={6} xs={12} className='Footer__Social text-lg-end'>
                        <span className='me-3 text-black'>Follow us at: </span>
                        <FaInstagramSquare className='rounded-circle fs-3 text-white me-2' />
                        <FaFacebook className='rounded-circle fs-3 text-white me-2' />
                        <FaLinkedin className='rounded-circle fs-3 text-white me-2' />
                        <FaTwitterSquare className='rounded-circle fs-3 text-white me-2' />
                    </Col>
                </Row>
                <Row className="justify-content-between Footer__middle Footer__border-bottom py-5 mb-3">
                    <Col lg={3} md={4} sm={6} className=' mb-3'>
                        <h4 className='dark-color mb-2 blue-color'>US OFFICE</h4>
                        <span className='d-block dark-color fw-light'>+1415224117</span>
                        <span className='d-block mb-3 dark-color  fw-light'>9pm - 5pm</span>
                        <p className='dark-color mb-2 blue-color'>Egypt OFFICE</p>
                        <span className='d-block dark-color fw-light'>+1415224117</span>
                        <span className='d-block dark-color fw-light'>9pm - 5pm</span>

                    </Col>
                    <Col lg={3} md={4} sm={6} className=' mb-3'>
                        <h4 className='fw-bold'> Resources service</h4>
                        <a href="#" className='d-block dark-color mb-2'>Templates & Forms</a>
                        <a href="#" className='d-block dark-color mb-2'>User Guide</a>
                        <a href="#" className='d-block dark-color mb-2'>Our Community</a>
                        <a href="#" className='d-block dark-color mb-2'>What's New</a>
                    </Col>
                    <Col lg={3} md={4} sm={6} className=' mb-3'>
                        <h4 className='fw-bold'>Useful Links</h4>
                        <a href="#" className='d-block dark-color mb-2'>Home</a>
                        <a href="#" className='d-block dark-color mb-2'>Services</a>
                        <a href="#" className='d-block dark-color mb-2'>About Us</a>
                        <a href="#" className='d-block dark-color mb-2'>Resource Center</a>
                    </Col>
                    <Col lg={3} md={4} sm={6} className=' mb-3'>
                        <h4 className='fw-bold'>Supported By</h4>
                        <FaCcVisa className='fs-1 text-white me-3' />
                        <SiCoolermaster className='fs-1 text-white me-3' />
                        <FaCcMastercard className='fs-1 text-white me-3' />
                        <SiAmericanexpress className='fs-1 text-white me-3' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='fw-bold'>&copy; Easy Trademarks. All Rights Reserved — <a href="">Privacy Policy</a> - <a href="">Terms Of Use</a></p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer
