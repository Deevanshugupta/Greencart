import express from 'express'
import authUser from '../middlewares/authUser.js';
import { getAllrOrders, getUserOrders, placedOrderCOD, placedOrderStripe } from '../controllers/orderController.js';
import authSeller from '../middlewares/authSeller.js';
import { get } from 'mongoose';


const orderRouter=express.Router();

orderRouter.post('/cod',authUser,placedOrderCOD)
orderRouter.post('/user',authUser,getUserOrders)
orderRouter.post('/seller',authSeller,getAllrOrders)
orderRouter.post('/stripe',authUser,placedOrderStripe)

export default orderRouter;