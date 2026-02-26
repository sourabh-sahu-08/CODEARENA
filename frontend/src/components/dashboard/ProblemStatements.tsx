import React from 'react';
import { motion } from 'framer-motion';
import { Box, Code2, Cpu, Globe, ArrowUpRight, Clock, Target, Users } from 'lucide-react';
import { Button, Card } from '../ui';

const tracks = [
    {
        id: 1,
        title: 'AI & Machine Learning',
        description: 'Build innovative AI solutions to solve real-world problems in healthcare, education, or climate change.',
        icon: Cpu,
        color: 'text-purple-500',
        bg: 'bg-purple-500/10',
        difficulty: 'Hard',
        prize: '$10,000'
    },
    {
        id: 2,
        title: 'Web3 & Blockchain',
        description: 'Develop decentralized applications (dApps) that promote transparency, security, and digital ownership.',
        icon: Globe,
        color: 'text-cyan-500',
        bg: 'bg-cyan-500/10',
        difficulty: 'Medium',
        prize: '$8,000'
    },
    {
        id: 3,
        title: 'Open Innovation',
        description: 'The sky is the limit. Bring your most creative ideas to life using any technology of your choice.',
        icon: Box,
        color: 'text-orange-500',
        bg: 'bg-orange-500/10',
        difficulty: 'All levels',
        prize: '$5,000'
    }
];

import { useHackathon } from '../../context/HackathonContextState';

export default function ProblemStatements() {
    const { state } = useHackathon();

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold mb-4">Problem Statements</h2>
                <p className="text-slate-400">Choose a track that aligns with your expertise and passion. Each track has unique challenges and rewards.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {state.problems.length > 0 ? (
                    state.problems.map((problem, i) => {
                        // Map internal tracks to icons/colors
                        const isAI = problem.track.toLowerCase().includes('ai');
                        const isWeb3 = problem.track.toLowerCase().includes('web3');

                        return (
                            <motion.div
                                key={problem._id || i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="h-full flex flex-col group hover:border-primary-custom/30 transition-all">
                                    <div className={`w-14 h-14 rounded-2xl ${isAI ? 'bg-purple-500/10 text-purple-500' :
                                            isWeb3 ? 'bg-cyan-500/10 text-cyan-500' :
                                                'bg-orange-500/10 text-orange-500'
                                        } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        {isAI ? <Cpu size={32} /> : isWeb3 ? <Globe size={32} /> : <Box size={32} />}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                                        {problem.description}
                                    </p>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="flex items-center gap-2 text-slate-500"><Target size={16} /> Difficulty</span>
                                            <span className="font-bold">{problem.difficulty}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="flex items-center gap-2 text-slate-500"><Users size={16} /> Points</span>
                                            <span className="font-bold text-gradient">{problem.points} XP</span>
                                        </div>
                                    </div>

                                    <Button className="w-full flex items-center justify-center gap-2">
                                        Download Brief
                                        <ArrowUpRight size={18} />
                                    </Button>
                                </Card>
                            </motion.div>
                        );
                    })
                ) : (
                    <div className="col-span-3 text-center py-20 bg-secondary-custom/10 rounded-3xl border border-white/5">
                        <Code2 size={48} className="mx-auto mb-4 text-foreground-custom/20" />
                        <p className="text-foreground-custom/40">No problem statements released yet. Stay tuned!</p>
                    </div>
                )}
            </div>

            <Card className="bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border-indigo-500/20 p-10">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 space-y-4 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
                            Featured Challenge
                        </div>
                        <h3 className="text-3xl font-bold">The Sustainable City Challenge</h3>
                        <p className="text-slate-300">
                            Partnered with the Ministry of Urban Development. Build a system to optimize energy consumption in smart cities using real-time IoT data.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4">
                            <div className="flex items-center gap-2 text-slate-400">
                                <Clock size={18} className="text-indigo-400" />
                                <span>Submission due in 14 days</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                                <Code2 size={18} className="text-indigo-400" />
                                <span>Any stack accepted</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <Button size="lg" className="px-10">Register for Track</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
