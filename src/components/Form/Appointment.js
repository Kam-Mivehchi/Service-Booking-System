import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Zipcode from './Stepper/Zipcode';
import PersonalDetails from './Stepper/Personal_Details';
import OrderDetails from './Stepper/Order_Details';
import Stripe from './Stepper/Stripe';
import Success from './Stepper/Success';
import Price from './Stepper/Price';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'
import Card from 'react-bootstrap/Card';

const StyledTitle = styled(Card.Title)`
font-weight:bold;
margin: 1rem auto 2rem auto ;
font-size:1.5rem;
`
const Appointment = () => {
   const [page, setPage] = useState(0);
   const [loading, isLoading] = useState(true)
   const [formData, setFormData] = useState({
      zipcode: '',
      phone: '',
      firstName: '',
      lastName: '',
      email: '',
      customer_id: '',
      date: '',
      time: '',
      weight: '1',
      price: 350,
      address: '',
      city: '',
      state: '',
      payment_status: '',
      order_id: ''
   })

   // const [onSubmit, setOnSubmit] = useState(() => { })
   // const handleSubmit = (e) => {
   //    e.preventDefault()
   //    switch (page) {
   //       case 0:
   //          try {
   //             const range = CheckRange(formData.zipcode)

   //             setPage(page + 1)
   //             return range(formData.zipcode);
   //          } catch (error) {

   //          }

   //    }
   // }

   const renderComponent = () => {

      switch (page) {
         case 0:
            return <Zipcode formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;
         case 1:
            return <PersonalDetails formData={formData} setFormData={setFormData} page={page} setPage={setPage} />
         case 2:
            return <OrderDetails formData={formData} setFormData={setFormData} page={page} setPage={setPage} />
         // case 3:
         //    return <Summary formData={formData} setFormData={setFormData} />;
         case 3:
            return <Stripe formData={formData} setFormData={setFormData} page={page} setPage={setPage} />
         case 4:
            return <Success formData={formData} setFormData={setFormData} />

         default:
            return <Zipcode formData={formData} setFormData={setFormData} />;
      }
   }

   return (
      <Container className="p-5">
         <Card style={{}} className="p-2" >

            <Price price={formData.price} />


            {renderComponent()}
            {console.log(formData)}
            <Button onClick={() => setPage(page - 1)} className={`${page === 0 || page > 3 ? "hidden" : ""}`}>{page !== 0 && page < 4 ? "Prev" : ""}</Button>
            {/* <Button type="submit" className={`${page > 2 ? "hidden" : ""}`}>Next</Button> */}

         </Card>
      </Container >

   )
}

export default Appointment