
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useTheme } from '../Utils/ThemeContext'
// import styled from 'styled-components'

const Navigation = () => {
    const theme = useTheme()
    return (
        <Navbar collapseOnSelect variant="light" expand="lg" sticky="top" className={'m-0 text-center'} style={{ backgroundColor: theme.primary }}>
            <Container className={'d-flex justify-content-between'} >
                <Navbar.Brand href="/" style={{ color: theme.secondary, fontWeight: 'bold', fontSize: '150%' }}>Your Brand Here</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="" style={{ color: theme.secondary, fontWeight: 'bold', }} />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between" >
                    <Nav className="me-auto text-center mx-auto float-lg-end " style={{ color: theme.secondary, fontWeight: 'bold', }}>
                        <Nav.Link href="#home" >Home</Nav.Link>
                        <Nav.Link href="#link" >About</Nav.Link>
                        <Nav.Link href="#link" >Pricing</Nav.Link>
                        <Nav.Link as={Button} size="sm" href="#booking-form" style={{ borderRadius: '999px', backgroundColor: theme.secondary, color: theme.white, fontWeight: 'bold', }}>Book Now!</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >
    )
}

export default Navigation