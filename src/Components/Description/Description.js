import React from 'react'
import './Description.css'
import { Col, Container, Row } from 'react-bootstrap'
const Description = ({ mainImage, smallText, Title, descriptionText, icon, iconDescription }) => {
    return (
        <section className="description mb-80">
            <Container fluid>
                <Row>
                    <Col lg={6} className="bg-gray p-lg-100">
                        <small className="description__small-text mb-4 d-block fw-bold">{smallText}</small>
                        <h2 className='description__title mb-3'>{Title}</h2>
                        {descriptionText.map((paragraph, index) => (<p key={index} className='description__paragraph pe-5'>{paragraph}</p>))}
                        <div className="description___icon-container d-flex">
                            {icon ? (<img src={icon} className="description__icon me-3" alt="Description Icon" />
                            ) : null}
                            <p className="mb-0 mt-1">{iconDescription ? (iconDescription.map((text, index) => (<p key={index} className='description__icon-description fw-bold mb-0'>{text}</p>))) : null}</p>
                        </div>
                    </Col>
                    <Col lg={6} className="ps-lg-0 p-0">
                        <img src={mainImage} alt="Description Image" className="description__image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Description
