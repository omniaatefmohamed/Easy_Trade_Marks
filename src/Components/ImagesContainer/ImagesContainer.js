import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './ImagesContainer.css'


const ImagesContainer = ({ Imagesrc, FlexReverse }) => {
    return (
        <section className={`ImagesContainer mb-80 ${FlexReverse ? 'flexRowReverse' : null}`} >
            <Container fluid>
                <Row>
                    <Col lg={9} className="bg-gray px-lg-100 justify-content-md-between justify-content-center flex-wrap d-flex">
                        {Imagesrc ? (Imagesrc.map((image, index) => (<img key={index} src={image} alt="Image" className="ImagesContainer__image m-3" />))) : null}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ImagesContainer
