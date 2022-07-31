import React from 'react'
import LocationForm from './formSteps/LocationForm'
import ServiceAndRadiusCheck from './formSteps/ServiceAndRadiusCheck'
import DateAndTime from './formSteps/DateAndTime'
import Container from 'react-bootstrap/Container'
import TaskDescription from './formSteps/TaskDescription'
import Summary from './formSteps/Summary'
import Payment from './formSteps/Payment'
const BookingForm = () => {
    return (
        <Container>
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