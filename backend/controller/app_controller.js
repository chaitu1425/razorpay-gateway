import Razorpay from "razorpay"
import { instance } from "../server.js"
import crypto from "crypto"


export const ProcessPayment =async(req,res)=>{
    const options = {
        amount:Number(req.body.amount*100),
        currency:"INR"
    }

    const order = await instance.orders.create(options)

    res.send({
        status:1,
        message:"success",
        order
    })
}


export const GetKey = async(req,res)=>{
    res.send({staus:1,keyOrder:process.env.RAZORPAY_KEY_ID})
}

export const paymentsuccess = async(req,res)=>{
    const {razorpay_payment_id,razorpay_order_id,razorpay_signature} = req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac("sha256",process.env.RAZORPAY_KEY_SECRET).update(body.toString()).digest("hex");
    const isauth = expectedSignature===razorpay_signature;

    if(isauth){
        return res.redirect(`http://localhost:5173/paymentSuccess?reference=${razorpay_payment_id}`)
    }else{
        res.send({success:false})
    }
}