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

    if (state.userRole === 'guest') {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles && !allowedRoles.includes(state.userRole)) {
        return <Navigate to="/dashboard" replace />;
    }

    return <>{children}</>;
};
