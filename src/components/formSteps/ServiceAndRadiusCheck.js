import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
let content = {
    services: [
        { name: 'Junk Removal', value: '1', price: 100 },
        { name: 'Cardboard Removal', value: '2', price: 80 },
    ],
    claim: "Big or Small, We Haul it All. Services start at ",
}


const StyledButton = styled(Button)`
    font-weight:bold;
    padding:4px 30px;
    border-radius:30px;
    width:80%;
    margin:auto

`
const StyledHeader = styled(Card.Title)`
    font-weight:bold;
    margin: 1rem auto 2rem auto ;
    font-size:1.5rem;
`

const ServiceAndRadiusCheck = () => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const [startingPrice, setStartingPrice] = useState(100)
    const [price, setPrice] = useState(startingPrice)
    const adjustPrice = (e) => {
        setRadioValue(e.currentTarget.value)
        setStartingPrice(content.services[parseInt(e.currentTarget.value) - 1].price)
        setPrice(content.services[parseInt(e.currentTarget.value) - 1].price)
    }
    return (
        <Card style={{ padding: '1rem' }}>
            <StyledHeader>Choose Your Service</StyledHeader>
            <Form className="text-center">
                <ButtonGroup className="text-center" >
                    {content.services.map((radio, idx) => (
                        <ToggleButton

                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={'outline-success'}
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={adjustPrice}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
                <Card.Title style={{ marginTop: '1rem', textAlign: 'start' }}>
                    {content.services[parseInt(radioValue) - 1].name}
                </Card.Title>
                <Card.Text className="text-start">
                    {content.claim}
                    <span>
                        ${startingPrice}
                    </span>
                </Card.Text>
                <Form.Group as={Col} xs={12} controlId="formGridZip">
                    <Form.Label>Are you within our Radius?</Form.Label>
                    <Form.Control autocomplete='postal-code' type="text" pattern="[0-9]*" placeholder=' Enter Zip Code' required />
                </Form.Group>
                <Container className="mt-4">
                    <Row className="justify-content-between mx-auto gap-1 ">

                        <Col xs={5}>
                            <Row>

                                Service Starts at
                            </Row>
                            {/* based on the users distance we need to change the price */}
                            <Row as='h1'>
                                ${price}
                            </Row>
                        </Col>
                        <Col xs={5}>
                            <Row>

                                7 Days a week
                            </Row>
                            <Row>
                                Next Available
                            </Row>
                        </Col>

                    </Row>
                </Container>

            </Form>

            <StyledButton variant="success" >
                Book a Time!
            </StyledButton >

        </Card >
    )
}

export default ServiceAndRadiusCheck