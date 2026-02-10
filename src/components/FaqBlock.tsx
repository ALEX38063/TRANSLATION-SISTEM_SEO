'use client';

import { useState } from 'react';
import { Faq } from '@prisma/client';
import { Location } from '@prisma/client';
import { GlassCard } from '@/components/ui';
import { Locale, getLocalizedLocationPrep } from '@/lib/i18n';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqBlockProps {
    faqs: Faq[];
    location: Location;
    lang: Locale;
}

export function FaqBlock({ faqs, location, lang }: FaqBlockProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const cityPrep = getLocalizedLocationPrep(location, lang);

    const getLocalizedQuestion = (faq: Faq): string => {
        if (lang === 'ru' && faq.questionRu) return faq.questionRu;
        // Replace placeholder with city name
        return faq.question.replace('{namePrep}', cityPrep);
    };

    const getLocalizedAnswer = (faq: Faq): string => {
        if (lang === 'ru' && faq.answerRu) return faq.answerRu;
        return faq.answer.replace('{namePrep}', cityPrep);
    };

    // Add dynamic location-specific FAQ
    const dynamicFaqs = [
        {
            id: 'local-1',
            question: lang === 'ru'
                ? `Где заверить документы ${cityPrep}?`
                : `Where to certify documents ${cityPrep}?`,
            questionRu: `Где заверить документы ${cityPrep}?`,
            answer: lang === 'ru'
                ? `Наши переводы принимаются ${location.localAuthority} и всеми государственными органами ${cityPrep}. Мы предлагаем услугу доставки заверенных документов напрямую в нужные вам учреждения.`
                : `Our translations are accepted by ${location.localAuthority} and all government agencies ${cityPrep}. We offer delivery of certified documents directly to your required institutions.`,
            answerRu: `Наши переводы принимаются ${location.localAuthority} и всеми государственными органами ${cityPrep}.`,
            category: 'local',
            sortOrder: 0,
            isActive: true,
            createdAt: new Date(),
        },
        ...faqs,
    ];

    return (
        <section className="section" id="faq">
            <div className="container">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4 text-white/60">
                        <HelpCircle className="w-5 h-5" />
                        <span className="text-sm font-medium uppercase tracking-wider">FAQ</span>
                    </div>
                    <h2 className="section-title">
                        {lang === 'ru' ? 'Часто задаваемые вопросы' : 'Frequently Asked Questions'}
                    </h2>
                    <p className="section-subtitle mx-auto">
                        {lang === 'ru'
                            ? 'Всё, что нужно знать о наших переводческих услугах'
                            : 'Everything you need to know about our translation services'}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <GlassCard padding="none">
                        {dynamicFaqs.map((faq, index) => (
                            <div key={faq.id} className="faq-item">
                                <button
                                    className="faq-question"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="pr-4">{getLocalizedQuestion(faq as Faq)}</span>
                                    <ChevronDown
                                        className={cn(
                                            'w-5 h-5 text-white/60 transition-transform flex-shrink-0',
                                            openIndex === index && 'rotate-180'
                                        )}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="faq-answer animate-fade-in-up">
                                        {getLocalizedAnswer(faq as Faq)}
                                    </div>
                                )}
                            </div>
                        ))}
                    </GlassCard>
                </div>

                {/* Additional local info */}
                <div className="mt-12 text-center">
                    <p className="text-white/60">
                        {lang === 'ru'
                            ? `Остались вопросы о переводе документов ${cityPrep}?`
                            : `Still have questions about document translation ${cityPrep}?`}
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 mt-2 text-[var(--color-primary)] hover:underline"
                    >
                        {lang === 'ru' ? 'Свяжитесь с нами' : 'Contact us'}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FaqBlock;
