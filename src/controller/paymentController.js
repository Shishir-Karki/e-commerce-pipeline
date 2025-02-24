import axios from 'axios';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const CASHFREE_API_URL = 'https://sandbox.cashfree.com/pg/orders'; // Sandbox URL
const HEADERS = {
  'Content-Type': 'application/json',
  'x-client-id': process.env.CASHFREE_CLIENT_ID,
  'x-client-secret': process.env.CASHFREE_CLIENT_SECRET
};

// Create a Payment Order
router.post('/create-order', async (req, res) => {
  try {
    const { orderId, orderAmount, customerEmail, customerPhone } = req.body;

    const payload = {
      order_id: orderId,
      order_amount: orderAmount,
      order_currency: 'INR',
      customer_details: {
        customer_id: '12345',
        customer_email: customerEmail,
        customer_phone: customerPhone
      }
    };

    const response = await axios.post(CASHFREE_API_URL, payload, { headers: HEADERS });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response.data });
  }
});

export default router;
