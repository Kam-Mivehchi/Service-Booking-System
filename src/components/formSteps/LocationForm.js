import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components'

const StyledHeader = styled(Card.Title)`
    font-weight:bold;
    margin: 1rem auto 2rem auto ;
    font-size:1.5rem;
`
const StyledButton = styled(Button)`
    font-weight:bold;
    padding:4px 30px;
    border-radius:30px;

`
const content = {
    title: "Enter Your Address",
    subtitle: "Describe what you want picked up and provide the approximate weight",
    disclaimer: "Use this area to give pickup instructions and window Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
    recurring: {
        title: "Setup Recurring pickups",
        desc: "benefit details Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        freq: [["One Time", 1], ['Weekly', 7], ["Monthly", 30]]
    }
}
const locationForm = () => {
    return (
        <>
            {/* <StyledHeader>
                {content.title}
            </StyledHeader> */}
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>


                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} controlId="formGridPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" placeholder="Enter Phone #" />
                    </Form.Group>


                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} xs={12} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} xs={12} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridTOS">
                    <Form.Check type="checkbox" label=" I Agree to Terms of Service" required />
                </Form.Group>
                <ButtonGroup style={{ width: '80%', position: 'relative', left: "50%", transform: 'translateX(-50%)', marginTop: '1rem' }}>
                    <StyledButton variant="outline-success" type="submit">Back</StyledButton>
                    <StyledButton variant="success">Next</StyledButton>
                </ButtonGroup>

            </Form>
        </>
    )
}

export default locationForm