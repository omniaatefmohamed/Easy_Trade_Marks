import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import './OurVision.css'
import OurVisionItem from '../OurVisionItem/OurVisionItem'
import { GiVintageRobot } from "react-icons/gi";
import { GiStrong } from "react-icons/gi";
import { IoEye } from "react-icons/io5";
import { BiSolidError } from "react-icons/bi";
import { FaAssistiveListeningSystems } from "react-icons/fa";

const OurVision = () => {
    return (
        <section className='Ourvision mb-80'>
            <Container fluid>
                <Row className='flex-row-reverse'>
                    <Col lg={9} className='bg-gray Ourvision__rounded p-5'>
                        <small className='fw-bold d-block mb-3'>Why Us</small>
                        <h2 className='mb-5'>
                            Our vision is to build an Al enabled trademark <br />
                            expert that
                        </h2>
                        <Row className='justify-content-center'>
                            <OurVisionItem Title="AUTOMATES PROTECTION" description="Automating protection decreases errors, increases consistency and minimizes prosecution lead times. Our Al enabled bot will take minimal input from users and transforms it to a viable trademark application." icon={<GiVintageRobot />} />
                            <OurVisionItem Title="STRENGTHENS CASES" description="If a brand owner receives an office action, or a rejection, based on prior issued decisions, we will be able to asses the chances of success, and advise on strength of different arguments." icon={<GiStrong />} />
                            <OurVisionItem Title="WATCHES FOR OPPORTUNITIES" description="Obtaining protection is the first step to generating revenues from your intellectual property. Scanning market places and gaming platforms to highlight opportunities for commercialization is one of our kav attributes." icon={<IoEye />} />
                            <OurVisionItem Title="FLAGS RISKS" description="We will also watch market places for any potential misuse of the brand." icon={<BiSolidError />} />
                            <OurVisionItem Title="ASSISTS WITH EXAMINATIONS" description="Governments still use outdated technologies and manual processes for examining trademarks." icon={<FaAssistiveListeningSystems />} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurVision
