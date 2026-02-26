import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
    { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
    { name: 'Digital India', logo: 'https://upload.wikimedia.org/wikipedia/en/2/23/Digital_India_logo.svg' },
    { name: 'NPCI', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/NPCI_Logo.svg' },
    { name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Postman', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png' },
];

export const SponsorWall = () => {
    return (
        <section className="py-20 border-y border-border-custom bg-background-custom/30 overflow-hidden">
            <div className="container mx-auto px-6">
                <p className="text-center text-[10px] uppercase tracking-[0.3em] font-black text-foreground-custom/20 mb-12">
                    Empowered by Global Tech Leaders & National Initiatives
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                    {sponsors.map((sponsor, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="h-8 md:h-12 flex items-center"
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="h-full w-auto object-contain brightness-0 dark:invert opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
