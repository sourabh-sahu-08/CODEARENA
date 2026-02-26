import type { Request, Response } from 'express';
import Update from '../models/Update.js';

export const getUpdates = async (req: Request, res: Response) => {
    try {
        const updates = await Update.find().sort({ timestamp: -1 }).limit(10);
        res.json(updates);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch updates' });
    }
};
