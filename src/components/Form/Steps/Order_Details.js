
import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const Order_Details = ({ prevStep, nextStep, handleChange, userInfo, orderInfo, handlePrice }) => {


   const Proceed = e => {
      e.preventDefault();
      nextStep();
   }
   const goBack = e => {
      e.preventDefault();
      prevStep();
   }
   const updatePrice = e => {
      e.preventDefault()
      let weight_val = parseInt(e.target.value)
      // console.log(basePrice)


      if (weight_val > 7) {
         handlePrice(weight_val < 380 ? 1200 : 1300)
      } else if (weight_val > 6) {
         handlePrice(weight_val < 380 ? 1000 : 1050)
      } else if (weight_val > 5) {
         handlePrice(weight_val < 380 ? 950 : 980)
      } else if (weight_val > 4) {
         handlePrice(weight_val < 380 ? 850 : 880)
      } else if (weight_val > 3) {
         handlePrice(weight_val < 380 ? 650 : 680)
      } else if (weight_val > 2) {
         handlePrice(weight_val < 380 ? 550 : 580)
      } else if (weight_val > 1) {
         handlePrice(weight_val < 380 ? 450 : 480)
      } else {
         handlePrice(weight_val < 380 ? 350 : 380)
      }

   }
   return (
      <>

         <Form>

            <Form.Label as={Col} xs={12} >Weight
               <Form.Range type="range" min="1" max="8" placeholder="" onChange={updatePrice} defaultValue={orderInfo.weight} list="tickmarks" required />

            </Form.Label>
            <Form.Label as={Col} xs={12} >Pick Up Date
               <Form.Control type="date" placeholder="Pick Up Date" value={orderInfo.date} onChange={handleChange('date')} defaultValue={orderInfo.date} required />
            </Form.Label>
            <Form.Label as={Col} xs={12} >Pick Up Time
               <Form.Control type="time" placeholder="Pick Up Time" value={orderInfo.time} onChange={handleChange('time')} defaultValue={orderInfo.time} required />
            </Form.Label>
            <Form.Label as={Col} xs={12} >Street Address
               <Form.Control type="text" placeholder="1234 Madison St." value={orderInfo.address} onChange={handleChange('address')} defaultValue={orderInfo.address} required />
            </Form.Label>
            <Form.Label as={Col} xs={12} >City
               <Form.Control type="text" placeholder="1234 Madison St." value={orderInfo.city} onChange={handleChange('city')} defaultValue={orderInfo.city} required />
            </Form.Label>
            <Form.Label as={Col} xs={12} >State
               <Form.Control type="text" placeholder="CA" minLength='2' maxLength='2' value={orderInfo.state} onChange={handleChange('state')} defaultValue={orderInfo.state} required />
            </Form.Label>
         </Form>
         <Button onClick={Proceed}>Next</Button>
         <Button onClick={goBack} variant="secondary">Back</Button>
      </>
   )
}

export default Order_Details