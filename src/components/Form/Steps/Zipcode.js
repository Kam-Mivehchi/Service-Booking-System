import React, { useRef, useState, } from 'react'


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import axios from 'axios';

let urlChoice = { prod: 'https://back-end4.herokuapp.com', dev: 'http://localhost:3005' }
let axiosConfig = {
   baseURL: `${urlChoice.prod}/api`,
   headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
   }
};





const Zipcode = ({ nextStep, handleChange, orderInfo, handlePrice }) => {
   const [zipStatus, setZipStatus] = useState()

   const inputEl = useRef(null);

   // const Proceed = useCallback(() => { nextStep() }, [])

   // function Proceed() {
   //    nextStep()
   // }

   let checkRange = (e) => {
      console.log(orderInfo)
      e.preventDefault()
      axios.post('/checkRange', {
         zipcode: orderInfo.zip,
      },
         axiosConfig
      ).then(function (response) {
         return response
      }).then(function (data) {
         // console.log(data.data.starting_price)
         console.log(data)
         // console.log(data.data.isValid)
         handlePrice(data.data.starting_price)
         setZipStatus(data.data.isValid)
         if (data.data.isValid === true) {
            setTimeout(() => {
               // Proceed();

               nextStep()
            }, 1000)
         }

         else {
            setZipStatus(false)
         }

         console.log(zipStatus)
      }).catch(error => console.log(error))

   }

   return (
      <>

         <Form className="text-center mx-auto d-flex flex-column w-50 align-items-center" onSubmit={checkRange}>


            <Form.Label>Zip Code
               <Form.Control type="text" ref={inputEl} minLength="5" maxLength="5" pattern="[0-9]*" placeholder="Enter Zipcode" value={orderInfo.zip} onChange={handleChange('zip')} defaultValue={orderInfo.zip} required />
               {zipStatus === false && (<small class="text-danger"> Sorry, looks like you are out of range <br></br> We service LA, OC, Riverside, and San Berarndino</small>)}
               {zipStatus === true && (<h4 class="text-success "> Your in the area, moving on to contact info</h4>)}
            </Form.Label>
            <div className="w-50 text-center">
               <Button onClick={checkRange} type="submit" variant={zipStatus === false ? "danger" : "success"} >Check Range</Button>
            </div>

         </Form>

      </>
   )
}

export default Zipcode