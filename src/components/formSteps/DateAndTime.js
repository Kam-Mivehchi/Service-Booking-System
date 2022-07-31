import React from 'react'
import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
// import InputGroup from 'react-bootstrap/InputGroup';
import Location from './LocationForm'
const StyledHeader = styled(Card.Title)`
    font-weight:bold;
    margin: 1rem auto 2rem auto ;
    font-size:1.5rem;
`
// const StyledButton = styled(Button)`
//     font-weight:bold;
//     padding:4px 30px;
//     border-radius:30px;

// `

const content = {
    title: "Pickup Date and Time",
    subtitle: "Let us know when your avaiable",
    disclaimer: "Use this area to give pickup instructions and window Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
    recurring: {
        title: "Setup Recurring pickups",
        desc: "benefit details Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        freq: [["One Time", 1], ['Weekly', 7], ["Monthly", 30]]
    }
}
const DateAndTime = () => {
    return (
        <Card style={{ padding: '1rem' }}>
            <StyledHeader>{content.title}</StyledHeader>
            <Form>
                <Card.Title as="h6" style={{ marginTop: '1rem', textAlign: 'start', fontWeight: 'bold' }}>
                    {content.subtitle}
                </Card.Title>
                <Card.Text className="text-start">
                    {content.disclaimer}
                </Card.Text>
                <Form.Label htmlFor="Date">Date</Form.Label>
                <Form.Control type='date' id="Date" required />

                <Form.Label htmlFor="Time">Time:</Form.Label>
                <Form.Control type='time' id="Time" min="09:00" max="18:00" required />

                {/* <Card.Title as="h6" style={{ marginTop: '1rem', textAlign: 'start', fontWeight: 'bold' }}>
                    {content.recurring.title}
                </Card.Title>
                <Card.Text className="text-start">
                    {content.recurring.desc}
                </Card.Text>


                {content.recurring.freq.map(value => {
                    return (
                        <>

                            <Form.Check type='radio' id="Once" value={value[1]} label={value[0]} />
                        </>
                    )
                })} */}
                {/* <ButtonGroup style={{ width: '80%', position: 'relative', left: "50%", transform: 'translateX(-50%)', marginTop: '1rem' }}>
                    <StyledButton variant="outline-success" type="submit">Back</StyledButton>
                    <StyledButton variant="success">Next</StyledButton>
                </ButtonGroup> */}

            </Form>
            <Location />
        </Card>

    )

}

export default DateAndTime