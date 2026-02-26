import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Arjun Mehta',
        college: 'IIT Bombay',
        quote: 'CODEARENA is miles ahead of any other platform. The IDE integration and real-time judging are flawless.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun'
    },
    {
        name: 'Priya Sharma',
        college: 'NIT Trichy',
        quote: 'The AI recommendations helped me find the perfect team within minutes. Truly built for the Indian dev community.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya'
    },
    {
        name: 'Siddharth Rao',
        college: 'BITS Pilani',
        quote: 'Winning the Fintech track was a career milestone. The UI is cinematic and extremely productive.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siddharth'
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 bg-background-custom">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Voice of the <span className="text-gradient">Innovators</span></h2>
                    <p className="text-foreground-custom/40">From top universities to leading startups, CODEARENA is the trusted choice.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-8 flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <Quote className="text-primary-custom" size={32} />
                                <p className="text-foreground-custom/70 italic leading-relaxed">"{t.quote}"</p>
                            </div>
                            <div className="mt-8 flex items-center gap-4">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary-custom/20" />
                                <div>
                                    <h4 className="font-bold text-foreground-custom">{t.name}</h4>
                                    <p className="text-xs text-foreground-custom/40 font-medium">{t.college}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
