import express from 'express';
const router = express.Router();

import { authenticateUser, authorizeAdmin } from '../utils/authUser.js';
import {
  register,
  login,
  logout,
  getCurrentUser,
} from '../controllers/controllerUser.js';

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/getCurrentUser').get(authenticateUser, getCurrentUser);

export default router;
