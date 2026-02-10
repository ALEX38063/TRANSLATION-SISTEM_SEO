import { cn } from '@/lib/utils';

interface LogoProps {
    size?: 'sm' | 'md' | 'lg';
    showText?: boolean;
    className?: string;
}

export function Logo({ size = 'md', showText = true, className }: LogoProps) {
    const sizes = {
        sm: { icon: 32, text: 'text-lg' },
        md: { icon: 40, text: 'text-xl' },
        lg: { icon: 56, text: 'text-2xl' },
    };

    const { icon: iconSize, text: textSize } = sizes[size];

    return (
        <div className={cn('flex items-center gap-3', className)}>
            {/* Logo Icon - Stylized T with overlapping speech bubbles */}
            <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
            >
                {/* Gradient definitions */}
                <defs>
                    <linearGradient id="logoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#667eea" />
                        <stop offset="100%" stopColor="#764ba2" />
                    </linearGradient>
                    <linearGradient id="logoGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f093fb" />
                        <stop offset="100%" stopColor="#f5576c" />
                    </linearGradient>
                    <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Background circle with glow */}
                <circle
                    cx="28"
                    cy="28"
                    r="26"
                    fill="url(#logoGradient1)"
                    opacity="0.15"
                />

                {/* Left speech bubble */}
                <path
                    d="M12 18C12 14.6863 14.6863 12 18 12H28C31.3137 12 34 14.6863 34 18V26C34 29.3137 31.3137 32 28 32H22L16 38V32H18C14.6863 32 12 29.3137 12 26V18Z"
                    fill="url(#logoGradient1)"
                    filter="url(#logoGlow)"
                />

                {/* Right speech bubble (overlapping) */}
                <path
                    d="M22 24C22 20.6863 24.6863 18 28 18H38C41.3137 18 44 20.6863 44 24V32C44 35.3137 41.3137 38 38 38H34L40 44V38H38C34.6863 38 32 35.3137 32 32V30H28C24.6863 30 22 27.3137 22 24Z"
                    fill="url(#logoGradient2)"
                    opacity="0.9"
                    filter="url(#logoGlow)"
                />

                {/* Letter T */}
                <text
                    x="28"
                    y="32"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="700"
                    fontFamily="Inter, system-ui, sans-serif"
                >
                    T
                </text>
            </svg>

            {/* Text */}
            {showText && (
                <div className="flex flex-col">
                    <span
                        className={cn(
                            textSize,
                            'font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent leading-tight'
                        )}
                    >
                        Translation
                    </span>
                    <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                        Center
                    </span>
                </div>
            )}
        </div>
    );
}

export default Logo;
