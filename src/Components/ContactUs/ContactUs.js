import React from 'react'
import Robot from './../../Images/robot.png'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './ContactUs.css'

const ContactUs = () => {
    return (
        <Container fluid="xl" className='mb-80'>
            <section className="ContactUs py-5 position-relative">
                <Row>
                    <Col sm={12}>
                        <div className="text-left ps-md-5 text-white">
                            <h2 className='mb-4 fs-1'>Need more information <br /> about our funaraising?</h2>
                            <p className='mb-5'>Please reach out by email of LinkedIn!</p>
                            <Button className='btn py-2 px-5 bg-white fw-bold rounded-pill text-black'>Contact Us</Button>
                        </div>
                    </Col>
                </Row>
                <img src={Robot} className='position-absolute ContactUs__img' alt="ContactUs img'"/>
            </section>
        </Container>
    )
}

export default ContactUs
