import express from 'express';
import { getUpdates } from '../controllers/updateController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticate, getUpdates);

export default router;
