import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components'
const content = {
    cardText: 'Sustainable Junk Removal Built Around Your Schedule!',
    cta: "Book Now!"
}
const StyledButton = styled(Button)`
    font-weight:bold;
    padding:4px 30px;
    border-radius:30px;

    color:black;

`
const StyledCard = styled(Card)`
min-width:70vw;

position:absolute;
top:70vh;
left:50%;
transform:translate(-50%,-2rem);


`
const SecondCTA = () => {
    return (
        <StyledCard className="text-center" bg="dark">

            <Card.Body>
                <Card.Title as='h2' style={{ marginBottom: '1.5rem', color: '#979797' }}>{content.cardText}</Card.Title>

                <StyledButton variant="success">{content.cta}</StyledButton>
            </Card.Body>

        </StyledCard >
    )
}

export default SecondCTA