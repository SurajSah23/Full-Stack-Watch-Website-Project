import Watch from '../models/Watch.js';

// Get all watches
export const getWatches = async (req, res) => {
  try {
    const watches = await Watch.find();
    res.status(200).json(watches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single watch by ID
export const getWatchById = async (req, res) => {
  try {
    const watch = await Watch.findById(req.params.id);
    if (!watch) {
      return res.status(404).json({ message: 'Watch not found' });
    }
    res.status(200).json(watch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new watch
export const createWatch = async (req, res) => {
  const watch = new Watch(req.body);
  try {
    const newWatch = await watch.save();
    res.status(201).json(newWatch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a watch
export const updateWatch = async (req, res) => {
  try {
    const updatedWatch = await Watch.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedWatch) {
      return res.status(404).json({ message: 'Watch not found' });
    }
    res.status(200).json(updatedWatch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a watch
export const deleteWatch = async (req, res) => {
  try {
    const watch = await Watch.findByIdAndDelete(req.params.id);
    if (!watch) {
      return res.status(404).json({ message: 'Watch not found' });
    }
    res.status(200).json({ message: 'Watch deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get watches by category
export const getWatchesByCategory = async (req, res) => {
  try {
    const watches = await Watch.find({ category: req.params.category });
    res.status(200).json(watches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};