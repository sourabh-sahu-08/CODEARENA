import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui';
import { Mail, Lock, ArrowRight, Github, User } from 'lucide-react';

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            // go straight to dashboard after successful registration
            navigate('/dashboard');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 flex flex-col justify-center items-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                <div className="glass-card p-8 bg-secondary-custom/40">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">Join CODEARENA</h1>
                        <p className="text-foreground-custom/40">Create your account to start building</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium">
                            {error}
                        </div>
                    )}

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground-custom/70 ml-1">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full bg-background-custom/50 border border-border-custom rounded-xl py-2.5 px-4 focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                                    placeholder="sourabh"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground-custom/70 ml-1">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full bg-background-custom/50 border border-border-custom rounded-xl py-2.5 px-4 focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                                    placeholder="shashank"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground-custom/70 ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-custom/30" size={18} />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-background-custom/50 border border-border-custom rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                                    placeholder="name@university.edu"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground-custom/70 ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-custom/30" size={18} />
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-background-custom/50 border border-border-custom rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <Button className="w-full py-4 group" disabled={isLoading}>
                            {isLoading ? 'Creating Account...' : 'Create Account'}
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </Button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-border-custom text-center">
                        <p className="text-foreground-custom/40 text-sm">
                            Already have an account?{' '}
                            <a href="/login" className="text-primary font-medium hover:underline">Sign in</a>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
