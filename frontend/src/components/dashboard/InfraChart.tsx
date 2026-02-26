import React from 'react';
import { motion } from 'framer-motion';

interface InfraChartProps {
    value: number;
    label: string;
    color: string;
}

export const InfraChart: React.FC<InfraChartProps> = ({ value, label, color }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 flex items-center justify-center">
                {/* SVG Circle Gauge */}
                <svg className="w-full h-full -rotate-90">
                    <circle
                        cx="64"
                        cy="64"
                        r="58"
                        className="fill-none stroke-foreground-custom/5"
                        strokeWidth="8"
                    />
                    <motion.circle
                        cx="64"
                        cy="64"
                        r="58"
                        className={`fill-none ${color}`}
                        strokeWidth="8"
                        strokeDasharray="364.4"
                        initial={{ strokeDashoffset: 364.4 }}
                        animate={{ strokeDashoffset: 364.4 - (364.4 * value) / 100 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-foreground-custom">{value}%</span>
                </div>
            </div>
            <p className="mt-2 text-[10px] font-black uppercase tracking-widest text-foreground-custom/40">{label}</p>
        </div>
    );
};
