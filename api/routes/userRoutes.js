import express from 'express';
import {
  newUser,
  loginCheck,
} from '../controllers/userControllers.js';

const router = express.Router();

router.route('/signup').post(newUser);
router.route('/signin').post(loginCheck);

export default router;
