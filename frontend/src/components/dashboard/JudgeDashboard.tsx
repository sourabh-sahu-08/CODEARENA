import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Eye, Star, Search, Filter, ArrowUpRight } from 'lucide-react';
import { Button, Card } from '../ui';

const submissions = [
    { id: '1', team: 'Neural Knights', track: 'AI/ML', status: 'Graded', score: 92, lastUpdated: '2h ago' },
    { id: '2', team: 'Cyber Sentinels', track: 'Web3', status: 'Pending', score: null, lastUpdated: '5h ago' },
    { id: '3', team: 'Byte Builders', track: 'Open Innovation', status: 'Graded', score: 88, lastUpdated: '1d ago' },
    { id: '4', team: 'Logic Lords', track: 'AI/ML', status: 'Reviewing', score: null, lastUpdated: '10m ago' },
];

export default function JudgeDashboard() {
    const [selectedTrack] = useState('All');

    return (
        <div className="max-w-6xl mx-auto space-y-8 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold mb-1">Judge Panel</h2>
                    <p className="text-slate-400 text-sm">Reviewing track: {selectedTrack}</p>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-custom/20" size={18} />
                        <input
                            type="text"
                            placeholder="Search teams..."
                            className="w-full bg-foreground-custom/5 border border-border-custom rounded-xl pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary-custom/50"
                        />
                    </div>
                    <button className="p-2 rounded-xl bg-foreground-custom/5 border border-border-custom text-foreground-custom/40 hover:text-foreground-custom transition-colors">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Assigned', value: '45', color: 'text-indigo-400' },
                    { label: 'Pending', value: '12', color: 'text-orange-400' },
                    { label: 'Completed', value: '33', color: 'text-green-400' },
                    { label: 'Avg. Score', value: '84.5', color: 'text-cyan-400' },
                ].map((stat, i) => (
                    <Card key={i} className="text-center">
                        <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                        <div className="text-[10px] uppercase font-black tracking-widest text-slate-500">{stat.label}</div>
                    </Card>
                ))}
            </div>

            <Card className="p-0 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-foreground-custom/5 border-b border-border-custom">
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-foreground-custom/30">Team</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-foreground-custom/30">Track</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-foreground-custom/30">Status</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-foreground-custom/30 text-center">Score</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-foreground-custom/30 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-custom">
                            {submissions.map((sub, i) => (
                                <motion.tr
                                    key={sub.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="hover:bg-foreground-custom/[0.02] transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <div className="font-bold">{sub.team}</div>
                                        <div className="text-[10px] text-foreground-custom/30">Updated {sub.lastUpdated}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-foreground-custom/70">{sub.track}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            {sub.status === 'Graded' ? (
                                                <CheckCircle size={14} className="text-green-500" />
                                            ) : sub.status === 'Reviewing' ? (
                                                <Eye size={14} className="text-indigo-500" />
                                            ) : (
                                                <AlertTriangle size={14} className="text-orange-500" />
                                            )}
                                            <span className={`text-xs font-semibold ${sub.status === 'Graded' ? 'text-green-500' : 'text-foreground-custom/30'
                                                }`}>{sub.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {sub.score ? (
                                            <span className="font-mono font-bold text-lg text-primary-custom">{sub.score}</span>
                                        ) : (
                                            <span className="text-foreground-custom/20">—</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Button variant="ghost" size="sm" className="flex items-center gap-2 ml-auto">
                                            Score Preview
                                            <ArrowUpRight size={14} />
                                        </Button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="space-y-4">
                    <h3 className="font-bold flex items-center gap-2">
                        <Star className="text-yellow-500" size={18} />
                        Evaluation Guidelines
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                            Innovation & Originality (30%)
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                            Technical Complexity & Execution (30%)
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                            User Impact & Viability (20%)
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                            Quality of Documentation (20%)
                        </li>
                    </ul>
                </Card>
                <Card className="bg-primary-custom/5 border-primary-custom/20">
                    <h3 className="text-xl font-bold mb-4">Quick Action</h3>
                    <p className="text-slate-400 text-sm mb-6">You have 12 pending submissions for the AI & Machine Learning track.</p>
                    <Button className="w-full py-4">Start Grading Batch</Button>
                </Card>
            </div>
        </div>
    );
}
