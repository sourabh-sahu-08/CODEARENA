
import { motion } from 'framer-motion';

const steps = [
    { phase: 'Phase 1', title: 'Registration', date: 'March 1 - March 15', desc: 'Create profiles and form teams' },
    { phase: 'Phase 2', title: 'Coding Round', date: 'March 20', desc: 'Online elimination test on our IDE' },
    { phase: 'Phase 3', title: 'Mentorship', date: 'March 25', desc: 'Refine ideas with domain experts' },
    { phase: 'Phase 4', title: 'Grand Finale', date: 'April 5', desc: '48-hour building and judge interviews' },
];

export const Timeline = () => {
    return (
        <section className="py-24 bg-secondary-custom/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground-custom">Journey to <span className="text-gradient">Excellence</span></h2>
                    <p className="text-foreground-custom/40">The road to India's most prestigious developer title.</p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical line */}
                    <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary-custom/20 -translate-x-1/2" />

                    <div className="space-y-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                            >
                                {/* Dot */}
                                <div className="absolute left-[15px] md:left-1/2 w-6 h-6 bg-background-custom border-4 border-primary-custom rounded-full -translate-x-1/2 z-10 shadow-lg shadow-primary-custom/20" />

                                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                                    <div className={`glass-card ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <span className="text-primary-custom font-bold text-sm mb-2 block">{step.phase}</span>
                                        <h3 className="text-xl font-bold mb-1 text-foreground-custom">{step.title}</h3>
                                        <p className="text-foreground-custom/60 text-sm mb-2">{step.date}</p>
                                        <p className="text-foreground-custom/40 text-sm">{step.desc}</p>
                                    </div>
                                </div>
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
