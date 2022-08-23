import React, { Component } from 'react'
import Zipcode from './Steps/Zipcode'
import Personal_Details from './Steps/Personal_Details'
import Order_Details from './Steps/Order_Details'
import Summary from './Steps/Summary'
import Stripe from './formSteps/pay'
import Success from './Steps/Success'
import Price_Breakdown from './formSteps/Price';
import styled from 'styled-components'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Pay from './formSteps/pay.js'
const StyledTitle = styled(Card.Title)`
font-weight:bold;
margin: 1rem auto 2rem auto ;
font-size:1.5rem;
`
export default class BookNow extends Component {

   state = {
      step: 1,
      zipcode: '',
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      customer_id: '',
      date: '',
      time: '',
      weight: 1,
      price: '',
      address: '',
      city: '',
      state: '',
      payment_status: '',
      price: 350,
   }

   prevStep = () => {
      const { step } = this.state;
      this.setState({ step: step - 1 })
   }
   nextStep = () => {
      const { step } = this.state;
      this.setState({ step: step + 1 })
   }

   handleChange = input => e => {
      this.setState({ [input]: e.target.value })
      // console.log(this.state)
   }
   handlePrice = (price) => {
      this.setState({ price: price })
   }

   render() {

      const { step } = this.state
      const { email, firstName, lastName, phone, customer_id } = this.state
      const { date, time, weight, address, city, state, zip, payment_status, price } = this.state
      const user = { email, firstName, lastName, phone, customer_id }
      const order = { date, time, weight, address, city, state, zip, payment_status, price }


      switch (step) {
         case 1:
            return (
               <>
                  <Pay />
                  <StyledTitle>Enter Zip Code</StyledTitle>

                  <Price_Breakdown price={order.price} />

                  <Zipcode
                     nextStep={this.nextStep}
                     handleChange={this.handleChange}
                     handlePrice={this.handlePrice}
                     orderInfo={order}

                  />
               </>
            )
         case 2:
            return (
               <>
                  <StyledTitle>Contact Information</StyledTitle>

                  <Price_Breakdown price={order.price} />

                  <Personal_Details
                     prevStep={this.prevStep}
                     nextStep={this.nextStep}
                     handleChange={this.handleChange}

                     userInfo={user}
                     orderInfo={order}
                  />

               </>
            )
         case 3:
            return (
               <>
                  <StyledTitle>Pick Up Details</StyledTitle>

                  <Price_Breakdown price={order.price} />

                  <Order_Details
                     prevStep={this.prevStep}
                     nextStep={this.nextStep}
                     handleChange={this.handleChange}
                     handlePrice={this.handlePrice}
                     userInfo={user}
                     orderInfo={order}
                  />
               </>
            )
         case 4:
            return (
               <>
                  <StyledTitle> Order Summary</StyledTitle>


                  <Summary className="bg-black"
                     prevStep={this.prevStep}
                     handleChange={this.handleChange}
                     userInfo={user}
                     orderInfo={order}
                  />

               </>
            )
         case 5:
            return (
               <>
                  <StyledTitle>Checkout</StyledTitle>
                  <Stripe
                     prevStep={this.prevStep}
                     nextStep={this.nextStep}
                     handleChange={this.handleChange}
                     userInfo={user}
                     orderInfo={order}
                  />
               </>
            )
         case 6:
            return (
               <>
                  <StyledTitle>Summary</StyledTitle>
                  <Success

                     userInfo={user}
                     orderInfo={order} />
               </>
            )
      }


   }
}
