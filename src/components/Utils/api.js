import axios from 'axios';

let urlChoice = { prod: 'https://back-end4.herokuapp.com', dev: 'http://localhost:3005' }
export let axiosConfig = {
   baseURL: `${urlChoice.prod}/api`,
   headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
   }
};

// export const CheckRange = async (zipcode) => {

//    console.log(zipcode)
//    try {
//       const response = await axios.post('/checkRange', {
//          zipcode: zipcode,
//       },
//          axiosConfig
//       )

//       console.log(response.data)
//       if (response.data.isValid === false) {
//          throw new Error("out of Range")
//       }
//       return response.data
//    } catch (err) {

//       console.log(err)
//       return err;
//    }


// }
