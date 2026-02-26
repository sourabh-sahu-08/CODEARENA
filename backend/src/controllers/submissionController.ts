import type { Request, Response } from 'express';
import Submission from '../models/Submission.js';

export const submitCode = async (req: Request, res: Response) => {
    try {
        const { code, language, problemId } = req.body;
        const userId = (req as any).user.id;

        // Create initial submission record
        const submission = new Submission({
            userId,
            problemId,
            code,
            language,
            status: 'pending'
        });

        await submission.save();

        // Simulate Code Execution (Real execution would involve a sandbox like Docker or a remote API)
        setTimeout(async () => {
            const isSuccess = Math.random() > 0.3; // 70% success rate

            submission.status = isSuccess ? 'success' : 'failed';
            submission.results = {
                stdout: isSuccess ? 'Test Cases Passed! Output: [0, 1]' : 'Assertion Error: Expected [0, 1], got [1, 2]',
                stderr: isSuccess ? '' : 'Runtime Error: Line 14',
                runtime: Math.floor(Math.random() * 200) + 50,
                memory: Math.floor(Math.random() * 50) + 10
            };

            await submission.save();
        }, 2000);

        res.status(201).json({
            message: 'Submission received and processing...',
            submissionId: submission._id
        });
    } catch (error) {
        res.status(500).json({ message: 'Submission failed' });
    }
};

export const getSubmissionHistory = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id;
        const submissions = await Submission.find({ userId }).sort({ timestamp: -1 }).limit(20);
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch submission history' });
    }
};
