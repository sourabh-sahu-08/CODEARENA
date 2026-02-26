import React, { useState, useEffect } from 'react';
import { HackathonContext } from './HackathonContextState';
import type { HackathonState, HackathonStatus } from './HackathonContextState';

export const HackathonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, setState] = useState<HackathonState>(() => {
        const savedUser = localStorage.getItem('codearena_user');
        const user = savedUser ? JSON.parse(savedUser) : null;
        return {
            status: 'registering',
            userRole: user ? (user.role === 'admin' ? 'admin' : 'participant') : 'guest',
            isRegistered: !!user,
            currentTrack: null,
            user,
            updates: [],
            problems: [],
            stats: {
                participants: 12450,
                serverLoad: 42,
                activeSubmissions: 890,
            }
        };
    });

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('codearena_token');
            if (!token) return;

            const headers = { 'Authorization': `Bearer ${token}` };

            try {
                // Fetch Stats
                const statsRes = await fetch('http://localhost:5000/api/stats', { headers });
                if (statsRes.ok) {
                    const statsData = await statsRes.json();
                    setState(prev => ({ ...prev, stats: statsData }));
                }

                // Fetch Updates
                const updatesRes = await fetch('http://localhost:5000/api/updates', { headers });
                if (updatesRes.ok) {
                    const updatesData = await updatesRes.json();
                    setState(prev => ({ ...prev, updates: updatesData }));
                }

                // Fetch Problems
                const problemsRes = await fetch('http://localhost:5000/api/problems', { headers });
                if (problemsRes.ok) {
                    const problemsData = await problemsRes.json();
                    setState(prev => ({ ...prev, problems: problemsData }));
                }
            } catch (error) {
                console.error('Failed to fetch real-time data:', error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 15000);
        return () => clearInterval(interval);
    }, [state.user]);

    const setStatus = (status: HackathonStatus) => {
        setState(prev => ({ ...prev, status }));
    };

    const register = (track: string) => {
        setState(prev => ({ ...prev, isRegistered: true, currentTrack: track, userRole: 'participant' }));
    };

    const logout = () => {
        localStorage.removeItem('codearena_token');
        localStorage.removeItem('codearena_user');
        setState(prev => ({
            ...prev,
            user: null,
            userRole: 'guest',
            isRegistered: false,
        }));
    };

    return (
        <HackathonContext.Provider value={{ state, setStatus, register, logout }}>
            {children}
        </HackathonContext.Provider>
    );
};

