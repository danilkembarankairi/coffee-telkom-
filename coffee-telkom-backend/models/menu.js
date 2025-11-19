const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  price: {
    type: String,
    required: true,
    match: [/^Rp\d{1,3}(?:\.\d{3})*$/, 'Format harga harus seperti: Rp25.000'],
  },
  desc: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    match: [/^\/[a-zA-Z0-9_.-]+\.jpg$|^\/[a-zA-Z0-9_.-]+\.jpeg$|^\/[a-zA-Z0-9_.-]+\.png$/, 'Gambar harus berformat .jpg, .jpeg, atau .png dan berada di folder /static/'],
  },
  category: {
    type: String,
    enum: ['coffee', 'non-coffee', 'snack'],
    default: 'coffee',
  },
  stock: {
    type: Number,
    default: 999,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

menuSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Menu', menuSchema);