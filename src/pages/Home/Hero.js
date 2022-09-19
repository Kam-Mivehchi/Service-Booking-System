import React from 'react'
import { useTheme } from '../../contexts/Theme'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card';
import bgImage from "../../assets/heroo.jpg"
// import Button from 'react-bootstrap/Button'
const Overlay = styled(Card.ImgOverlay)`
    background-color:	rgb(0,0,0,.50);
    color:white;
    text-align:center;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap:5px;
`
const Title = styled(Card.ImgOverlay)`
    font-weight:bold;
    font-size:2.75rem;
    color:theme.accent;

`
// const StyledButton = styled(Button)`
//     font-weight:bold;
//     padding:4px 30px;
//     border-radius:30px;

// `
const content = {
    title: "Your Brand Here",
    tagline: "Booking platform built for the service industry.",
    cta: "Optimize your hair salon, landscaping business or car detailing service by allowing customers to book online",
}
const Hero = () => {
    const theme = useTheme()

    return (
        <Card className="m-0 border-0" >
            <Card.Img variant="top" src={bgImage} style={{ minHeight: '65vh', maxHeight: '65vh', objectFit: 'cover' }} />
            <Overlay >
                <Title as='h1' style={{ fontSize: "250%", color: theme.primary }}>{content.title}</Title>
                <Card.Text as="h4" style={{ color: theme.secondary }}>
                    {content.tagline}
                </Card.Text>
                <Card.Subtitle style={{ color: theme.primary }}>
                    {content.cta}
                </Card.Subtitle>
                {/* <StyledButton variant="success" href="#booking-form" style={{}}>{content.cta}</ StyledButton> */}
            </Overlay>
        </Card >

    )
}

export default Hero