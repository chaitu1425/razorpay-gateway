import { instance } from "../server.js"


export const ProcessPayment =async (req,res)=>{
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
    res.send({staus:1,key:process.env.RAZORPAY_KEY_ID})
}