'use client';

import { Location } from '@prisma/client';
import { GlassCard } from '@/components/ui';
import { Locale, getTranslation, getLocalizedLocationPrep } from '@/lib/i18n';
import { Shield, Clock, Award, Users, Star, Zap } from 'lucide-react';

interface TrustBlocksProps {
    location: Location;
    lang: Locale;
}

export function TrustBlocks({ location, lang }: TrustBlocksProps) {
    const t = getTranslation(lang);
    const cityPrep = getLocalizedLocationPrep(location, lang);

    const trustItems = [
        {
            icon: Shield,
            value: lang === 'ru' ? 'Сертифицировано' : 'Certified',
            label: lang === 'ru' ? 'Официальные переводы' : 'Official translations',
            color: 'from-emerald-400 to-teal-500',
        },
        {
            icon: Clock,
            value: location.deliveryHours || '24h',
            label: lang === 'ru' ? 'Быстрая доставка' : 'Fast delivery',
            color: 'from-blue-400 to-cyan-500',
        },
        {
            icon: Award,
            value: '4.9/5',
            label: lang === 'ru' ? 'Средний рейтинг' : 'Average rating',
            color: 'from-yellow-400 to-orange-500',
        },
        {
            icon: Users,
            value: '10,000+',
            label: lang === 'ru' ? 'Довольных клиентов' : 'Happy clients',
            color: 'from-purple-400 to-pink-500',
        },
    ];

    return (
        <section className="section">
            <div className="container">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="section-title">
                        {lang === 'ru'
                            ? `Почему выбирают нас ${cityPrep}`
                            : `Why Choose Us ${cityPrep}`}
                    </h2>
                    <p className="section-subtitle mx-auto">
                        {lang === 'ru'
                            ? `Уже ${location.orderCount || 500}+ заказов выполнено ${cityPrep} в этом месяце`
                            : `Already ${location.orderCount || 500}+ orders completed ${cityPrep} this month`}
                    </p>
                </div>

                {/* Trust cards grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {trustItems.map((item, index) => (
                        <GlassCard
                            key={index}
                            className={`text-center animate-fade-in-up stagger-${index + 1}`}
                            padding="lg"
                        >
                            <div
                                className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                            >
                                <item.icon className="w-7 h-7 text-white" />
                            </div>
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                {item.value}
                            </div>
                            <div className="text-sm text-white/60">{item.label}</div>
                        </GlassCard>
                    ))}
                </div>

                {/* Featured reviews strip */}
                <div className="mt-12">
                    <GlassCard className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-6 px-8" padding="none">
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-white font-semibold">5.0</span>
                            <span className="text-white/60">
                                ({lang === 'ru' ? '2,500+ отзывов' : '2,500+ reviews'})
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-white/80">
                            <Zap className="w-5 h-5 text-yellow-400" />
                            <span>
                                {lang === 'ru' ? 'Экспресс за 4 часа' : 'Express in 4 hours'}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-white/80">
                            <Shield className="w-5 h-5 text-emerald-400" />
                            <span>
                                {lang === 'ru' ? 'Гарантия принятия' : 'Acceptance guaranteed'}
                            </span>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}

export default TrustBlocks;
