import React from 'react'
// import LocationForm from './formSteps/LocationForm'
import ServiceAndRadiusCheck from './formSteps/ServiceAndRadiusCheck'
import DateAndTime from './formSteps/DateAndTime'
import Container from 'react-bootstrap/Container'
import TaskDescription from './formSteps/TaskDescription'
import Summary from './formSteps/Summary'
import Payment from './formSteps/Payment'
const BookingForm = () => {

    let checkZip = (e) => {
        e.preventDefault()
        console.log(e.target.value)

    }
    return (
        <Container>
            <form action="http://localhost:3005/api/payment/create-checkout-session" method="POST" class="">
                <label for="">Zip Code</label>
                <input type="text" id="zipcode" name="zip" />

                <button className="bg-primary" type="button" formaction="http://localhost:3005/api/orders/checkRange" method="POST" >Check Radius</button>


                <button type="submit">Checkout</button>
            </form>
            <ServiceAndRadiusCheck />
            <DateAndTime />
            <TaskDescription />
            {/* <LocationForm /> */}
            <Summary />
            <Payment />
        </Container>
    )
}

export default BookingForm