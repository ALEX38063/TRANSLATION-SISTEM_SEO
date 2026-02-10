import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'light' | 'dark';
    hover?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function GlassCard({
    children,
    className,
    variant = 'default',
    hover = true,
    padding = 'md',
}: GlassCardProps) {
    const variants = {
        default: 'glass-card',
        light: 'glass-light',
        dark: 'glass',
    };

    const paddings = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    return (
        <div
            className={cn(
                variants[variant],
                paddings[padding],
                hover && 'transition-all duration-300',
                className
            )}
        >
            {children}
        </div>
    );
}

export default GlassCard;
