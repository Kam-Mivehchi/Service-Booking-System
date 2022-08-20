import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import DateAndTime from './DateAndTime';
import Price_Breakdown from './Price';

import axios from 'axios';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';
// axios.defaults.baseURL = "http://localhost:3005/api/"

let axiosConfig = {
    baseURL: 'http://localhost:3005/api',
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
};

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
    // const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    // const [startingPrice, setStartingPrice] = useState()
    const [price, setPrice] = useState()
    const [zip, setZip] = useState()


    useEffect(() => {

        axios.post('/checkRange', {
            zipcode: zip,
        },
            axiosConfig
        ).then(function (response) {
            return response
        }).then(function (data) {
            // console.log(data.data.starting_price)
            setPrice(data.data.starting_price)
            //if true render the next card and save the zipcode
        }).catch(error => console.log(error))

    }, [zip])


    const checkZip = (e) => {
        try {
            e.preventDefault()
            let zipNum = parseInt(e.target[0].value)
            setZip(zipNum);

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Card style={{ padding: '1rem' }}>
                <StyledHeader>Choose Your Service</StyledHeader>
                <Form className="text-center" onSubmit={checkZip} action="http://localhost:3005/api/checkRange" method="POST">

                    <Card.Title style={{ marginTop: '1rem', textAlign: 'start' }}>
                        {content.services[parseInt(radioValue) - 1].name}
                    </Card.Title>
                    <Card.Text className="text-start">
                        {content.claim}
                        <span value={price}>

                        </span>
                    </Card.Text>
                    <Form.Group as={Col} xs={12} controlId="formGridZip">
                        <Form.Label>Are you within our Radius?</Form.Label>
                        <Form.Control autoComplete='postal-code' type="text" length="5" minLength="5" maxLength="5" pattern="[0-9]*" placeholder=' Enter Zip Code' required />
                    </Form.Group>
                    <Container className="mt-4">
                        <Price_Breakdown price={price} />
                    </Container>

                    <StyledButton variant="success" type="submit" >
                        Book a Time!
                    </StyledButton >
                </Form>
            </Card >
            <DateAndTime zipcode={zip} />
        </>
    )
}

export default ServiceAndRadiusCheck