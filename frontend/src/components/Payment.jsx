import React, { useState} from 'react'
import { Button, Label, TextInput } from "flowbite-react";
import '../styles/Payment.css'
import axios from 'axios';


const Payment = () => {
    const [amount,setAmount] = useState(100);
    
    const PaymentProceed = async(e)=>{
        e.preventDefault();
        console.log("amount",amount)
        const {data:key} = await axios.get("/api/v1/payment/process/getkey");
        const {keyOrder}= key
        const {data:OrderData} =await axios.post("/api/v1/payment/process",{amount});
        const {order} = OrderData;


        const options = {
        key: keyOrder, 
        amount, 
        currency: 'INR',
        name: 'Chaitanya',
        description: 'Razorpay Intergration',
        order_id: order.id,
        callback_url: '/api/v1/paymentverify', 
        prefill: {
          name: 'Chaitanya',
          email: 'psaichaitanya27@gmail.com',
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    }

    return (
        <div className="container">
            <h1 className='font-bold text-[30px]'>Razorpay</h1>
            <form id="paymentForm" onSubmit={PaymentProceed}>
                <div className="form-group">
                    <label htmlFor="amount">💰 Amount (INR):</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        required
                        min="1"
                        defaultValue="100"
                        placeholder="Enter amount in rupees"
                        onChange={(e)=>setAmount(e.target.value)}
                        
                    />
                </div>
                <button type="submit" id="payButton">💳 Pay Now</button>
            </form>
        </div>
    )
}

export default Payment
