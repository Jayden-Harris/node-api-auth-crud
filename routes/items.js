// routes/items.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  getItems,
  createItem,
  updateItem,
  deleteItem
} = require('../controllers/itemController');

// @route   GET /api/items
router.get('/', authMiddleware, getItems);

// @route   POST /api/items
router.post('/', authMiddleware, createItem);

// @route   PUT /api/items/:id
router.put('/:id', authMiddleware, updateItem);

// @route   DELETE /api/items/:id
router.delete('/:id', authMiddleware, deleteItem);

module.exports = router;
