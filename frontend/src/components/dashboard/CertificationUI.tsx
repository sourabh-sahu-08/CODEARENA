import React from 'react';
import { Download, Share2, Award, CheckCircle2, ShieldCheck, Printer } from 'lucide-react';
import { Button, Card } from '../ui';

export default function CertificationUI() {
    return (
        <div className="max-w-4xl mx-auto space-y-10 pb-20">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold">Certification</h2>
                <p className="text-foreground-custom/50 max-w-xl mx-auto">
                    Congratulations! Your journey at CODEARENA 2026 has been successfully certified. Download your official certificate and share your achievement.
                </p>
            </div>

            <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-x-0 -top-10 -bottom-10 bg-primary-custom/10 blur-[100px] rounded-full -z-10 group-hover:bg-primary-custom/20 transition-all duration-700" />

                <Card className="p-0 overflow-hidden border-indigo-500/30 bg-foreground-custom/5 backdrop-blur-2xl">
                    <div className="min-h-[500px] md:aspect-[1.414/1] w-full p-6 md:p-20 relative flex flex-col items-center justify-between text-center overflow-hidden">
                        {/* Certificate Border Pattern */}
                        <div className="absolute inset-4 border-2 border-indigo-500/20 rounded-2xl pointer-events-none" />
                        <div className="absolute inset-2 border border-indigo-500/10 rounded-[1.75rem] pointer-events-none" />

                        <div className="space-y-6 relative z-10 w-full">
                            <div className="flex justify-center mb-8">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center p-0.5 shadow-2xl">
                                    <div className="w-full h-full rounded-full bg-background-custom flex items-center justify-center">
                                        <Award size={36} className="text-indigo-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-sm">Certificate of Achievement</h3>
                                <p className="text-foreground-custom/50 font-medium">This is to certify that</p>
                            </div>

                            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground-custom py-4 font-serif italic">
                                sourabh
                            </h1>

                            <p className="text-foreground-custom/70 max-w-2xl mx-auto leading-relaxed">
                                has successfully participated in the <span className="font-bold text-foreground-custom">CODEARENA 2026 National Level Hackathon</span>
                                and achieved <span className="font-bold text-indigo-400">Finalist Distinction</span> in the AI & Machine Learning Track.
                            </p>
                        </div>

                        <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-end relative z-10 mt-12 gap-8 sm:gap-0">
                            <div className="text-center sm:text-left space-y-1">
                                <div className="h-12 w-32 border-b border-indigo-500/30 mb-2 mx-auto sm:mx-0" />
                                <p className="text-xs font-bold text-foreground-custom">shashank</p>
                                <p className="text-[10px] uppercase tracking-widest text-foreground-custom/30">Program Director</p>
                            </div>

                            <div className="flex flex-col items-center gap-2 order-first sm:order-none">
                                <div className="p-3 rounded-lg bg-foreground-custom/5 border border-border-custom">
                                    <ShieldCheck className="text-cyan-500" size={32} />
                                </div>
                                <p className="text-[8px] uppercase tracking-widest text-foreground-custom/40 font-bold">Verified Hash: 0x4f2e...9a</p>
                            </div>

                            <div className="text-center sm:text-right space-y-1">
                                <div className="h-12 w-32 border-b border-indigo-500/30 mb-2 mx-auto sm:mx-0" />
                                <p className="text-xs font-bold text-foreground-custom">CODEARENA 2026</p>
                                <p className="text-[10px] uppercase tracking-widest text-foreground-custom/30">Issued: April 12th</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <Button className="flex items-center gap-3 px-8 py-4">
                    <Download size={20} />
                    Download PDF
                </Button>
                <Button variant="secondary" className="flex items-center gap-3 px-8 py-4">
                    <Share2 size={20} />
                    Share Achievement
                </Button>
                <button className="flex items-center gap-2 text-foreground-custom/50 hover:text-foreground-custom transition-colors text-sm font-medium ml-4">
                    <Printer size={18} />
                    Print View
                </button>
            </div>

            <Card className="bg-green-500/5 border-green-500/20 py-6 px-8 rounded-3xl flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                    <CheckCircle2 size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-foreground-custom">Identity Verified</h4>
                    <p className="text-foreground-custom/50 text-sm">This certificate is anchored on the blockchain and can be verified by anyone with your unique ID.</p>
                </div>
            </Card>
        </div>
    );
}
