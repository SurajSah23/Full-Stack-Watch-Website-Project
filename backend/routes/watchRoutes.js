import express from 'express';
import {
  getWatches,
  getWatchById,
  createWatch,
  updateWatch,
  deleteWatch,
  getWatchesByCategory
} from '../controllers/watchController.js';

const router = express.Router();

// Get all watches
router.get('/', getWatches);

// Get a single watch by ID
router.get('/:id', getWatchById);

// Create a new watch
router.post('/', createWatch);

// Update a watch
router.put('/:id', updateWatch);

// Delete a watch
router.delete('/:id', deleteWatch);

// Get watches by category
router.get('/category/:category', getWatchesByCategory);

export default router;