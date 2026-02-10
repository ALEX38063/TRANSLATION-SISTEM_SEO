'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo, GlassButton } from '@/components/ui';
import { Locale, i18n, getTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import { Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
    lang: Locale;
    currentPath?: string;
}

export function Header({ lang, currentPath = '' }: HeaderProps) {
    const t = getTranslation(lang);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const otherLang = lang === 'en' ? 'ru' : 'en';

    return (
        <header className={cn('header', isScrolled && 'header-scrolled')}>
            <div className="container h-full flex items-center justify-between">
                {/* Logo */}
                <Link href={`/${lang}`} className="flex-shrink-0">
                    <Logo size="md" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href={`/${lang}#services`}
                        className="text-white/80 hover:text-white transition-colors"
                    >
                        {lang === 'ru' ? 'Услуги' : 'Services'}
                    </Link>
                    <Link
                        href={`/${lang}#calculator`}
                        className="text-white/80 hover:text-white transition-colors"
                    >
                        {lang === 'ru' ? 'Калькулятор' : 'Calculator'}
                    </Link>
                    <Link
                        href={`/${lang}#faq`}
                        className="text-white/80 hover:text-white transition-colors"
                    >
                        FAQ
                    </Link>
                    <Link
                        href={`/${lang}#contact`}
                        className="text-white/80 hover:text-white transition-colors"
                    >
                        {lang === 'ru' ? 'Контакты' : 'Contact'}
                    </Link>
                </nav>

                {/* Right side actions */}
                <div className="flex items-center gap-4">
                    {/* Language switcher */}
                    <Link
                        href={`/${otherLang}${currentPath}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        <Globe className="w-4 h-4 text-white/60" />
                        <span className="text-sm font-medium text-white uppercase">
                            {otherLang}
                        </span>
                    </Link>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:block">
                        <GlassButton variant="primary" size="sm">
                            {t.instantQuote}
                        </GlassButton>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[rgba(12,20,69,0.98)] backdrop-blur-xl border-b border-white/10">
                    <nav className="container py-6 flex flex-col gap-4">
                        <Link
                            href={`/${lang}#services`}
                            className="text-white/80 hover:text-white py-2 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {lang === 'ru' ? 'Услуги' : 'Services'}
                        </Link>
                        <Link
                            href={`/${lang}#calculator`}
                            className="text-white/80 hover:text-white py-2 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {lang === 'ru' ? 'Калькулятор' : 'Calculator'}
                        </Link>
                        <Link
                            href={`/${lang}#faq`}
                            className="text-white/80 hover:text-white py-2 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            FAQ
                        </Link>
                        <Link
                            href={`/${lang}#contact`}
                            className="text-white/80 hover:text-white py-2 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {lang === 'ru' ? 'Контакты' : 'Contact'}
                        </Link>
                        <div className="pt-4">
                            <GlassButton variant="primary" fullWidth>
                                {t.instantQuote}
                            </GlassButton>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
