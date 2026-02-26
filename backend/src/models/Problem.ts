import mongoose from 'mongoose';

export interface IProblem {
    title: string;
    description: string;
    track: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    points: number;
    tags: string[];
}

const problemSchema = new mongoose.Schema<IProblem>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    track: { type: String, required: true },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        default: 'Medium'
    },
    points: { type: Number, required: true },
    tags: [{ type: String }]
});

export default mongoose.model<IProblem>('Problem', problemSchema);
