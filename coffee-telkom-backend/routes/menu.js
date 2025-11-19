const express = require('express');
const Menu = require('../models/menu');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

// GET All Menus
router.get('/', async (req, res) => {
  try {
    const menus = await Menu.find({});
    res.json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET Menu by ID
router.get('/:id', async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) return res.status(404).json({ message: 'Menu not found' });
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST Create New Menu (Admin Only)
router.post('/', auth, adminOnly, async (req, res) => {
  try {
    const { name, price, desc, image, category, stock } = req.body;

    const newMenu = new Menu({
      name,
      price,
      desc,
      image,
      category,
      stock
    });

    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT Update Menu (Admin Only)
router.put('/:id', auth, adminOnly, async (req, res) => {
  try {
    const { name, price, desc, image, category, stock } = req.body;

    const updatedMenu = await Menu.findByIdAndUpdate(
      req.params.id,
      { name, price, desc, image, category, stock },
      { new: true, runValidators: true }
    );

    if (!updatedMenu) return res.status(404).json({ message: 'Menu not found' });

    res.json(updatedMenu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE Menu (Admin Only)
router.delete('/:id', auth, adminOnly, async (req, res) => {
  try {
    const deletedMenu = await Menu.findByIdAndDelete(req.params.id);

    if (!deletedMenu) return res.status(404).json({ message: 'Menu not found' });

    res.json({ message: 'Menu deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;