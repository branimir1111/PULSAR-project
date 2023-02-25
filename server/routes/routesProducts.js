import express from 'express';
const router = express.Router();

import {
  getAllProducts,
  getFeaturedProducts,
  getSingleProduct,
  createProduct,
} from '../controllers/controllerProducts.js';

import { authenticateUser, authorizeAdmin } from '../utils/authUser.js';

router
  .route('/')
  .get(getAllProducts)
  .post(authenticateUser, authorizeAdmin('admin'), createProduct);
router.route('/featured').get(getFeaturedProducts);
router.route('/:id').get(getSingleProduct); //this route with :id goes at the end

export default router;
