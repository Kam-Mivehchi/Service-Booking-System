import React from 'react'
import { useTheme } from '../../Utils/ThemeContext'

import Card from 'react-bootstrap/Card';
import bgImage from "../../assets/heroo.jpg"
// import Button from 'react-bootstrap/Button'
import { Overlay, Title } from '../../Utils/StyledComponents';

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