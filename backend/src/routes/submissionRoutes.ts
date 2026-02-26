import express from 'express';
import { submitCode, getSubmissionHistory } from '../controllers/submissionController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.post('/submit', authenticate, submitCode);
router.get('/history', authenticate, getSubmissionHistory);

export default router;
