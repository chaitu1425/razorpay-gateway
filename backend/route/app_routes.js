import express, { Router } from "express";
import { GetKey, ProcessPayment } from "../controller/app_controller.js";
const router = express.Router();

router.route("/payment/process").post(ProcessPayment)

router.route("/payment/process/getkey").get(GetKey)

export default router;