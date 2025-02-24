import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  const order = await Order.create({ ...req.body, paymentStatus: 'Pending' });
  res.status(201).json(order);
};

export const getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.userId }).populate('products.product');
  res.json(orders);
};
