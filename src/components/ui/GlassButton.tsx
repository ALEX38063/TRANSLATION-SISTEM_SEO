import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'glass';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    icon?: ReactNode;
}

export function GlassButton({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    icon,
    className,
    ...props
}: GlassButtonProps) {
    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        glass: 'btn-glass',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={cn(
                variants[variant],
                sizes[size],
                fullWidth && 'w-full',
                'inline-flex items-center justify-center gap-2',
                className
            )}
            {...props}
        >
            {icon && <span className="flex-shrink-0">{icon}</span>}
            {children}
        </button>
    );
}

export default GlassButton;
