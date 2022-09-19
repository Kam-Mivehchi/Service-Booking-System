import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { axiosConfig } from '../../../Utils/api'
import Spinner from 'react-bootstrap/Spinner';
import { useTheme } from '../../../Utils/ThemeContext'

const Zipcode = ({ formData, setFormData, setPage, page }) => {
   const [feedBack, setFeedBack] = useState(<small className="text-secondary ">Enter your zipcode to check if you are in our service area</small>)
   const [valid, setValid] = useState(false);
   const [loading, setLoading] = useState(false);
   const theme = useTheme();
   const CheckRange = async (e) => {
      e.preventDefault();

      try {
         setLoading(true)
         const response = await axios.post('/price', {
            zipcode: formData.zipcode,
            weight: formData.weight
         },
            axiosConfig
         )

         // if (response.data.alid === false) {
         //    throw new Error("out of Range")
         // }
         console.log(response)
         setFormData({
            ...formData,
            price: response.data
         })
         setValid(true)
         setFeedBack(<small className="text-success ">
            Your in Range! Tell us a little about yourself
         </small>)
         setTimeout(() => setPage(page + 1), 1000)
         // setPage(page + 1)

      } catch (err) {

         console.log(err)
         setFeedBack(<small className="text-danger">
            Sorry looks like your out of our range
         </small>)
         return err;
      } finally {

         setLoading(false)
      }


   }
   return (

      <Form onSubmit={CheckRange} className="d-flex flex-column align-items-center">

         <small className="text-danger text-center rounded p-1 mx-4 ">
            For demo, use 92807 or 90001 to see price change based on distance
         </small>
         <Col md={12} className="d-flex justify-content-center">
            <Form.Label
               className="mx-auto"
            >
               Zipcode
               <Form.Control onChange={(e) => setFormData({
                  ...formData,
                  zipcode: e.target.value
               })}
                  value={formData.zipcode}
                  placeholder="Zip Code" />
               <div className="text-center">

                  {feedBack}
               </div>
            </Form.Label>
         </Col>


         <Row className="" >

            <Col md={12} className="justify-content-center">

               <Button type="submit" className={`${page > 2 || valid ? "hidden" : ""} `} variant={valid ? "success" : ""} disabled={!formData.zipcode} style={{ backgroundColor: theme.secondary, color: theme.white, borderRadius: '9999px' }}>{loading === true ? <Spinner animation="border " role="status"></Spinner> : "Check Zip"}</Button>
            </Col>
         </Row>
      </Form>
   )
}

export default Zipcode