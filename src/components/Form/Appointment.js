import React from 'react'
import Container from 'react-bootstrap/Container';
import Zipcode from './Steps/Zipcode';
import PersonalDetails from './Steps/Personal_Details'
import OrderDetails from './Steps/Order_Details'
const Appointment = () => {
   const [page, setPage] = useState(0)
   const renderComponent = () => {
      switch (page) {
         case 0:

      }
   }

   return (
      <Container>

      </Container>
   )
}

export default Appointment