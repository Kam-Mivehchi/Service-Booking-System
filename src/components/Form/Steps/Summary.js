import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import dayjs from 'dayjs'
import Stripe from './Stripe'


const Summary = ({ nextStep, prevStep, userInfo, orderInfo }) => {
   const Proceed = e => {
      e.preventDefault();
      nextStep();
   }
   const goBack = e => {
      e.preventDefault();
      prevStep();
   }
   console.log(dayjs(orderInfo).format("LT"),)
   return (
      <>

         {/* <Card.Header>

               Order Summary
            </Card.Header> */}
         <Card.Body>
            <ListGroup variant="flush" className="d-flex flex-row justify-content-around">
               <ListGroup.Item className="text-center border-0">
                  <h2>
                     {orderInfo.weight == 1 ? "<1 ton" : `${orderInfo.weight} tons`}
                  </h2>
                  <small>Pick Up Size</small>

               </ListGroup.Item>
               <ListGroup.Item className="text-center border-0">
                  <h2>
                     ${orderInfo.price}
                  </h2>
                  <small>Price</small>

               </ListGroup.Item>
            </ListGroup >
            <ListGroup.Item className=" border-0 d-flex justify-content-between mx-5 px-5">

               <Card.Text className="d-flex flex-column text-center">
                  <strong className="font-weight-italic p-1">Date</strong>
                  {dayjs(orderInfo.date).format("dddd, MMM D, YYYY")}
               </Card.Text>
               <Card.Text className="d-flex flex-column text-center">
                  <strong className="font-weight-italic p-1">Time</strong>
                  {orderInfo.time}
               </Card.Text>
            </ListGroup.Item>
            <Card.Text className="d-flex flex-column text-center">
               <strong className="font-weight-italic">Address</strong>
               {`${orderInfo.address}, ${orderInfo.city}, ${orderInfo.state} ${orderInfo.zip}`}
            </Card.Text>

         </Card.Body>


         <Card.Body className="text-center" >
            <strong className="font-weight-italic">Name</strong>
            <Card.Text className="">
               {userInfo.firstName + ' ' + userInfo.lastName}
            </Card.Text>
            <strong className="font-weight-italic">Email</strong>
            <Card.Text className="">
               {userInfo.email}
            </Card.Text>
            <strong className="font-weight-italic">Phone</strong>
            <Card.Text className="">
               {userInfo.phone}
            </Card.Text>
         </Card.Body>



         <Stripe />
         <Button onClick={Proceed}>Checkout</Button>
         <Button onClick={goBack} variant="secondary">Back</Button>
      </>
   )
}

export default Summary