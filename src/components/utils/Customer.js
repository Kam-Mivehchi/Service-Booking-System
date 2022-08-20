import axios from "axios";
let axiosConfig = {
    baseURL: 'http://localhost:3005/api',
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
};
export class Customer {
    constructor(Lname, Fname, email, phone,) {
        this.Lname = Lname;
        this.Fname = Fname;
        this.email = email;
        this.phone = phone;
    }

    returning(phone) {
        const response = await axios.get(`/customer/findUser`, axiosConfig)

        return response.id
    }
}