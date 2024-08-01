import React from 'react'
import TeamMember from '../TeamMember/TeamMember'
import Employee1 from './../../Images/employee1.jpg'
import Employee2 from './../../Images/employee2.webp'
import Employee3 from './../../Images/employee3.png'
import { Container, Row } from 'react-bootstrap'
import './Team.css'

const Team = () => {
    return (
        <section className='Team text-center mb-80'>
            <span className='mb-4 d-block fw-bold'>MEET OUR TEAM</span>
            <h2 className='fs-1 mb-4'>Our Team are Business Professionals with <br /> subject Matter Expertise</h2>
            <p>Please feel free to reach out to us and connect with us on Linkedin.</p>
            <Container>
                <Row>
                    <TeamMember TeamImage={Employee1} TeamTitle="Omnia" />
                    <TeamMember TeamImage={Employee2} TeamTitle="Sara" />
                    <TeamMember TeamImage={Employee3} TeamTitle="Ahmed" />
                </Row>
            </Container>
        </section>
    )
}

export default Team
