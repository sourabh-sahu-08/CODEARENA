import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Trophy, Timer, Users, ArrowRight } from 'lucide-react';
import { Button, Card } from '../components/ui';

const opportunities = [
    {
        title: 'National AI Challenge 2026',
        host: 'Ministry of Electronics & IT',
        type: 'Hackathon',
        prize: '₹10,00,000',
        timeLeft: '12 Days',
        participants: '4.5k+',
        image: 'file:///C:/Users/Sourabh/.gemini/antigravity/brain/e6989267-4092-4ebe-90c1-b94b56b4ee94/hero_india_tech_hackathon_v2_1772097724226.png',
        track: 'Artificial Intelligence'
    },
    {
        title: 'Bharat FinTech Summit',
        host: 'NPCI',
        type: 'Hiring Challenge',
        prize: 'Hiring + ₹5,00,000',
        timeLeft: '5 Days',
        participants: '12k+',
        image: 'file:///C:/Users/Sourabh/.gemini/antigravity/brain/e6989267-4092-4ebe-90c1-b94b56b4ee94/fintech_track_visual_1772098050347.png',
        track: 'Web3 & Payments'
    },
    {
        title: 'Digital Health Hack',
        host: 'Apollo Hospitals',
        type: 'Innovation Lab',
        prize: '₹2,50,000 + Incubation',
        timeLeft: '22 Days',
        participants: '1.2k+',
        image: 'file:///C:/Users/Sourabh/.gemini/antigravity/brain/e6989267-4092-4ebe-90c1-b94b56b4ee94/healthtech_track_visual_1772098073514.png',
        track: 'HealthTech'
    }
];

export default function ExplorationHub() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Explore <span className="text-gradient">Opportunities</span>
                        </h1>
                        <p className="text-foreground-custom/50 max-w-xl text-lg">
                            The central hub for Bharat's most prestigious hackathons, hiring challenges, and innovation labs.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-custom/30 group-focus-within:text-primary-custom transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search challenges..."
                                className="bg-secondary-custom/20 border border-white/5 rounded-xl py-3 pl-10 pr-4 w-full md:w-64 outline-none focus:ring-2 focus:ring-primary-custom/20 transition-all"
                            />
                        </div>
                        <Button variant="secondary" className="flex items-center gap-2">
                            <Filter size={18} />
                            Filters
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {opportunities.map((opp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <Card className="p-0 overflow-hidden group border-white/5 hover:border-primary-custom/30 transition-all duration-500">
                                <div className="h-48 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-custom to-transparent z-10 opacity-60" />
                                    <img src={opp.image} alt={opp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 rounded-full bg-primary-custom/20 backdrop-blur-md border border-primary-custom/30 text-[10px] font-bold uppercase tracking-wider text-primary-custom">
                                            {opp.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 space-y-6">
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-bold group-hover:text-primary-custom transition-colors">{opp.title}</h3>
                                        <p className="text-sm text-foreground-custom/40 font-medium">{opp.host}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2 text-foreground-custom/60">
                                            <Trophy size={16} className="text-accent-custom" />
                                            <span className="text-xs font-semibold">{opp.prize}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-foreground-custom/60">
                                            <Users size={16} className="text-primary-custom" />
                                            <span className="text-xs font-semibold">{opp.participants}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-foreground-custom/60">
                                            <Timer size={16} className="text-red-400" />
                                            <span className="text-xs font-semibold">{opp.timeLeft}</span>
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <Button className="w-full flex items-center justify-center gap-2 group/btn">
                                            Register Now
                                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
