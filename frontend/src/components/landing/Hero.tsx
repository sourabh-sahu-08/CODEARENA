import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Trophy, Target, Zap, Users } from 'lucide-react';
import { DigitalParticles } from './DigitalParticles';

export const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background-custom">
            <DigitalParticles />

            {/* AI Generated Background with Parallax */}
            <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background-custom/80 via-background-custom/40 to-background-custom z-10" />
                <img
                    src="https://source.unsplash.com/1920x1080/?technology,futuristic"
                    alt="Bharat Futuristic Hackathon"
                    className="w-full h-full object-cover opacity-40 scale-110"
                />
            </motion.div>

            <motion.div style={{ y: y2, opacity }} className="container mx-auto px-6 relative z-20 text-center">
                <div className="max-w-5xl mx-auto flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8 px-4 py-1.5 rounded-full bg-accent-custom/10 border border-accent-custom/20 backdrop-blur-md flex items-center gap-2"
                    >
                        <Sparkles size={14} className="text-accent-custom" />
                        <span className="text-sm font-semibold text-accent-custom tracking-wider uppercase">National Level Hackathon 2026 | Bharat Edition</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-bold mb-6 tracking-tight text-foreground-custom"
                    >
                        Engineering Bharat's <br />
                        <span className="text-gradient">Tech Revolution</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-foreground-custom/70 mb-10 max-w-2xl leading-relaxed"
                    >
                        The ultimate stage for developers, designers, and innovators. Join the nation's biggest coding challenge and turn your vision into reality.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Link to="/register" className="btn-primary flex items-center gap-2 group px-10 py-4 text-lg">
                            Start Your Journey
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/explore" className="px-10 py-4 rounded-xl border border-border-custom text-foreground-custom font-medium hover:bg-foreground-custom/5 transition-all backdrop-blur-md">
                            Explore Challenges
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-10 border-t border-border-custom"
                    >
                        {[
                            { label: 'Participants', value: '25K+', icon: Users, color: 'text-indigo-400' },
                            { label: 'Prize Pool', value: '₹10L+', icon: Trophy, color: 'text-accent-custom' },
                            { label: 'Live Tracks', value: '12', icon: Target, color: 'text-emerald-400' },
                            { label: 'Success Rate', value: '98%', icon: Zap, color: 'text-amber-400' },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center gap-2">
                                <div className={`p-3 rounded-2xl bg-foreground-custom/5 border border-border-custom mb-2 ${stat.color}`}>
                                    <stat.icon size={24} />
                                </div>
                                <div className="text-3xl font-black text-foreground-custom">{stat.value}</div>
                                <div className="text-[10px] text-foreground-custom/40 uppercase tracking-[0.2em] font-black">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};
