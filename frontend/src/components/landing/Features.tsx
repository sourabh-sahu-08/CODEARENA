
import { motion } from 'framer-motion';
import { Brain, Code2, Globe, Shield, Users2, Zap } from 'lucide-react';

const features = [
    {
        icon: Brain,
        title: 'AI Team Matching',
        description: 'Privacy-friendly AI engine suggests compatible teammates based on tech stack and interests.'
    },
    {
        icon: Code2,
        title: 'Online IDE',
        description: 'Enterprise-grade coding environment with multi-language support and auto-evaluation.'
    },
    {
        icon: Globe,
        title: 'Bharat Excellence',
        description: 'Empowering Tier 1, 2, and 3 city talent with accessible, high-performance tech infrastructure.'
    },
    {
        icon: Shield,
        title: 'Anti-Cheat System',
        description: 'Advanced monitoring and tab-switch detection for fair competition during coding rounds.'
    },
    {
        icon: Users2,
        title: 'Integrated Interviews',
        description: 'Built-in WebRTC video calling and digital judge rating panel for seamless evaluations.'
    },
    {
        icon: Zap,
        title: 'Aadhaar Verified',
        description: 'Seamless identity bridging for official certificates and Digital India compliance.'
    }
];

export const Features = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground-custom">Powered by <span className="text-gradient">Bharat's Innovation</span></h2>
                    <p className="text-foreground-custom/40 max-w-2xl mx-auto">
                        India's most sophisticated hackathon engine, built for the next generation of
                        problem solvers from Bangalore to Bhubaneswar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card group transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary-custom/10 flex items-center justify-center mb-6 text-primary-custom group-hover:scale-110 transition-transform">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground-custom">{feature.title}</h3>
                            <p className="text-foreground-custom/40 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
