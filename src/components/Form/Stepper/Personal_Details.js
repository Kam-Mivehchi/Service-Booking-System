import { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { axiosConfig } from '../../Utils/api'
import axios from 'axios'
import styled from 'styled-components'
import { useTheme } from '../../../contexts/Theme'

const StyledTitle = styled(Card.Title)`
font-weight:bold;
margin: 1rem auto 1rem auto ;
font-size:1.5rem;
`
const PersonalDetails = ({ formData, setFormData, setPage, page }) => {  //{ prevStep, nextStep, setFormData({
   const [loading, setLoading] = useState(false)
   const theme = useTheme();

   const createUser = async (e) => {
      e.preventDefault();
      try {
         //add logic to check if user exists already
         //otherwise createUser
         setLoading(true)
         const find_user = await axios.post('/customers/findUser', {

            phone: formData.phone,
         },
            axiosConfig
         )
         if (!find_user.data) throw new Error("No user with that phone number exists")
         // console.log(find_user)
         setFormData({
            ...formData,
            customer_id: find_user.data
         })
      } catch (e) {
         console.log(e)
         try {

            const create_user = await axios.post('/customers', {
               Fname: formData.firstName,
               Lname: formData.lastName,
               phone: formData.phone,
               email: formData.email
            },
               axiosConfig
            )
            console.log(create_user.data)
            setFormData({
               ...formData,
               customer_id: create_user.data.id
            })
            setPage(page + 1)
         } catch (e) {
            console.log(e)
         }

      } finally {
         setLoading(false)
      }
   }

   return (
      <>
         <StyledTitle> Contact Info</StyledTitle>
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
            <Col md={12} className="justify-content-center d-flex gap-3">

               <Button style={{ backgroundColor: theme.secondary, color: theme.white, borderRadius: '12px', }} onClick={() => setPage(page - 1)} className={`${page === 0 || page > 2 ? "hidden" : ""} `}>{page !== 0 && page < 4 ? "Prev" : ""}</Button>
               <Button style={{ backgroundColor: theme.secondary, color: theme.white, borderRadius: '12px', }} type="submit" >{loading ? <Spinner animation="border " role="status"></Spinner> : "Next"}</Button>
            </Col>
            {/* className={`${page > 2 ? "hidden" : ""}`} variant={valid ? "success" : "primary"} disabled={!formData.zipcode}>{valid ? "Success" : "Check Zip"} */}
         </Form>
      </>
   )
}

export default PersonalDetails