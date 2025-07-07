import React, { useRef } from 'react'
import { Button, Label, TextInput } from "flowbite-react";
import '../styles/Payment.css'

const Payment = () => {
    const amountRef = useRef(null)

    const PaymentProceed = async()=>{
        const enteredAmount = amountRef.current.value;
        console.log(enteredAmount)
    }

    return (
        <div className="container">
            <h1 className='font-bold text-[30px]'>Razorpay</h1>
            <form id="paymentForm">
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
                        ref={amountRef}
                    />
                </div>
                <button type="submit" id="payButton" onClick={PaymentProceed}>💳 Pay Now</button>
            </form>
        </div>
    )
}

export default Payment
