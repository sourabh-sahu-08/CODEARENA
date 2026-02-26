import { Github, Upload, Link as LinkIcon, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Button, Card } from '../ui';

export default function ProjectSubmission() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h2 className="text-3xl font-bold mb-2">Final Project Submission</h2>
                <p className="text-foreground-custom/40">Ensure all your work is uploaded before the deadline lock.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <h3 className="font-bold mb-4">Repository & Demo</h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm text-foreground-custom/60">GitHub Repository URL</label>
                                <div className="relative">
                                    <Github className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-custom/20" size={18} />
                                    <input
                                        type="text"
                                        placeholder="https://github.com/username/project"
                                        className="w-full bg-background-custom/50 border border-border-custom rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-foreground-custom/60">Demo Video Link</label>
                                <div className="relative">
                                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-custom/20" size={18} />
                                    <input
                                        type="text"
                                        placeholder="https://youtube.com/watch?v=..."
                                        className="w-full bg-background-custom/50 border border-border-custom rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <h3 className="font-bold mb-4">Documentation & Design</h3>
                        <div className="border-2 border-dashed border-border-custom rounded-2xl p-12 text-center hover:border-primary/50 transition-all cursor-pointer group">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary group-hover:scale-110 transition-transform">
                                <Upload size={32} />
                            </div>
                            <p className="font-bold mb-1">Click to upload files</p>
                            <p className="text-xs text-foreground-custom/40">Supports PDF, DOCX, ZIP (Max 50MB)</p>
                        </div>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card className="bg-primary/5 border-primary/20 sticky top-24">
                        <h3 className="font-bold mb-6 flex items-center gap-2">
                            <AlertCircle size={18} className="text-primary" />
                            Submission Check
                        </h3>
                        <ul className="space-y-4 mb-8">
                            {[
                                { label: 'GitHub Repo Linked', ok: true },
                                { label: 'Demo Video Provided', ok: false },
                                { label: 'Pitch Deck Uploaded', ok: true },
                                { label: 'Architecture Diagram', ok: true },
                            ].map((item, i) => (
                                <li key={i} className="flex items-center justify-between text-sm">
                                    <span className="text-foreground-custom/60">{item.label}</span>
                                    {item.ok ? (
                                        <CheckCircle2 size={16} className="text-green-500" />
                                    ) : (
                                        <div className="w-4 h-4 rounded-full border border-border-custom" />
                                    )}
                                </li>
                            ))}
                        </ul>
                        <Button className="w-full py-4 flex items-center justify-center gap-2 group">
                            Submit Project
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <p className="text-[10px] text-foreground-custom/30 text-center mt-4 uppercase font-bold tracking-widest">
                            Deadline: April 7th, 23:59 IST
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
}
