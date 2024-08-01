import React from 'react'
import { Col } from 'react-bootstrap'
import { FaLinkedin } from "react-icons/fa";
import './TeamMember.css'
const TeamMember = ({ TeamImage, TeamTitle }) => {
    return (
        <Col className='justify-content-center'>
            <img src={TeamImage} alt="Team Member Image" className='mb-2'/>
            <p className='mb-1 fs-4'>{TeamTitle}</p>
            <a href="https://www.linkedin.com"><FaLinkedin className='fs-3 rounded-circle'/></a>
        </Col>

    )
}

export default TeamMember
