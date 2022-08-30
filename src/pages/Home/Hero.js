import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card';
import bgImage from "../../assets/HeroImg.jpg"
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
    color:white;

`
// const StyledButton = styled(Button)`
//     font-weight:bold;
//     padding:4px 30px;
//     border-radius:30px;

// `
const content = {
    title: "PB&J Dumpage",
    tagline: "Big or Small, We Haul it All",
    cta: "Book Online "
}
const hero = () => {
    return (
        <Card style={{ minHeight: '70vh' }} >
            <Card.Img variant="top" src={bgImage} style={{ minHeight: '70vh', maxHeight: '70vh', objectFit: 'cover' }} />
            <Overlay>
                <Title as='h1' >{content.title}</Title>
                <Card.Text as="h4"  >
                    {content.tagline}
                </Card.Text>
                {/* <StyledButton variant="success" href="#booking-form" style={{}}>{content.cta}</ StyledButton> */}
            </Overlay>
        </Card >

    )
}

export default hero