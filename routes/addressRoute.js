import express from 'express'
import { userAddress } from '../controllers/addressController.js';
const addressRouter=express.Router();

addressRouter.post("/address-user",userAddress);

export default addressRouter;