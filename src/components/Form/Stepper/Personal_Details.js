import React from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { axiosConfig } from '../../Utils/api'
import axios from 'axios'
const PersonalDetails = ({ formData, setFormData, setPage, page }) => {  //{ prevStep, nextStep, setFormData({

   const createUser = async (e) => {
      e.preventDefault();
      try {
         //add logic to check if user exists already
         //otherwise createUser

         const find_user = await axios.post('/customers/findUser', {

            phone: formData.phone,
         },
            axiosConfig
         )
         console.log(find_user)
         setFormData({
            ...formData,
            customer_id: find_user.data
         })
      } catch (e) {
         // console.log(e)
         const create_user = await axios.post('/customers', {
            Fname: formData.firstName,
            Lname: formData.lastName,
            phone: formData.phone,
            email: formData.email
         },
            axiosConfig
         )

         setFormData({
            ...formData,
            data: create_user.customer_id
         })

      } finally {
         setPage(page + 1)

      }
   }

   return (
      <>

         <Form onSubmit={createUser}>

            <Form.Label as={Col} xs={12} >Phone
               <Form.Control type="tel" placeholder="Enter Phone #" minLength="10" maxLength="10" pattern="[0-9]*" value={formData.phone} onChange={(e) => setFormData({
                  ...formData,
                  phone: e.target.value
               })} defaultValue={formData.phone} required />
            </Form.Label>
            <Form.Label as={Col} xs={12}>First Name
               <Form.Control type="text" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({
                  ...formData,
                  firstName: e.target.value
               })} defaultValue={formData.firstName} required />
            </Form.Label>
            <Form.Label as={Col} xs={12} >Last Name
               <Form.Control type="text" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({
                  ...formData,
                  lastName: e.target.value
               })} defaultValue={formData.lastName} required />
            </Form.Label>
            <Form.Label as={Col} xs={12} >Email
               <Form.Control type="email" placeholder="Enter Email" value={formData.email} onChange={(e) => setFormData({
                  ...formData,
                  email: e.target.value
               })} defaultValue={formData.email} required />
            </Form.Label>

            <Button type="submit" >Next</Button>
            {/* className={`${page > 2 ? "hidden" : ""}`} variant={valid ? "success" : "primary"} disabled={!formData.zipcode}>{valid ? "Success" : "Check Zip"} */}

         </Form>
      </>
   )
}

export default PersonalDetails