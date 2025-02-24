import express from 'express';
import { createOrder, getUserOrders } from '../controller/orderController.js';
const router = express.Router();

router.post('/', createOrder);
router.get('/user', getUserOrders);

export default router;