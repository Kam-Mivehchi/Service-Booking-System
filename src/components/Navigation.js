
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useTheme } from '../Utils/ThemeContext'
// import styled from 'styled-components'

const Navigation = () => {
    const theme = useTheme()
    return (
        <Navbar collapseOnSelect variant="light" expand="lg" sticky="top" className={'m-0 text-center '} style={{ backgroundColor: theme.primary }}>
            <Container className={''} style={{ color: theme.secondary, }}>
                <Navbar.Brand href="/" style={{ color: theme.secondary, fontWeight: 'bold', fontSize: '150%' }}>Your Brand Here</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="" style={{ fontWeight: 'bold', }} />
                <Navbar.Collapse id="responsive-navbar-nav" className="w-100 " >
                    <Nav className=" text-center w-100 justify-content-end" style={{ fontWeight: 'bold', }}>
                        <Nav.Link href="/" >Home</Nav.Link>
                        <Nav.Link href="#link" disabled>About</Nav.Link>
                        <Nav.Link href="#link" disabled>Pricing</Nav.Link>
                        <Nav.Link as={Button} size="sm" href="#booking-form" className={"px-3 h-50 my-auto py-lg-1 border-0"} style={{ borderRadius: '999px', backgroundColor: theme.secondary, color: theme.white, }}>Book Now!</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >
    )
}

export default Navigation