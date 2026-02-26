import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Users,
    Code,
    Rocket,
    MessageSquare,
    BarChart3,
    Search,
    Bell,
    LogOut,
    Calendar,
    User,
    Video,
    Shield,
    Award,
    BrainCircuit,
    Menu,
    X as CloseIcon,
    Moon,
    Sun,
    ShieldAlert
} from 'lucide-react';
import { Button, Card } from '../components/ui';
import TeamRecommendations from '../components/dashboard/TeamRecommendations';
import CodingIDE from '../components/dashboard/CodingIDE';
import AIChatbot from '../components/dashboard/AIChatbot';
import ProjectSubmission from '../components/dashboard/ProjectSubmission';
import Leaderboard from '../components/dashboard/Leaderboard';
import ProfileSetup from '../components/dashboard/ProfileSetup';
import ProblemStatements from '../components/dashboard/ProblemStatements';
import JudgeDashboard from '../components/dashboard/JudgeDashboard';
import CertificationUI from '../components/dashboard/CertificationUI';
import InterviewPortal from '../components/dashboard/InterviewPortal';
import AdminControlPanel from '../components/dashboard/AdminControlPanel';
import { useHackathon } from '../context/HackathonContextState';

const sidebarItems = [
    { id: 'overview', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'profile', icon: User, label: 'My Profile' },
    { id: 'team', icon: Users, label: 'Team & Matches' },
    { id: 'tracks', icon: Search, label: 'Problem Statements' },
    { id: 'ide', icon: Code, label: 'Coding IDE' },
    { id: 'interview', icon: Video, label: 'Interview Portal' },
    { id: 'projects', icon: Rocket, label: 'Submissions' },
    { id: 'chatbot', icon: MessageSquare, label: 'AI Assistant' },
    { id: 'leaderboard', icon: BarChart3, label: 'Leaderboard' },
    { id: 'judge', icon: Shield, label: 'Judge Panel' },
    { id: 'admin', icon: ShieldAlert, label: 'Admin Control' },
    { id: 'certification', icon: Award, label: 'Certification' },
];

import { useLocation } from 'react-router-dom';

