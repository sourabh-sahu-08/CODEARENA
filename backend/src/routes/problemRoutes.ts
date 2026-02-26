import express from 'express';
import { getProblems } from '../controllers/problemController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticate, getProblems);

export default router;
