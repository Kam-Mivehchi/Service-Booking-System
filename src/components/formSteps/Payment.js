import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components'
import Pay from './pay'
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
    title: "Contact Details",
    subtitle: "Describe what you want picked up and provide the approximate weight",
    disclaimer: "Use this area to give pickup instructions and window Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
    recurring: {
        title: "Setup Recurring pickups",
        desc: "benefit details Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        freq: [["One Time", 1], ['Weekly', 7], ["Monthly", 30]]
    }
}
const Payment = () => {
    return (
        <Card style={{ padding: '1rem' }}>
            <StyledHeader>
                {content.title}
            </StyledHeader>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} controlId="formGridFName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group as={Col} xs={12} controlId="formGridLName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group as={Col} xs={12} controlId="formGridPhone2">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" placeholder="Enter Phone #" />
                    </Form.Group>
                    <Form.Group as={Col} xs={12} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>

                </Row>




                <ButtonGroup style={{ width: '80%', position: 'relative', left: "50%", transform: 'translateX(-50%)', marginTop: '1rem' }}>
                    <StyledButton variant="outline-success" >Back</StyledButton>
                    <StyledButton type="submit" variant="success">Next</StyledButton>
                </ButtonGroup>
                {/* <Pay /> */}
            </Form>
        </Card>
    )
}

export default Payment;