export default function Dashboard() {
    const { state } = useHackathon();
    const location = useLocation();

    // Default to 'admin' if path is /admin, otherwise 'overview'
    const [activeTab, setActiveTab] = React.useState(
        location.pathname === '/admin' ? 'admin' : 'overview'
    );
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [theme, setTheme] = React.useState<'dark' | 'light'>(
        document.documentElement.classList.contains('light-mode') ? 'light' : 'dark'
    );

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        if (newTheme === 'light') {
            document.documentElement.classList.add('light-mode');
        } else {
            document.documentElement.classList.remove('light-mode');
        }
    };

    return (
        <div className="min-h-screen bg-background-custom text-foreground-custom flex overflow-hidden font-inter relative">
            {/* Premium Gradient Blobs */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-custom/5 blur-[120px] rounded-full z-0 pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-custom/5 blur-[120px] rounded-full z-0 pointer-events-none" />

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleSidebar}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className={`
        fixed inset-y-0 left-0 w-72 bg-secondary-custom/30 backdrop-blur-2xl border-r border-white/5 flex flex-col z-50 transition-transform duration-300 transform
        lg:translate-x-0 lg:static lg:inset-auto ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <div className="p-6 flex items-center justify-between">
                    <div className="text-2xl font-bold tracking-tighter text-gradient">CODEARENA</div>
                    <button onClick={toggleSidebar} className="lg:hidden text-white/50 hover:text-white">
                        <CloseIcon size={20} />
                    </button>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    {sidebarItems.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setActiveTab(item.id);
                                if (window.innerWidth < 1024) setIsSidebarOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id
                                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                : 'text-foreground-custom/50 hover:bg-foreground-custom/5 hover:text-foreground-custom'
                                }`}
                        >
                            <item.icon size={20} />
                            <span className="font-medium text-sm">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-4 mt-auto">
                    <div className="glass-card p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-4 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-2 opacity-20">
                            <BrainCircuit size={48} />
                        </div>
                        <p className="text-sm font-bold text-foreground-custom mb-1 relative z-10">Elite Plan</p>
                        <p className="text-xs text-foreground-custom/50 mb-3 relative z-10">Hackathon access</p>
                        <div className="w-full bg-foreground-custom/10 rounded-full h-1.5 mb-2 relative z-10">
                            <div className="bg-primary w-3/4 h-full rounded-full" />
                        </div>
                        <p className="text-[10px] text-foreground-custom/30 relative z-10">75% complete setup</p>
                    </div>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-foreground-custom/50 hover:bg-red-500/10 hover:text-red-500 transition-all">
                        <LogOut size={20} />
                        <span className="font-medium text-sm">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                {/* Header */}
                <header className="h-16 border-b border-white/5 flex items-center justify-between px-4 md:px-8 bg-background/50 backdrop-blur-md sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleSidebar}
                            className="lg:hidden p-2 text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                            <Menu size={20} />
                        </button>
                        <div className="relative w-full md:w-96 hidden sm:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-custom/20" size={18} />
                            <input
                                type="text"
                                placeholder="Search features..."
                                className="w-full bg-foreground-custom/5 border border-border-custom rounded-lg py-2 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-white/5 border border-white/10 text-foreground-custom/50 hover:text-foreground-custom transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-foreground-custom/50 hover:text-foreground-custom transition-colors relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-primary-custom rounded-full" />
                        </button>
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary-custom to-accent-custom" />
                    </div>
                </header>

                <div className="p-8">
                    <AnimatePresence mode="wait">
                        {activeTab === 'overview' && (
                            <motion.div
                                key="overview"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-8"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-center bg-secondary-custom/20 border border-white/5 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Rocket size={200} />
                                    </div>
                                    <div className="flex-1 space-y-4 relative z-10">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                                                System Online
                                            </span>
                                            <span className="px-3 py-1 rounded-full bg-primary-custom/10 text-primary-custom text-[10px] font-black uppercase tracking-widest border border-primary-custom/20">
                                                {state.status} Phase
                                            </span>
                                        </div>
                                        <h2 className="text-4xl font-black tracking-tight">Command Center <span className="text-gradient">sourabh!</span></h2>
                                        <p className="text-foreground-custom/40 text-lg max-w-xl leading-relaxed">
                                            Infrastructure is stable. Your current submission velocity is in the <span className="text-foreground-custom">top 5%</span>.
                                            The {state.currentTrack || 'Main'} track is seeing high activity.
                                        </p>
                                        <div className="flex gap-4 pt-2">
                                            <Button size="lg" className="shadow-lg shadow-primary-custom/20">Resume Mission</Button>
                                            <Button variant="secondary" size="lg">Network Lobby</Button>
                                        </div>
                                    </div>
                                    <div className="w-64 h-64 flex-shrink-0 relative z-10">
                                        <img
                                            src="https://source.unsplash.com/400x300/?dashboard,technology"
                                            alt="Dashboard Illustration"
                                            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(var(--primary-custom-rgb),0.3)] animate-float"
                                        />
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                    {[
                                        { label: 'Global Rank', value: '#128', icon: Award, color: 'text-accent-custom', trend: '+12' },
                                        { label: 'Network Pulse', value: '450ms', icon: Code, color: 'text-primary-custom', trend: 'Stable' },
                                        { label: 'Team Cohesion', value: '92%', icon: Users, color: 'text-indigo-400', trend: 'Rising' },
                                        { label: 'Next Deadline', value: '12h', icon: Calendar, color: 'text-red-400', trend: 'Critical' },
                                    ].map((stat, i) => (
                                        <Card key={i} className="group p-6 hover:border-primary-custom/30 transition-all cursor-pointer relative overflow-hidden">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className={`p-3 rounded-xl bg-white/5 ${stat.color} group-hover:scale-110 transition-transform`}>
                                                    <stat.icon size={20} />
                                                </div>
                                                <span className={`text-[10px] font-black uppercase tracking-widest ${stat.color === 'text-red-400' ? 'animate-pulse' : ''}`}>
                                                    {stat.trend}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-foreground-custom/30 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                                                <p className="text-3xl font-black text-foreground-custom">{stat.value}</p>
                                            </div>
                                        </Card>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <Card className="lg:col-span-2">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="font-bold text-lg">Timeline & Updates</h3>
                                            <button className="text-primary text-sm font-medium">View All</button>
                                        </div>
                                        <div className="space-y-6">
                                            {state.updates.length > 0 ? (
                                                state.updates.map((item, j) => (
                                                    <div key={j} className="flex gap-4">
                                                        <div className="text-xs font-mono text-foreground-custom/30 pt-1">
                                                            {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <h4 className="font-bold text-sm">{item.title}</h4>
                                                                {item.type === 'critical' && (
                                                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                                                )}
                                                            </div>
                                                            <p className="text-foreground-custom/40 text-xs leading-relaxed">{item.description}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="text-center py-10 text-foreground-custom/20">
                                                    No recent updates.
                                                </div>
                                            )}
                                        </div>
                                    </Card>

                                    <Card>
                                        <h3 className="font-bold text-lg mb-6">Team Formation</h3>
                                        <div className="space-y-4">
                                            {[
                                                { name: 'sourabh', role: 'Full Stack', Initial: 'SO' },
                                            { name: 'shashank', role: 'UI Designer', Initial: 'SH' },
                                            { name: 'yashwant', role: 'DevOps', Initial: 'YA' },
                                            { name: 'vaibhav', role: 'Security', Initial: 'VA' },
                                            ].map((member, k) => (
                                                <div key={k} className="flex items-center justify-between p-3 rounded-xl bg-foreground-custom/5 border border-border-custom">
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                                                            {member.Initial}
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-bold">{member.name}</p>
                                                            <p className="text-[10px] text-foreground-custom/40">{member.role}</p>
                                                        </div>
                                                    </div>
                                                    <button className="p-2 text-foreground-custom/30 hover:text-foreground-custom transition-colors">
                                                        <MessageSquare size={16} />
                                                    </button>
                                                </div>
                                            ))}
                                            <button className="w-full py-3 border border-dashed border-border-custom rounded-xl text-foreground-custom/40 text-sm hover:border-primary/50 hover:text-primary transition-all">
                                                + Invite Member
                                            </button>
                                        </div>
                                    </Card>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'team' && (
                            <motion.div
                                key="team"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <TeamRecommendations />
                            </motion.div>
                        )}

                        {activeTab === 'ide' && (
                            <motion.div
                                key="ide"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <CodingIDE />
                            </motion.div>
                        )}

                        {activeTab === 'projects' && (
                            <motion.div
                                key="projects"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <ProjectSubmission />
                            </motion.div>
                        )}

                        {activeTab === 'chatbot' && (
                            <motion.div
                                key="chatbot"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <AIChatbot />
                            </motion.div>
                        )}

                        {activeTab === 'leaderboard' && (
                            <motion.div
                                key="leaderboard"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <Leaderboard />
                            </motion.div>
                        )}

                        {activeTab === 'profile' && (
                            <motion.div
                                key="profile"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <ProfileSetup />
                            </motion.div>
                        )}

                        {activeTab === 'tracks' && (
                            <motion.div
                                key="tracks"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <ProblemStatements />
                            </motion.div>
                        )}

                        {activeTab === 'interview' && (
                            <motion.div
                                key="interview"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <InterviewPortal />
                            </motion.div>
                        )}

                        {activeTab === 'judge' && (
                            <motion.div
                                key="judge"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <JudgeDashboard />
                            </motion.div>
                        )}

                        {activeTab === 'certification' && (
                            <motion.div
                                key="certification"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <CertificationUI />
                            </motion.div>
                        )}

                        {activeTab === 'admin' && (
                            <motion.div
                                key="admin"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <AdminControlPanel />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
