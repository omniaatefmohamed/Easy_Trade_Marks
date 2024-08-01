import React from 'react'
import './OurVisionItem.css'
import { Col, Row } from 'react-bootstrap'


const OurVisionItem = ({ Title, description, icon }) => {
    return (
        <Col xl={4} md={6} sm={12} className='mb-5'>
            <Row>
                <Col xs={2}>
                    <small className='fs-1 d-block mb-5'>{icon}</small>
                </Col>
                <Col xs={10}>
                    <h5 className='mb-4 mt-3 text-blue'>{Title}</h5>
                    <p>{description}</p>
                </Col>
            </Row>
        </Col>
    )
}

export default OurVisionItem
