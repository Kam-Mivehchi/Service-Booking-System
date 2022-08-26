import React, { useState, useEffect } from "react";
// import "./App.css";

import Summary from "./Summary"

import Button from 'react-bootstrap/Button';

let urlChoice = { prod: 'https://back-end4.herokuapp.com', dev: 'http://localhost:3005' }

const ProductDisplay = ({ formData }) => (
   <section>
      <Summary formData={formData} />
      <form action={`${urlChoice.prod}/api/payment/create-checkout-session`} method="POST">
         <Button type="submit">
            Checkout
         </Button>
      </form>
   </section>
);

const Message = ({ message }) => (
   <section>
      <p>{message}</p>
   </section>
);

export default function Stripe({ formData }) {
   const [message, setMessage] = useState("");

   useEffect(() => {
      // Check to see if this is a redirect back from Checkout
      const query = new URLSearchParams(window.location.search);

      if (query.get("success")) {
         setMessage("Order placed! You will receive an email confirmation.");
      }

      if (query.get("canceled")) {
         setMessage(
            "Order canceled -- continue to shop around and checkout when you're ready."
         );
      }
   }, []);

   return message ? (
      <Message message={message} />
   ) : (
      <ProductDisplay formData={formData} />
   );
}