import mongoose from 'mongoose';

export interface ISubmission {
    userId: mongoose.Types.ObjectId;
    problemId?: string; // Optional if not linked to a specific problem yet
    code: string;
    language: string;
    status: 'pending' | 'success' | 'failed' | 'error';
    results: {
        stdout?: string;
        stderr?: string;
        runtime?: number;
        memory?: number;
    };
    timestamp: Date;
}

const submissionSchema = new mongoose.Schema<ISubmission>({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    problemId: { type: String },
    code: { type: String, required: true },
    language: { type: String, required: true },
    status: {
        type: String,
        enum: ['pending', 'success', 'failed', 'error'],
        default: 'pending'
    },
    results: {
        stdout: { type: String },
        stderr: { type: String },
        runtime: { type: Number },
        memory: { type: Number }
    },
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model<ISubmission>('Submission', submissionSchema);
