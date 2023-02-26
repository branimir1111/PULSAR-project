import mongoose from 'mongoose';
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please provide product name'],
    maxLength: [100, 'Name can not be more than 100 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide product price'],
    default: 0,
  },
  description: {
    type: String,
    required: [true, 'Please provide product descritpion'],
    maxLength: [1000, 'Description can not be more than 1000 characters'],
  },
  image: { type: String, required: true },
  smallImages: {
    type: [String],
    default: '/uploads/example.js',
  },
  company: {
    type: String,
    required: [true, 'Please provide product company'],
    enum: {
      values: ['Leica', 'Topcon', 'Trimble', 'CHCNAV'],
      message: '{VALUE} is not supported', //ako ukucamo kompaniju koja nije gore u nizu
    },
  },
  colors: {
    type: [String],
    default: '#7cbc14',
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  freeShipping: {
    type: Boolean,
    default: false,
  },
  inventory: {
    type: Number,
    required: true,
    default: 10,
  },
  category: {
    type: String,
    enum: [
      'controller',
      'gps',
      'level',
      'machine control system',
      'marine system',
      'scanner',
      'total station',
    ],
    required: [true, 'Please provide product category'],
  },
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  averageRating: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model('Product', ProductSchema);
export default Product;
