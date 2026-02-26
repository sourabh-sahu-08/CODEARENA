import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Search } from 'lucide-react';
import { Card } from '../ui';

const leaderboardData = [
    { rank: 1, team: 'Neural Knights', score: 2850, change: '+2', members: '4 Members' },
    { rank: 2, team: 'Cyber Sentinels', score: 2720, change: '-1', members: '3 Members' },
    { rank: 3, team: 'Byte Builders', score: 2680, change: '0', members: '4 Members' },
    { rank: 4, team: 'Logic Lords', score: 2540, change: '+5', members: '4 Members' },
    { rank: 5, team: 'Data Divas', score: 2490, change: '-2', members: '2 Members' },
    { rank: 6, team: 'Hack Heroes', score: 2310, change: '+1', members: '3 Members' },
];

export default function Leaderboard() {
    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <Trophy className="text-yellow-500" />
                        Global Leaderboard
                    </h2>
                    <p className="text-foreground-custom/40">Real-time ranking of performance across all rounds.</p>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-custom/20" size={18} />
                    <input
                        type="text"
                        placeholder="Search teams..."
                        className="bg-foreground-custom/5 border border-border-custom rounded-xl py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-primary/50 text-sm w-full md:w-64"
                    />
                </div>
            </div>

            {/* Top 3 Podium */}
            <div className="flex flex-col md:grid md:grid-cols-3 gap-6 items-end">
                {[leaderboardData[1], leaderboardData[0], leaderboardData[2]].map((team, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className={`relative w-full ${i === 1 ? 'md:order-2 z-10 order-1' : i === 0 ? 'md:order-1 order-2' : 'md:order-3 order-3'}`}
                    >
                        <Card className={`relative overflow-hidden text-center pb-10 ${i === 1 ? 'border-yellow-500/30 bg-yellow-500/5 pt-12' : 'pt-8'
                            }`}>
                            {i === 1 && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-500 text-black text-[10px] font-black uppercase rounded-b-xl">
                                    Leader
                                </div>
                            )}
                            <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold ${itemRank(team.rank).color
                                } bg-white/5 border-2 ${itemRank(team.rank).border}`}>
                                {team.rank}
                            </div>
                            <h3 className="text-xl font-bold mb-1">{team.team}</h3>
                            <p className="text-white/40 text-xs mb-4">{team.members}</p>
                            <div className="text-4xl font-black text-gradient">{team.score}</div>
                            <p className="text-[10px] text-white/20 uppercase font-black mt-2">Points</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* List */}
            <Card className="p-0 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-foreground-custom/5 border-b border-border-custom">
                                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-foreground-custom/30">Rank</th>
                                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-foreground-custom/30">Team Name</th>
                                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-foreground-custom/30">Score</th>
                                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-foreground-custom/30">Trend</th>
                                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-foreground-custom/30 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-custom">
                            {leaderboardData.map((item, i) => (
                                <motion.tr
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="hover:bg-white/[0.02] transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <span className={`text-lg font-black ${item.rank <= 3 ? 'text-primary' : 'text-white/40'}`}>
                                            #{item.rank}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-bold">{item.team}</p>
                                            <p className="text-[10px] text-white/30 uppercase">{item.members}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-mono font-bold text-white/80">{item.score}</td>
                                    <td className="px-6 py-4">
                                        <span className={`flex items-center gap-1 text-xs font-bold ${item.change.startsWith('+') ? 'text-green-500' : item.change.startsWith('-') ? 'text-red-500' : 'text-white/20'
                                            }`}>
                                            {item.change.startsWith('+') && <TrendingUp size={14} />}
                                            {item.change}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-xs text-primary font-bold hover:underline">View Analytics</button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}

function itemRank(rank: number) {
    if (rank === 1) return { color: 'text-yellow-500', border: 'border-yellow-500/50' };
    if (rank === 2) return { color: 'text-gray-400', border: 'border-gray-400/50' };
    if (rank === 3) return { color: 'text-amber-600', border: 'border-amber-600/50' };
    return { color: 'text-foreground-custom/20', border: 'border-border-custom' };
}
