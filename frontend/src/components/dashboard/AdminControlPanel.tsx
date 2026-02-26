import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Globe,
    ShieldAlert,
    Activity,
    Cpu,
    Database,
    HardDrive,
    Server,
    TrendingUp,
    MapPin,
    Flag
} from 'lucide-react';
import { Card, Button } from '../ui';
import { InfraChart } from './InfraChart';
import { useHackathon } from '../../context/HackathonContextState';

const nationalStats = [
    { state: 'Maharashtra', count: 4200, trend: '+15%' },
    { state: 'Karnataka', count: 3850, trend: '+12%' },
    { state: 'Delhi NCR', count: 3100, trend: '+18%' },
    { state: 'Tamil Nadu', count: 2900, trend: '+9%' },
    { state: 'Telangana', count: 2750, trend: '+14%' },
];

const adminEvents = [
    { time: '14:20', action: 'System Backup', user: 'Auto-Bot', status: 'Success' },
    { time: '13:45', action: 'Scale Out: Asia-South', user: 'Admin_vaibhav', status: 'Pending' },
    { time: '12:10', action: 'Phase Transition: Live', user: 'System', status: 'Success' },
    { time: '09:00', action: 'Load Balancer Update', user: 'Admin_shashank', status: 'Success' },
];

export default function AdminControlPanel() {
    const { state } = useHackathon();
    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-10">
            {/* National Overview Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h2 className="text-4xl font-black tracking-tight flex items-center gap-3">
                        <Flag className="text-primary-custom" size={32} />
                        National <span className="text-gradient">Analytics</span>
                    </h2>
                    <p className="text-foreground-custom/40 text-sm mt-1">Real-time infrastructure and participation intelligence portal.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2">
                        <Globe size={16} />
                        Export Census
                    </Button>
                    <Button size="sm" className="gap-2 border-primary-custom/50">
                        <ShieldAlert size={16} />
                        Incident Center
                    </Button>
                </div>
            </div>

            {/* Core Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Total Bharat Reach', value: '1.2M+', icon: Globe, color: 'text-blue-400', sub: 'Across 28 States' },
                    { label: 'Active Sessions', value: state.stats.participants.toLocaleString(), icon: Activity, color: 'text-emerald-400', sub: '99.9% Up-time' },
                    { label: 'Verified Teams', value: '4,102', icon: Users, color: 'text-primary-custom', sub: 'KYC Verified' },
                    { label: 'Query Velocity', value: `${(state.stats.serverLoad * 200).toFixed(0)}/s`, icon: TrendingUp, color: 'text-accent-custom', sub: 'Peak Load' },
                ].map((stat, i) => (
                    <Card key={i} className="relative overflow-hidden group">
                        <div className={`p-3 rounded-xl bg-foreground-custom/5 w-fit mb-4 ${stat.color} group-hover:bg-current/10 transition-colors`}>
                            <stat.icon size={20} />
                        </div>
                        <p className="text-foreground-custom/30 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-3xl font-black mb-1">{stat.value}</p>
                        <p className="text-[10px] text-foreground-custom/20 font-medium">{stat.sub}</p>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Infrastructure Monitor */}
                <Card className="lg:col-span-2 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <Server className="text-primary-custom" size={20} />
                            <h3 className="font-bold text-lg">Infrastructure Pulse</h3>
                        </div>
                        <span className="flex items-center gap-2 text-[10px] text-emerald-400 font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            All Clusters Nominal
                        </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                        <InfraChart value={state.stats.serverLoad} label="CPU Load" color="stroke-indigo-500" />
                        <InfraChart value={68} label="Memory" color="stroke-primary-custom" />
                        <InfraChart value={15} label="Storage" color="stroke-emerald-500" />
                        <InfraChart value={89} label="Network" color="stroke-accent-custom" />
                    </div>

                    <div className="space-y-4 pt-6 border-t border-border-custom">
                        <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-foreground-custom/30">
                            <span>Service Nodes</span>
                            <span>Status</span>
                            <span>Latency</span>
                        </div>
                        {[
                            { name: 'Asia-South-1 (Mumbai)', status: 'Optimal', latency: '12ms', icon: Cpu },
                            { name: 'Asia-East-2 (Chennai)', status: 'Scaling', latency: '45ms', icon: Database },
                            { name: 'Core-DB-Cluster', status: 'Optimal', latency: '2ms', icon: HardDrive },
                        ].map((node, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-foreground-custom/5 border border-border-custom hover:border-foreground-custom/10 transition-colors">
                                <div className="flex items-center gap-3">
                                    <node.icon size={16} className="text-foreground-custom/40" />
                                    <span className="text-sm font-bold">{node.name}</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className={`text-[10px] font-bold uppercase ${node.status === 'Optimal' ? 'text-emerald-400' : 'text-amber-400'}`}>{node.status}</span>
                                    <span className="text-xs font-mono text-foreground-custom/30">{node.latency}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Regional Hotspots */}
                <Card className="flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <MapPin className="text-accent-custom" size={20} />
                        <h3 className="font-bold text-lg">State-wise Heat</h3>
                    </div>
                    <div className="space-y-5 flex-1">
                        {nationalStats.map((item, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between items-end">
                                    <span className="text-sm font-bold">{item.state}</span>
                                    <span className="text-xs text-accent-custom font-bold">{item.trend}</span>
                                </div>
                                <div className="h-2 bg-foreground-custom/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${(item.count / 4200) * 100}%` }}
                                        className="h-full bg-gradient-to-r from-accent-custom/50 to-accent-custom"
                                    />
                                </div>
                                <div className="flex justify-between text-[10px] text-foreground-custom/20 font-bold uppercase tracking-wider">
                                    <span>{item.count} Participants</span>
                                    <span>Target Met</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button variant="secondary" className="w-full mt-8">View Detailed Map</Button>
                </Card>
            </div>

            {/* Admin Logs */}
            <Card>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">System Governance Logs</h3>
                    <Button variant="ghost" size="sm">Download Audit</Button>
                </div>
                <div className="space-y-3">
                    {adminEvents.map((log, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-foreground-custom/5 transition-colors border border-transparent hover:border-border-custom">
                            <div className="text-xs font-mono text-foreground-custom/20">{log.time}</div>
                            <div className="flex-1 flex items-center justify-between">
                                <div>
                                    <span className="text-sm font-bold text-foreground-custom">{log.action}</span>
                                    <span className="text-[10px] ml-3 text-foreground-custom/30 lowercase">triggered by</span>
                                    <span className="text-[10px] ml-1 font-black uppercase text-primary-custom/70">{log.user}</span>
                                </div>
                                <span className={`text-[10px] font-black uppercase tracking-widest ${log.status === 'Success' ? 'text-emerald-400' : 'text-amber-400 animate-pulse'}`}>
                                    {log.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
