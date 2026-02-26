import type { Request, Response } from 'express';

export const getStats = async (req: Request, res: Response) => {
    try {
        // In a real app, these would be fetched from the DB
        // For now we return base values that the frontend can build upon
        const stats = {
            participants: 12450 + Math.floor(Math.random() * 50),
            serverLoad: Math.min(95, Math.max(10, 42 + (Math.random() * 20 - 10))),
            activeSubmissions: 890 + Math.floor(Math.random() * 20),
            projects: 42,
            activeSessions: 89,
            queryVelocity: 450 + Math.floor(Math.random() * 50)
        };

        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch statistics' });
    }
};
