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
  image: { type: String, default: '/uploads/example.js' },
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
  //   user: {
  //     type: mongoose.Types.ObjectId,
  //     ref: 'User',
  //     required: true,
  //   },

  // { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
});

// ProductSchema.virtual('reviews', {
//   ref: 'Review',
//   localField: '_id',
//   foreignField: 'product',
//   justOne: false,
// });

// ProductSchema.pre('remove', async function () {
//   await this.model('Review').deleteMany({ product: this._id });
// });

const Product = mongoose.model('Product', ProductSchema);
export default Product;