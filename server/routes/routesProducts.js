import express from 'express';
const router = express.Router();
import {
  getAllProducts,
  getFeaturedProducts,
  getSingleProduct,
} from '../controllers/controllerProducts.js';

router.route('/').get(getAllProducts);
router.route('/featured').get(getFeaturedProducts);
router.route('/:id').get(getSingleProduct); //this route with :id goes at the end

export default router;
