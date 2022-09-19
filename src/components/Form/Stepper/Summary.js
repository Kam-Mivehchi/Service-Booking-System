import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import dayjs from 'dayjs'
import { useTheme } from '../../../Utils/ThemeContext'
import { StyledTitle } from '../../../Utils/StyledComponents'




// TODO add edit options on date time adress and weight fields
const Summary = ({ formData, page, setPage }) => { //{ nextStep, prevStep, userInfo, formData }
   const theme = useTheme()
   return (
      <>


         <Card.Body>
            <StyledTitle className="text-center">Order Summary</StyledTitle>
            <ListGroup variant="flush" className="d-flex flex-row justify-content-around">
               <ListGroup.Item className="text-center border-0">
                  <h2>
                     {formData.weight === '0' ? "<1 ton" : `${formData.weight} tons`}
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

         <Button type="submit" onClick={() => setPage(page + 1)} style={{ backgroundColor: theme.secondary, color: 'white', borderRadius: '12px', }}>
            Checkout
         </Button>



      </>
   )
}

export default Summary