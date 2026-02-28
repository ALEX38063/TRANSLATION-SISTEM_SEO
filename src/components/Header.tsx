'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Logo, GlassButton } from '@/components/ui';
import { Locale, i18n, getTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

interface HeaderProps {
    lang: Locale;
    currentPath?: string;
}

const langLabels: Record<Locale, { label: string; flag: string }> = {
    en: { label: 'EN', flag: '🇬🇧' },
    ru: { label: 'RU', flag: '🇷🇺' },
    ua: { label: 'UA', flag: '🇺🇦' },
    de: { label: 'DE', flag: '🇩🇪' },
    fr: { label: 'FR', flag: '🇫🇷' },
    es: { label: 'ES', flag: '🇪🇸' },
};

export function Header({ lang, currentPath = '' }: HeaderProps) {
    const t = getTranslation(lang);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const langRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(e.target as Node)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navLinks = [
        { href: `/${lang}#services`, label: t.servicesTitle },
        { href: `/${lang}#calculator`, label: t.calculatorTitle },
        { href: `/${lang}#faq`, label: 'FAQ' },
        { href: `/${lang}#contact`, label: t.contact },
    ];

    const otherLocales = i18n.locales.filter((l) => l !== lang);

    return (
        <header className={cn('header', isScrolled && 'header-scrolled')}>
            <div className="container h-full flex items-center justify-between">
                {/* Logo */}
                <Link href={`/${lang}`} className="flex-shrink-0">
                    <Logo size="md" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-white/80 hover:text-white transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right side actions */}
                <div className="flex items-center gap-4">

                    {/* Language switcher dropdown */}
                    <div ref={langRef} className="relative">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                            aria-label="Switch language"
                        >
                            <Globe className="w-4 h-4 text-white/60" />
                            <span className="text-sm font-medium text-white uppercase">
                                {langLabels[lang].flag} {langLabels[lang].label}
                            </span>
                            <ChevronDown className={cn('w-3 h-3 text-white/60 transition-transform', isLangOpen && 'rotate-180')} />
                        </button>

                        {isLangOpen && (
                            <div className="absolute right-0 mt-2 w-36 rounded-xl bg-[rgba(12,20,69,0.98)] backdrop-blur-xl border border-white/10 shadow-2xl z-50 overflow-hidden">
                                {/* Current language */}
                                <div className="px-3 py-2 flex items-center gap-2 bg-white/10 cursor-default">
                                    <span>{langLabels[lang].flag}</span>
                                    <span className="text-sm font-semibold text-white uppercase">{langLabels[lang].label}</span>
                                    <span className="ml-auto w-2 h-2 rounded-full bg-emerald-400" />
                                </div>
                                {/* Other languages */}
                                {otherLocales.map((locale) => (
                                    <Link
                                        key={locale}
                                        href={`/${locale}${currentPath}`}
                                        onClick={() => setIsLangOpen(false)}
                                        className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 transition-colors"
                                    >
                                        <span>{langLabels[locale].flag}</span>
                                        <span className="text-sm font-medium text-white/80 hover:text-white uppercase">{langLabels[locale].label}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

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
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white/80 hover:text-white py-2 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Mobile language switcher */}
                        <div className="pt-2 border-t border-white/10">
                            <p className="text-xs text-white/40 uppercase mb-2">Language</p>
                            <div className="flex flex-wrap gap-2">
                                {i18n.locales.map((locale) => (
                                    <Link
                                        key={locale}
                                        href={`/${locale}${currentPath}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            'flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors',
                                            locale === lang
                                                ? 'bg-white/20 text-white'
                                                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                                        )}
                                    >
                                        {langLabels[locale].flag} {langLabels[locale].label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="pt-2">
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
