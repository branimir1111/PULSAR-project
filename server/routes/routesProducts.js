import express from 'express';
const router = express.Router();

import {
  getAllProducts,
  getSingleProduct,
  getFeaturedProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} from '../controllers/controllerProducts.js';

import { authenticateUser, authorizeAdmin } from '../utils/authUser.js';

router
  .route('/')
  .get(getAllProducts)
  .post(authenticateUser, authorizeAdmin('admin'), createProduct);

router
  .route('/uploadImage')
  .post(authenticateUser, authorizeAdmin('admin'), uploadImage);

router.route('/featured').get(getFeaturedProducts);
router
  .route('/:id')
  .get(getSingleProduct)
  .patch(authenticateUser, authorizeAdmin('admin'), updateProduct)
  .delete(authenticateUser, authorizeAdmin('admin'), deleteProduct); //this route with :id goes at the end

export default router;
