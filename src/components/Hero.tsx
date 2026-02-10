'use client';

import { Location, Service } from '@prisma/client';
import { GlassButton } from '@/components/ui';
import { Locale, getTranslation, getLocalizedField, getLocalizedLocationPrep } from '@/lib/i18n';
import { FileUp, Sparkles, CheckCircle } from 'lucide-react';

interface HeroProps {
    location: Location;
    service: Service;
    lang: Locale;
}

export function Hero({ location, service, lang }: HeroProps) {
    const t = getTranslation(lang);
    const serviceName = getLocalizedField(service, lang);
    const cityPrep = getLocalizedLocationPrep(location, lang);

    // Dynamic H1 with local context
    const h1 = lang === 'ru'
        ? `${serviceName} ${cityPrep} для ${location.localAuthority}`
        : `${serviceName} ${cityPrep} for ${location.localAuthority}`;

    const subtitle = lang === 'ru'
        ? `Официальный перевод документов ${cityPrep}. Рейтинг 5.0 в ${location.countryCode}. Доставка ${location.deliveryHours || '24-48 часов'}.`
        : `Official document translation ${cityPrep}. Rated 5.0 in ${location.countryCode}. Delivery in ${location.deliveryHours || '24-48 hours'}.`;

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Trust badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 animate-fade-in-up">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-400 font-medium">
                            {lang === 'ru' ? 'Сертифицированные переводчики' : 'Certified Translators'}
                        </span>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up stagger-1">
                        <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                            {h1}
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
                        {subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-3">
                        <GlassButton
                            variant="primary"
                            size="lg"
                            icon={<Sparkles className="w-5 h-5" />}
                        >
                            {t.instantQuote}
                        </GlassButton>

                        <GlassButton
                            variant="secondary"
                            size="lg"
                            icon={<FileUp className="w-5 h-5" />}
                        >
                            {t.uploadDocument}
                        </GlassButton>
                    </div>

                    {/* Quick stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up stagger-4">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">
                                {location.orderCount || 500}+
                            </div>
                            <div className="text-sm text-white/60">
                                {lang === 'ru' ? 'Заказов выполнено' : 'Orders completed'}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1 flex items-center justify-center gap-1">
                                4.9
                                <span className="text-yellow-400 text-xl">★</span>
                            </div>
                            <div className="text-sm text-white/60">
                                {lang === 'ru' ? 'Средний рейтинг' : 'Average rating'}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">
                                {location.deliveryHours || '24h'}
                            </div>
                            <div className="text-sm text-white/60">
                                {lang === 'ru' ? 'Быстрая доставка' : 'Fast delivery'}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">
                                50+
                            </div>
                            <div className="text-sm text-white/60">
                                {lang === 'ru' ? 'Языков' : 'Languages'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
