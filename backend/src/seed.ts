import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/User.js';
import Update from './models/Update.js';
import Problem from './models/Problem.js';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/codearena';

const seed = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB for seeding');

        // Clear existing data
        await User.deleteMany({});
        await Update.deleteMany({});
        await Problem.deleteMany({});
        console.log('Cleared existing data');

        const hashedPassword = await bcrypt.hash('admin123', 12);

        // Seed Users
        const admin = new User({
            name: 'System Admin',
            email: 'admin@codearena.com',
            password: hashedPassword,
            role: 'admin',
        });

        const user = new User({
            name: 'Test Hacker',
            email: 'hacker@codearena.com',
            password: hashedPassword,
            role: 'user',
        });

        await admin.save();
        await user.save();

        // Seed Updates
        const updates = [
            {
                title: 'Problem Statements Released',
                description: 'The main tracks for CODEARENA 2026 are now live. Choose your challenge!',
                type: 'info',
                timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
            },
            {
                title: 'Server Maintenance Complete',
                description: 'Infrastructure is now optimized for high-velocity submissions.',
                type: 'success',
                timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5) // 5 hours ago
            },
            {
                title: 'Team Matching Deadline',
                description: 'Last call for team formations! Lobby closes in 4 hours.',
                type: 'critical',
                timestamp: new Date(Date.now() - 1000 * 60 * 30) // 30 mins ago
            }
        ];
        await Update.insertMany(updates);

        // Seed Problems
        const problems = [
            {
                title: 'Neural Nexus: Predictive Healthcare',
                description: 'Develop a machine learning model to predict early-stage diabetic retinopathy using retinal scans.',
                track: 'AI & Machine Learning',
                difficulty: 'Hard',
                points: 2500,
                tags: ['Python', 'TensorFlow', 'Healthcare']
            },
            {
                title: 'Sovereign ID: Web3 Identity',
                description: 'Create a decentralized identity protocol that allows users to control their personal data across platforms.',
                track: 'Web3 & Blockchain',
                difficulty: 'Medium',
                points: 1800,
                tags: ['Solidity', 'Ethereum', 'Identity']
            },
            {
                title: 'EcoTrack: Carbon Footprint Solver',
                description: 'Build an innovative tool to help households track and reduce their daily carbon emissions.',
                track: 'Open Innovation',
                difficulty: 'Easy',
                points: 1200,
                tags: ['React', 'Sustainability', 'GreenTech']
            }
        ];
        await Problem.insertMany(problems);

        console.log('Seeding complete!');
        console.log('Admin: admin@codearena.com / admin123');
        console.log('User: hacker@codearena.com / admin123');

        process.exit(0);
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
};

seed();
