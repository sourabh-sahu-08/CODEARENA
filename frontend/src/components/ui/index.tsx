import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20',
            secondary: 'bg-secondary-custom text-foreground-custom hover:opacity-80 border border-border-custom',
            outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10',
            ghost: 'bg-transparent text-foreground-custom/70 hover:text-foreground-custom hover:bg-foreground-custom/5',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-6 py-2.5',
            lg: 'px-8 py-3 text-lg',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-xl font-medium transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);

export const Card = ({ className, children }: { className?: string, children: React.ReactNode }) => (
    <div className={cn('glass-card p-6', className)}>
        {children}
    </div>
);
