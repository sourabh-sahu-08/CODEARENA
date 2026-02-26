import { motion } from 'framer-motion';
import { Zap, Users, Shield } from 'lucide-react';
import { Button, Card } from '../ui';

const recommendations = [
    {
        name: 'Sarah Chen',
        skills: ['React', 'Node.js', 'AWS'],
        match: 98,
        interests: ['FinTech', 'Scalability'],
        experience: 'Expert'
    },
    {
        name: 'Marcus Bell',
        skills: ['Python', 'TensorFlow', 'FastAPI'],
        match: 92,
        interests: ['AI/ML', 'Data Science'],
        experience: 'Intermediate'
    },
    {
        name: 'Elena Rodriguez',
        skills: ['Vue', 'D3.js', 'UI/UX'],
        match: 85,
        interests: ['Data Viz', 'Social Impact'],
        experience: 'Senior'
    }
];

export default function TeamRecommendations() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Zap className="text-yellow-500" size={24} />
                        Smart Matches
                    </h2>
                    <p className="text-foreground-custom/40 text-sm">AI-powered teammate recommendations based on your stack.</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-foreground-custom/5 border border-border-custom text-xs text-foreground-custom/50">
                    <Shield size={14} className="text-primary" />
                    Privacy Protected
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations.map((profile, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="h-full flex flex-col group hover:border-primary/30 transition-all">
                            <div className="flex items-start justify-between mb-4">
                                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-lg font-bold text-primary">
                                    {profile.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold border border-green-500/20">
                                    {profile.match}% Match
                                </div>
                            </div>

                            <h3 className="font-bold text-lg mb-1">{profile.name}</h3>
                            <p className="text-white/40 text-xs mb-4">{profile.experience} • {profile.interests[0]}</p>

                            <div className="flex flex-wrap gap-2 mb-6 flex-1">
                                {profile.skills.map(skill => (
                                    <span key={skill} className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-white/60">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <Button className="flex-1 py-2 text-sm" variant="outline">
                                    View Profile
                                </Button>
                                <Button className="flex-1 py-2 text-sm">
                                    Request
                                </Button>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <Card className="bg-primary/5 border-primary/20 p-8 text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 text-primary">
                    <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Can't find the right fit?</h3>
                <p className="text-foreground-custom/40 text-sm mb-6">
                    Our AI continues to scan for compatible participants.
                    Make sure your profile is updated to get better matches.
                </p>
                <Button variant="secondary">Update Tech Stack</Button>
            </Card>
        </div>
    );
}
