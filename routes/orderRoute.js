import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { orderVerify, placeOrder } from '../controllers/orderController.js'

const orderRouter=express.Router();

orderRouter.post("/place",placeOrder);
orderRouter.post("/payment-verification",orderVerify)
export default orderRouter;