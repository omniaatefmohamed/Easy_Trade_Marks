import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Row>
            <Navbar expand="xl" className="bg-white position-relative">
                <Container fluid className='px-lg-100'>
                    <Navbar.Brand href="#" className='order-xl-1'><h3 className='mb-0 fs-md-4'><span className='fw-bold'>easy</span>trademarks</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll " className='order-xl-4' />
                    <Navbar.Collapse id="navbarScroll" className='order-xl-2'>
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className='text-dark'>Home</Nav.Link>
                            <Nav.Link href="#action2" className='text-dark'>Services</Nav.Link>
                            <Nav.Link href="#action2" className='text-dark'>About Us</Nav.Link>
                            <Nav.Link href="#action2" className='text-dark'>Resource Center</Nav.Link>
                            <Nav.Link href="#action2" className='text-dark'>Contact Us</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                    <Row className="order-xl-3 align-items-center position-xl-absolute">
                        <Col>
                            <NavDropdown title="LANGUAGE / CURRENCY" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3"> EN </NavDropdown.Item>
                                <NavDropdown.Item href="#action4"> AR </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">USD</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">EGP</NavDropdown.Item>
                            </NavDropdown>
                        </Col>
                        <Col>
                            <Button className='ms-4 dark-blue rounded-pill px-sm-5 px-3'>Login</Button>
                        </Col>
                    </Row>

                </Container>
            </Navbar>
        </Row>

    )
}

export default NavBar
