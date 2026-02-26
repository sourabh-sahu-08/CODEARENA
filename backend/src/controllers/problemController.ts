import type { Request, Response } from 'express';
import Problem from '../models/Problem.js';

export const getProblems = async (req: Request, res: Response) => {
    try {
        const { track } = req.query;
        const query = track ? { track: String(track) } : {};
        const problems = await Problem.find(query);
        res.json(problems);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch problems' });
    }
};
