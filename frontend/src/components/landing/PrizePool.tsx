import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Award, Star, Zap } from 'lucide-react';
import { Card } from '../ui';

const prizes = [
    {
        rank: '1st Place',
        reward: '₹5,00,000',
        perks: ['Title: National Champion', 'Direct Interview at Top Tech', 'Platinum Verification Badge'],
        icon: Star,
        color: 'from-amber-400 to-yellow-600'
    },
    {
        rank: '2nd Place',
        reward: '₹3,00,000',
        perks: ['Innovation Award', 'Premium Swag Kit', 'Gold Verification Badge'],
        icon: Award,
        color: 'from-slate-300 to-slate-500'
    },
    {
        rank: '3rd Place',
        reward: '₹2,00,000',
        perks: ['Runner-up Distinction', 'Tech Vouchers', 'Silver Verification Badge'],
        icon: Gift,
        color: 'from-orange-400 to-orange-600'
    }
];

export const PrizePool = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-background-custom/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">
                                Massive <span className="text-gradient">Prize Pool</span>
                            </h2>
                            <p className="text-foreground-custom/50 text-xl leading-relaxed max-w-xl">
                                We believe in rewarding innovation. Compete for a share of our ₹10 Lakh+ prize pool and unlock career-changing opportunities.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-4">
                            {prizes.map((prize, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card className="flex items-center gap-6 p-6 group hover:border-primary-custom/30 transition-all">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prize.color} flex items-center justify-center p-0.5 shadow-lg`}>
                                            <div className="w-full h-full rounded-[14px] bg-background-custom flex items-center justify-center">
                                                <prize.icon className={`text-transparent bg-clip-content bg-gradient-to-br ${prize.color}`} size={32} />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <h4 className="font-bold text-lg">{prize.rank}</h4>
                                                <span className="text-2xl font-black text-foreground-custom">{prize.reward}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                                                {prize.perks.map((perk, j) => (
                                                    <span key={j} className="text-[10px] uppercase tracking-widest font-black text-foreground-custom/30 flex items-center gap-1">
                                                        <Zap size={8} className="text-primary-custom" />
                                                        {perk}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Glow */}
                            <div className="absolute inset-0 bg-primary-custom/20 blur-[120px] rounded-full group-hover:bg-primary-custom/30 transition-all duration-700" />

                            <img
                                src="file:///C:/Users/Sourabh/.gemini/antigravity/brain/e6989267-4092-4ebe-90c1-b94b56b4ee94/prize_trophy_premium_1772098102079.png"
                                alt="Premium Trophy"
                                className="relative z-10 w-full animate-float"
                            />

                            <div className="absolute -bottom-8 -right-8 z-20">
                                <Card className="p-6 bg-accent-custom/10 backdrop-blur-3xl border-accent-custom/20 border-2">
                                    <div className="text-center">
                                        <p className="text-xs uppercase font-black tracking-widest text-accent-custom mb-1">Total Rewards</p>
                                        <h3 className="text-4xl font-black text-foreground-custom">₹10,50,000</h3>
                                    </div>
                                </Card>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
