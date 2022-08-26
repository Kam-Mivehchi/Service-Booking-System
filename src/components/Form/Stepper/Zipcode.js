import React, { useRef, useState, } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { axiosConfig } from '../../Utils/api'
const Zipcode = ({ formData, setFormData, setPage, page }) => {
   const [feedBack, setFeedBack] = useState(<small>Enter your zipcode to check if you are in our service area</small>)
   const [valid, setValid] = useState(false)
   const CheckRange = async (e) => {
      e.preventDefault();
      console.log(formData.zipcode)
      try {
         const response = await axios.post('/checkRange', {
            zipcode: formData.zipcode,
         },
            axiosConfig
         )

         if (response.data.isValid === false) {
            throw new Error("out of Range")
         }
         setValid(true)
         setFeedBack(<small className="text-success">
            Your in luck, tell us a little about yourself
         </small>)
         setTimeout(() => setPage(page + 1), 1500)
         // setPage(page + 1)

      } catch (err) {

         console.log(err)
         setFeedBack(<small className="text-danger">
            Sorry looks like your out of our range
         </small>)
         return err;
      }


   }
   return (
      <Row >

         <Form onSubmit={CheckRange} >
            <Col md={12}>

               <Form.Label onChange={(e) => setFormData({
                  ...formData,
                  zipcode: e.target.value
               })}
                  value={formData.zipcode}
               >
                  Zipcode
                  <Form.Control />
                  {feedBack}
               </Form.Label>
               <Button type="submit" className={`${page > 2 ? "hidden" : ""}`} variant={valid ? "success" : "primary"} disabled={!formData.zipcode}>{valid ? "Success" : "Check Zip"}</Button>
            </Col>
         </Form>
      </Row >
   )
}

export default Zipcode