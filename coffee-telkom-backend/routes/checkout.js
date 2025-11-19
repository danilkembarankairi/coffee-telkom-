const express = require('express');
const Cart = require('../models/cart');
const Transaction = require('../models/transaction');
const midtrans = require('../config/midtrans');
const { auth } = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const { address } = req.body;

    const cart = await Cart.findOne({ userId: req.user._id }).populate('items.productId');
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const transaction = new Transaction({
      userId: req.user._id,
      items: cart.items.map(item => ({
        productId: item.productId._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image
      })),
      total: cart.total,
      address: address,
      status: 'pending'
    });

    await transaction.save();

    const parameter = {
      transaction_details: {
        order_id: transaction._id.toString(),
        gross_amount: transaction.total
      },
      customer_details: {
        first_name: req.user.name.split(' ')[0],
        last_name: req.user.name.split(' ').slice(1).join(' ') || '',
        email: req.user.email,
        phone: ''
      },
      item_details: cart.items.map(item => ({
        id: item.productId._id.toString(),
        price: item.price,
        quantity: item.quantity,
        name: item.name
      }))
    };

    const snapToken = await midtrans.createTransaction(parameter);
    transaction.midtransOrderId = snapToken.order_id;
    transaction.midtransPaymentUrl = snapToken.redirect_url;
    await transaction.save();

    res.json({
      transactionId: transaction._id,
      redirectUrl: snapToken.redirect_url
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;