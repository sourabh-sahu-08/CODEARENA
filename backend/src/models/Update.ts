import mongoose from 'mongoose';

export interface IUpdate {
    title: string;
    description: string;
    type: 'info' | 'alert' | 'success' | 'critical';
    timestamp: Date;
}

const updateSchema = new mongoose.Schema<IUpdate>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: {
        type: String,
        enum: ['info', 'alert', 'success', 'critical'],
        default: 'info'
    },
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model<IUpdate>('Update', updateSchema);
