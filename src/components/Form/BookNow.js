import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Zipcode from './Stepper/Zipcode';
import PersonalDetails from './Stepper/Personal_Details';
import OrderDetails from './Stepper/Order_Details';
import Summary from './Stepper/Summary';
import Success from './Stepper/Success';
import Price from './Stepper/Price';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import { useTheme } from '../../Utils/ThemeContext'
import styled from 'styled-components'

const ResponsiveCard = styled(Card)`
  width:80%;
  margin:0 auto;
  @media (min-width: 768px) {
  width:70%;
  }
  @media (min-width: 992px) {
  width:70%;
  }
  @media (min-width: 992px) {
  width:40%;
  }
`;

const Appointment = () => {
   const [page, setPage] = useState(0);
   const theme = useTheme()
   const [formData, setFormData] = useState({
      zipcode: '',
      phone: '',
      firstName: '',
      lastName: '',
      email: '',
      customer_id: '',
      date: '',
      time: '',
      weight: '0',
      price: 350,
      address: '',
      city: '',
      state: '',
      payment_status: '',
      order_id: ''
   })



   const renderComponent = () => {

      switch (page) {
         case 0:
            return (
               <>
                  <Zipcode formData={formData} setFormData={setFormData} page={page} setPage={setPage} />
               </>
            );
         case 1:
            return (
               <>
                  <PersonalDetails formData={formData} setFormData={setFormData} page={page} setPage={setPage} />
               </>
            )
         case 2:
            return (
               <>
                  <OrderDetails formData={formData} setFormData={setFormData} page={page} setPage={setPage} />
               </>
            )
         case 3:
            return <Summary formData={formData} setFormData={setFormData} page={page} setPage={setPage} />;

         case 4:
            return (
               <>
                  <Success formData={formData} setFormData={setFormData} />
               </>
            )

         default:
            return <Zipcode formData={formData} setFormData={setFormData} />;
      }
   }

   return (
      <Container className="p-5 pb-0 mb-0 position-relative border-0  " style={{ backgroundColor: theme.primary, minWidth: '100vw' }}>
         <Row>

            <ResponsiveCard className="px-2 py-4" style={{ transform: "translate(0,-14rem)", border: ` 3px solid ${theme.white} `, borderRadius: '12px', backgroundColor: theme.white, }} id="booking-form">



               <Price price={formData.price} />
               {renderComponent()}
               {console.log(formData)}

               {/* <Col md={12} className="justify-content-center d-flex">

<Button onClick={() => setPage(page - 1)} className={`${page === 0 || page > 2 ? "hidden" : ""}`}>{page !== 0 && page < 4 ? "Prev" : ""}</Button>
</Col> */}
               {/* <Button type="submit" className={`${page > 2 ? "hidden" : ""}`}>Next</Button> */}

            </ResponsiveCard>
         </Row>

      </Container >

   )
}

export default Appointment