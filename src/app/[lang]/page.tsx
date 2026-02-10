import { Metadata } from 'next';
import Link from 'next/link';
import { Service, Location } from '@prisma/client';
import prisma from '@/lib/db';
import { GlassCard, GlassButton } from '@/components/ui';
import { JsonLd } from '@/components';
import { Locale, i18n, getTranslation, getLocalizedField, getLocalizedSlug } from '@/lib/i18n';
import { generateHomeMetadata, generateOrganizationJsonLd } from '@/lib/seo';
import { formatCurrency } from '@/lib/utils';
import { FileCheck, Scale, Stethoscope, Globe, ArrowRight, Sparkles } from 'lucide-react';

interface LangPageProps {
    params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
    return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
    const { lang } = await params;
    return generateHomeMetadata(lang as Locale);
}

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    FileCheck,
    Scale,
    Stethoscope,
    Globe,
};

export default async function LangHomePage({ params }: LangPageProps) {
    const { lang } = await params;
    const locale = lang as Locale;
    const t = getTranslation(locale);

    // Fetch services and popular locations
    const [services, locations] = await Promise.all([
        prisma.service.findMany({
            where: { isActive: true },
            take: 6,
            orderBy: { createdAt: 'asc' },
        }),
        prisma.location.findMany({
            where: { isActive: true },
            take: 12,
            orderBy: { orderCount: 'desc' },
        }),
    ]);

    return (
        <>
            <JsonLd data={generateOrganizationJsonLd()} />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20">
                {/* Animated background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
                </div>

                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
                            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                                {locale === 'ru'
                                    ? 'Профессиональный перевод документов'
                                    : 'Professional Document Translation'}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto animate-fade-in-up stagger-1">
                            {locale === 'ru'
                                ? 'Сертифицированные переводы, принимаемые государственными органами и учреждениями по всему миру. Быстрая доставка.'
                                : 'Certified translations accepted by government agencies and institutions worldwide. Fast delivery available.'}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-2">
                            <GlassButton
                                variant="primary"
                                size="lg"
                                icon={<Sparkles className="w-5 h-5" />}
                            >
                                {t.instantQuote}
                            </GlassButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section" id="services">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="section-title">{t.servicesTitle}</h2>
                        <p className="section-subtitle mx-auto">
                            {locale === 'ru'
                                ? 'Выберите нужную услугу и город для получения индивидуальной информации'
                                : 'Select a service and city to get personalized information'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => {
                            const Icon = iconMap[service.icon || 'FileCheck'] || FileCheck;
                            const serviceName = getLocalizedField(service, locale);

                            return (
                                <GlassCard
                                    key={service.id}
                                    className={`animate-fade-in-up stagger-${(index % 5) + 1}`}
                                    padding="lg"
                                >
                                    <div className="w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                                        <Icon className="w-7 h-7 text-purple-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{serviceName}</h3>
                                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                                        {locale === 'ru' ? service.descriptionRu : service.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-white">
                                            {formatCurrency(Number(service.pricePerPage))}
                                            <span className="text-sm text-white/60 font-normal"> /{t.perPage}</span>
                                        </span>
                                        <Link
                                            href={`/${locale}/${getLocalizedSlug(service, locale)}-london`}
                                            className="inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                                        >
                                            {t.learnMore}
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </GlassCard>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Popular Locations */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="section-title">
                            {locale === 'ru' ? 'Популярные города' : 'Popular Cities'}
                        </h2>
                        <p className="section-subtitle mx-auto">
                            {locale === 'ru'
                                ? 'Выберите ваш город для локализованной информации'
                                : 'Select your city for localized information'}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {locations.map((location) => (
                            <Link
                                key={location.id}
                                href={`/${locale}/certified-translation-${location.slug}`}
                                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white/80 hover:text-white text-sm"
                            >
                                {locale === 'ru' && location.nameNomRu ? location.nameNomRu : location.nameNom}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
