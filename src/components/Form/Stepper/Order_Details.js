
import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { axiosConfig } from '../../Utils/api'
import axios from 'axios'
const OrderDetails = ({ formData, setFormData, setPage, page }) => { //{ prevStep, nextStep, handleChange, orderInfo, handlePrice }

   const newOrder = async (e) => {
      e.preventDefault();

      try {
         const new_order = await axios.post('/orders', {
            weight: formData.weight,
            date: formData.date,
            time: formData.time,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zip: formData.zipcode,
         },
            axiosConfig
         )
         console.log(new_order.data.orderId)
         setFormData({
            ...formData,
            order_id: new_order.data.orderId
         })
         setPage(page + 1)
      } catch (err) {
         console.log(err)
      }
   }

   return (
      <>

         <Form onSubmit={newOrder}>


            <Form.Label as={Col} xs={12} >Weight
               <Form.Range type="range" min="1" max="8" placeholder="" value={formData.weight} onChange={(e) => setFormData({
                  ...formData,
                  weight: e.target.value
               })} required />

            </Form.Label>
            <Form.Label as={Col} xs={12} >Pick Up Date
               <Form.Control type="date" placeholder="Pick Up Date" value={formData.date} onChange={(e) => setFormData({
                  ...formData,
                  date: e.target.value
               })} defaultValue={formData.date} required />
            </Form.Label>
            <Form.Label as={Col} xs={12} >Pick Up Time
               <Form.Control type="time" placeholder="Pick Up Time" value={formData.time} onChange={(e) => setFormData({
                  ...formData,
                  time: e.target.value
               })} defaultValue={formData.time} required />
            </Form.Label>
            <Form.Label as={Col} xs={12} >Street Address
               <Form.Control type="text" placeholder="1234 Madison St." value={formData.address} onChange={(e) => setFormData({
                  ...formData,
                  address: e.target.value
               })} defaultValue={formData.address} required />
            </Form.Label>
            <Form.Label as={Col} xs={12} >City
               <Form.Control type="text" placeholder="1234 Madison St." value={formData.city} onChange={(e) => setFormData({
                  ...formData,
                  city: e.target.value
               })} defaultValue={formData.city} required />
            </Form.Label>
            <Form.Label as={Col} xs={12} >State
               <Form.Control type="text" placeholder="CA" minLength='2' maxLength='2' value={formData.state} onChange={(e) => setFormData({
                  ...formData,
                  state: e.target.value
               })} defaultValue={formData.state} required />
            </Form.Label>

            <Button type="submit" >Next</Button>

         </Form>
      </>
   )
}

export default OrderDetails