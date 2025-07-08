import express, { Router } from "express";
import { GetKey, paymentsuccess, ProcessPayment } from "../controller/app_controller.js";
const router = express.Router();

router.route("/payment/process").post(ProcessPayment)

router.route("/payment/process/getkey").get(GetKey)

router.route("/paymentverify").post(paymentsuccess)

export default router;