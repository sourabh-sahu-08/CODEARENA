import { createContext, useContext } from 'react';

export type HackathonStatus = 'upcoming' | 'registering' | 'live' | 'judging' | 'ended';

export interface HackathonState {
    status: HackathonStatus;
    userRole: 'participant' | 'judge' | 'guest' | 'admin';
    isRegistered: boolean;
    currentTrack: string | null;
    user: any | null;
    updates: any[];
    problems: any[];
    submissions: any[];
    stats: {
        participants: number;
        serverLoad: number;
        activeSubmissions: number;
    };
}

export interface HackathonContextType {
    state: HackathonState;
    setStatus: (status: HackathonStatus) => void;
    register: (track: string) => void;
    logout: () => void;
    submitCode: (code: string, language: string, problemId?: string) => Promise<any>;
}

export const HackathonContext = createContext<HackathonContextType | undefined>(undefined);

export const useHackathon = () => {
    const context = useContext(HackathonContext);
    if (!context) {
        throw new Error('useHackathon must be used within a HackathonProvider');
    }
    return context;
};
