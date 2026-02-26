import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useHackathon } from '../../context/HackathonContextState';

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles?: string[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
    const { state } = useHackathon();
    const location = useLocation();

    // bypass authentication during development (returns dashboard directly)
    // if (state.userRole === 'guest') {
    //     return <Navigate to="/login" state={{ from: location }} replace />;
    // }

    // optional: you can force a default role in state to avoid further redirects
    if (state.userRole === 'guest') {
        state.userRole = 'participant';
    }

    if (allowedRoles && !allowedRoles.includes(state.userRole)) {
        return <Navigate to="/dashboard" replace />;
    }

    return <>{children}</>;
};
