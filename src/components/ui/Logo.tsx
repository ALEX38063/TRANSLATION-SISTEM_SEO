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
            {/* Logo Image */}
            <div
                className="flex-shrink-0 relative"
                style={{ width: iconSize, height: iconSize }}
            >
                <img
                    src="/logo.png"
                    alt="ProfIT Logo"
                    width={iconSize}
                    height={iconSize}
                    className="object-contain"
                />
            </div>

            {/* Text */}
            {showText && (
                <div className="flex flex-col">
                    <span
                        className={cn(
                            textSize,
                            'font-bold bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent leading-tight'
                        )}
                    >
                        Translation
                    </span>
                    <span className="text-xs font-medium text-emerald-600/80 uppercase tracking-wider">
                        Center
                    </span>
                </div>
            )}
        </div>
    );
}

export default Logo;
