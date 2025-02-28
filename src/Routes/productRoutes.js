import express from 'express';
import { getProducts, createProduct } from '../controller/productController.js';
const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);

export default router;
