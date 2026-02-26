import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Github, Globe, Save, Plus, X, Award, Briefcase, Cpu } from 'lucide-react';
import { Button, Card } from '../ui';

const availableSkills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Tailwind CSS',
    'Next.js', 'Figma', 'Solidity', 'Rust', 'PostgreSQL', 'TensorFlow', 'Java'
];

export default function ProfileSetup() {
    const [skills, setSkills] = useState(['React', 'TypeScript', 'Node.js']);

    const addSkill = (skill: string) => {
        if (!skills.includes(skill)) {
            setSkills([...skills, skill]);
        }
    };

    const removeSkill = (skill: string) => {
        setSkills(skills.filter(s => s !== skill));
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h2 className="text-3xl font-bold mb-2">My Profile</h2>
                <p className="text-slate-400">Complete your profile to get better teammate matches and showcase your skills.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-6">
                    <Card className="text-center">
                        <div className="relative w-32 h-32 mx-auto mb-4">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center border-2 border-white/5">
                                <User size={64} className="text-primary-custom" />
                            </div>
                            <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary-custom flex items-center justify-center text-white border-4 border-slate-900 shadow-xl">
                                <Plus size={16} />
                            </button>
                        </div>
                        <h3 className="text-xl font-bold">Alex Johnson</h3>
                        <p className="text-slate-500 text-sm">Full Stack Developer</p>
                        <div className="mt-6 flex justify-center gap-4">
                            <Github size={18} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
                            <Globe size={18} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
                            <Mail size={18} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </Card>

                    <Card>
                        <h3 className="font-bold flex items-center gap-2 mb-4 text-sm uppercase tracking-wider text-slate-500">
                            <Award size={16} />
                            Statistics
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-400">Hackathons Joined</span>
                                <span className="font-bold">12</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-400">Top 3 Finishes</span>
                                <span className="font-bold">4</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-400">Total Score</span>
                                <span className="font-bold text-gradient">4,850</span>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="md:col-span-2 space-y-6">
                    <Card className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                                <input
                                    type="text"
                                    defaultValue="Alex Johnson"
                                    className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-custom/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Professional Title</label>
                                <input
                                    type="text"
                                    defaultValue="Full Stack Developer"
                                    className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-custom/50"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Bio</label>
                            <textarea
                                rows={4}
                                defaultValue="I'm a passionate developer focused on building scalable web applications and exploring the potential of AI in software engineering."
                                className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-custom/50 resize-none"
                            />
                        </div>

                        <div className="space-y-4">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 block">Technical Tech Stack</label>
                            <div className="flex flex-wrap gap-2">
                                {skills.map(skill => (
                                    <motion.div
                                        key={skill}
                                        layout
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-custom/10 border border-primary-custom/20 text-primary-custom text-sm font-medium"
                                    >
                                        {skill}
                                        <button onClick={() => removeSkill(skill)} className="hover:text-red-400 transition-colors">
                                            <X size={14} />
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <select
                                    onChange={(e) => addSkill(e.target.value)}
                                    className="flex-1 bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-custom/50"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Add a skill...</option>
                                    {availableSkills.filter(s => !skills.includes(s)).map(s => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <Button className="flex items-center gap-2">
                                <Save size={18} />
                                Save Profile
                            </Button>
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold">Experience</h4>
                                <p className="text-xs text-slate-500">Professional • 4 Years</p>
                            </div>
                        </Card>
                        <Card className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                                <Cpu size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold">Tech Level</h4>
                                <p className="text-xs text-slate-500">Advanced Enthusiast</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
