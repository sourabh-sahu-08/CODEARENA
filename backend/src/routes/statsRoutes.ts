import express from 'express';
import { getStats } from '../controllers/statsController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Public health check or basic stats could be here
// But we'll protect the detailed dashboard stats
router.get('/', authenticate, getStats);

export default router;
