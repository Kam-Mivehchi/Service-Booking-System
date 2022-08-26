import React from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const PersonalDetails = ({ prevStep, nextStep, handleChange, userInfo, orderInfo }) => {
   const Proceed = e => {
      e.preventDefault();
      nextStep();
   }
   const goBack = e => {
      e.preventDefault();
      prevStep();
   }
   console.log(orderInfo)
   return (
      <>

         <Form onSubmit={Proceed}>

            <Form.Label as={Col} xs={12}>First Name
               <Form.Control type="text" placeholder="First Name" value={userInfo.firstName} onChange={handleChange('firstName')} defaultValue={userInfo.firstName} required />
            </Form.Label>
            <Form.Label as={Col} xs={12} >Last Name
               <Form.Control type="text" placeholder="Last Name" value={userInfo.lastName} onChange={handleChange('lastName')} defaultValue={userInfo.lastName} required />
            </Form.Label>
            <Form.Label as={Col} xs={12} >Phone
               <Form.Control type="tel" placeholder="Enter Phone #" value={userInfo.phone} onChange={handleChange('phone')} defaultValue={userInfo.phone} required />
            </Form.Label>
            <Form.Label as={Col} xs={12} >Email
               <Form.Control type="email" placeholder="Enter Email" value={userInfo.email} onChange={handleChange('email')} defaultValue={userInfo.email} required />
            </Form.Label>

            <Button onClick={goBack}>Back</Button>
            <Button type="submit">Next</Button>
         </Form>
      </>
   )
}

export default PersonalDetails