import { Video, Mic, PhoneOff, MessageSquare, Users, Settings, Plus } from 'lucide-react';
import { Button, Card } from '../ui';

export default function InterviewPortal() {
    return (
        <div className="h-[calc(100vh-160px)] flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                        <Video size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold">Track Interview: AI Innovation</h2>
                        <p className="text-[10px] sm:text-xs text-foreground-custom/40">Scheduled: Today, 4:30 PM (Starts in 12 mins)</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-500 text-[10px] sm:text-xs font-bold border border-green-500/20">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Live Wait
                    </div>
                    <Button variant="ghost" className="p-2 shrink-0"><Settings size={20} /></Button>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-0 overflow-y-auto lg:overflow-hidden">
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 h-fit md:h-full">
                    {/* Participant 1 (Self) */}
                    <div className="relative rounded-3xl overflow-hidden bg-background-custom border border-border-custom group shadow-2xl aspect-video md:aspect-auto">
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-sm font-semibold text-white">sourabh (You)</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="p-1.5 rounded-lg bg-white/10 backdrop-blur-md text-white"><Mic size={14} /></div>
                                <div className="p-1.5 rounded-lg bg-white/10 backdrop-blur-md text-white"><Video size={14} /></div>
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-border-custom">
                                    <Users size={48} />
                                </div>
                                <p className="text-xs text-foreground-custom/40 uppercase tracking-widest font-black">Camera Off</p>
                            </div>
                        </div>
                        <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/40 backdrop-blur-md text-white text-[10px] font-bold">1080p • 60fps</div>
                    </div>

                    {/* Participant 2 (Judge) */}
                    <div className="relative rounded-3xl overflow-hidden bg-background-custom border border-border-custom shadow-2xl aspect-video md:aspect-auto">
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-foreground-custom/20" />
                                <span className="text-sm font-semibold text-white">shashank (Judge)</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full bg-foreground-custom/5 flex items-center justify-center mx-auto mb-4">
                                    <Users size={40} className="text-foreground-custom/20" />
                                </div>
                                <p className="text-xs text-foreground-custom/40 uppercase tracking-widest font-black">Waiting for judge to join...</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 flex flex-col gap-4 min-h-0">
                    <Card className="flex-1 flex flex-col p-0 overflow-hidden min-h-0">
                        <div className="p-4 border-b border-border-custom flex items-center justify-between">
                            <h3 className="font-bold flex items-center gap-2 text-sm">
                                <MessageSquare size={16} />
                                Live Chat
                            </h3>
                            <span className="text-[10px] font-black uppercase text-foreground-custom/30">2 Participants</span>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-indigo-400">System</p>
                                <p className="text-xs text-foreground-custom/50 p-2 rounded-lg bg-foreground-custom/5 border border-border-custom">Welcome to the interview! The judge will join shortly.</p>
                            </div>
                        </div>
                        <div className="p-4 border-t border-border-custom">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Send message..."
                                    className="w-full bg-foreground-custom/5 border border-border-custom rounded-xl py-2 px-3 text-xs outline-none focus:ring-1 focus:ring-primary-custom"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-primary text-white">
                                    <Plus size={14} />
                                </button>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-4 bg-primary/5 border-primary/20">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-foreground-custom/40 mb-3">Meeting Controls</h4>
                        <div className="flex justify-between items-center gap-2">
                            <button className="flex-1 h-10 rounded-xl bg-foreground-custom/5 border border-border-custom flex items-center justify-center hover:bg-foreground-custom/10 transition-colors"><Mic size={18} /></button>
                            <button className="flex-1 h-10 rounded-xl bg-foreground-custom/5 border border-border-custom flex items-center justify-center hover:bg-foreground-custom/10 transition-colors"><Video size={18} /></button>
                            <button className="flex-1 h-10 rounded-xl bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/20"><PhoneOff size={18} className="text-white" /></button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
