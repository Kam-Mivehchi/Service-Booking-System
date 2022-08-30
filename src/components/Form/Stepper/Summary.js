import React from 'react'
import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';
import dayjs from 'dayjs'
import styled from 'styled-components'


const StyledTitle = styled(Card.Title)`
font-weight:bold;
margin: 1rem auto 1rem auto ;
font-size:1.5rem;

`

// TODO add edit options on date time adress and weight fields
const Summary = ({ formData }) => { //{ nextStep, prevStep, userInfo, formData }
   // const Proceed = e => {
   //    e.preventDefault();
   //    nextStep();
   // }
   // const goBack = e => {
   //    e.preventDefault();
   //    prevStep();
   // }
   // console.log(dayjs(formData).format("LT"),)
   return (
      <>

         {/* <Card.Header>

Order Summary
</Card.Header> */}
         <Card.Body>
            <StyledTitle className="text-center">Order Summary</StyledTitle>
            <ListGroup variant="flush" className="d-flex flex-row justify-content-around">
               <ListGroup.Item className="text-center border-0">
                  <h2>
                     {formData.weight === 1 ? "<1 ton" : `${formData.weight} tons`}
                  </h2>
                  <small>Pick Up Size</small>

               </ListGroup.Item>
               <ListGroup.Item className="text-center border-0">
                  <h2>
                     ${formData.price}
                  </h2>
                  <small>Price</small>

               </ListGroup.Item>
            </ListGroup >
            <ListGroup.Item className=" border-0 d-flex justify-content-between mx-5 px-5">

               <Card.Text className="d-flex flex-column text-center">
                  <strong className="font-weight-italic p-1">Date</strong>
                  {dayjs(formData.date).format("dddd, MMM D, YYYY")}
               </Card.Text>
               <Card.Text className="d-flex flex-column text-center">
                  <strong className="font-weight-italic p-1">Time</strong>
                  {formData.time}
               </Card.Text>
            </ListGroup.Item>
            <Card.Text className="d-flex flex-column text-center">
               <strong className="font-weight-italic">Address</strong>
               {`${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}`}
            </Card.Text>

         </Card.Body>


         <Card.Body className="text-center" >
            <strong className="font-weight-italic">Name</strong>
            <Card.Text className="">
               {formData.firstName + ' ' + formData.lastName}
            </Card.Text>
            <strong className="font-weight-italic">Email</strong>
            <Card.Text className="">
               {formData.email}
            </Card.Text>
            <strong className="font-weight-italic">Phone</strong>
            <Card.Text className="">
               {formData.phone}
            </Card.Text>
         </Card.Body>





      </>
   )
}

export default Summary