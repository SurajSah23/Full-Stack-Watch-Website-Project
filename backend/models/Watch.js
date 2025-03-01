import mongoose from 'mongoose';

const watchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['luxury', 'sports', 'casual', 'smart']
  },
  inStock: {
    type: Boolean,
    default: true
  },
  features: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Watch = mongoose.model('Watch', watchSchema);

export default Watch;