
import { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { axiosConfig } from '../../Utils/api'
import axios from 'axios'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card';

const StyledTitle = styled(Card.Title)`
font-weight:bold;
margin: 1rem auto 1rem auto ;
font-size:1.5rem;
`
const OrderDetails = ({ formData, setFormData, setPage, page }) => { //{ prevStep, nextStep, handleChange, orderInfo, handlePrice }
   const [loading, setLoading] = useState(false)
   const newOrder = async (e) => {
      e.preventDefault();

      try {
         setLoading(true)
         const new_order = await axios.post('/orders', {
            weight: formData.weight,
            date: formData.date,
            time: formData.time,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zip: formData.zipcode,
            customer_id: formData.customer_id
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
      } finally {
         setLoading(false)
      }
   }
   const updatePrice = async (e) => {

      try {
         console.log(e)
         const new_price = await axios.post('/price', {
            zipcode: formData.zipcode,
            weight: e.target.value,

         },
            axiosConfig
         )
         setFormData({
            ...formData,
            weight: e.target.value,
            price: new_price.data
         })
         console.log(new_price)
      } catch (err) {
         console.log(err)
      }

   }
   return (
      <>
         <StyledTitle>Order Details</StyledTitle>
         <Form onSubmit={newOrder}>


            <Form.Label as={Col} xs={12} >Weight
               <Form.Range type="range" min="0" max="7" onChange={updatePrice} required />

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

            <Col md={12} className="justify-content-center d-flex">

               <Button onClick={() => setPage(page - 1)} className={`${page === 0 || page > 2 ? "hidden" : ""}`}>{page !== 0 && page < 4 ? "Prev" : ""}</Button>
               <Button type="submit" >{loading ? <Spinner animation="border " role="status"></Spinner> : "Next"}</Button>
            </Col>

         </Form>
      </>
   )
}

export default OrderDetails