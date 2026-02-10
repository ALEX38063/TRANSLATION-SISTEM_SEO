import Link from 'next/link';
import { Logo } from '@/components/ui';
import { Locale, getTranslation } from '@/lib/i18n';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
    lang: Locale;
}

export function Footer({ lang }: FooterProps) {
    const t = getTranslation(lang);
    const currentYear = new Date().getFullYear();

    const services = lang === 'ru'
        ? [
            { name: 'Нотариальный перевод', href: `/${lang}/certified-translation` },
            { name: 'Юридический перевод', href: `/${lang}/legal-translation` },
            { name: 'Медицинский перевод', href: `/${lang}/medical-translation` },
            { name: 'Технический перевод', href: `/${lang}/technical-translation` },
            { name: 'Перевод сайтов', href: `/${lang}/website-translation` },
        ]
        : [
            { name: 'Certified Translation', href: `/${lang}/certified-translation` },
            { name: 'Legal Translation', href: `/${lang}/legal-translation` },
            { name: 'Medical Translation', href: `/${lang}/medical-translation` },
            { name: 'Technical Translation', href: `/${lang}/technical-translation` },
            { name: 'Website Translation', href: `/${lang}/website-translation` },
        ];

    const company = lang === 'ru'
        ? [
            { name: 'О нас', href: `/${lang}/about` },
            { name: 'Контакты', href: `/${lang}/contact` },
            { name: 'Блог', href: `/${lang}/blog` },
            { name: 'Карьера', href: `/${lang}/careers` },
        ]
        : [
            { name: 'About Us', href: `/${lang}/about` },
            { name: 'Contact', href: `/${lang}/contact` },
            { name: 'Blog', href: `/${lang}/blog` },
            { name: 'Careers', href: `/${lang}/careers` },
        ];

    return (
        <footer className="bg-[rgba(12,20,69,0.9)] border-t border-white/10">
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Logo size="md" className="mb-6" />
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            {lang === 'ru'
                                ? 'Профессиональные переводческие услуги для бизнеса и частных лиц. Сертифицированные переводы, принимаемые во всём мире.'
                                : 'Professional translation services for businesses and individuals. Certified translations accepted worldwide.'}
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-white/40 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            {lang === 'ru' ? 'Услуги' : 'Services'}
                        </h4>
                        <ul className="space-y-3">
                            {services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-white/60 hover:text-white text-sm transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            {lang === 'ru' ? 'Компания' : 'Company'}
                        </h4>
                        <ul className="space-y-3">
                            {company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-white/60 hover:text-white text-sm transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            {lang === 'ru' ? 'Контакты' : 'Contact'}
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                                <a
                                    href="mailto:info@translation-center.com"
                                    className="text-white/60 hover:text-white text-sm transition-colors"
                                >
                                    info@translation-center.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                                <a
                                    href="tel:+442012345678"
                                    className="text-white/60 hover:text-white text-sm transition-colors"
                                >
                                    +44 20 1234 5678
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                                <span className="text-white/60 text-sm">
                                    {lang === 'ru'
                                        ? 'Лондон, Великобритания'
                                        : 'London, United Kingdom'}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm">
                        © {currentYear} Translation Center. {lang === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                        <Link href={`/${lang}/privacy`} className="text-white/40 hover:text-white transition-colors">
                            {t.privacy}
                        </Link>
                        <Link href={`/${lang}/terms`} className="text-white/40 hover:text-white transition-colors">
                            {t.terms}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
