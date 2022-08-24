import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
// import styled from 'styled-components'

const Navigation = () => {
    return (
        <Navbar as="nav" bg="light" expand="lg" sticky="top" variant="">
            <Container>
                <Navbar.Brand href="#home">PB&amp;J Dumpage</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
                <Navbar.Collapse id="basic-navbar-nav" className="">
                    <Nav className="me-auto text-center mx-auto float-lg-end ">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Pricing</Nav.Link>
                        <Nav.Link as={Button} variant={"success"} href="#link">Book Now!</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >
    )
}

export default Navigation