import app from "./app.js";
import dotenv from "dotenv";
import Razorpay from "razorpay";


dotenv.config({path:"backend/config/config.env"});

export const instance = new Razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_KEY_SECRET

})


app.listen(process.env.PORT||8000,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
})
