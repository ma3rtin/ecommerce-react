import { Router } from "express";
import { getOrders, getOrderById, createOrder, resolveOrder } from "../controllers/order.controller.js";
const ordersRouter = Router();

ordersRouter.get('/',getOrders);
ordersRouter.post('/',createOrder);
ordersRouter.get('/:oid',getOrderById);
ordersRouter.put('/:oid',resolveOrder);

export default ordersRouter;