export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import prisma from '@/lib/db';
import { Hero, TrustBlocks, OcrCalculator, FaqBlock, JsonLd } from '@/components';
import { Locale, i18n, getLocalizedSlug } from '@/lib/i18n';
import { parseServiceCitySlug } from '@/lib/utils';
import {
    generateServiceCityMetadata,
    generateLocalBusinessJsonLd,
    generateServiceJsonLd,
    generateBreadcrumbJsonLd,
    generateFaqJsonLd,
} from '@/lib/seo';

interface ServiceCityPageProps {
    params: Promise<{ lang: string; serviceCity: string }>;
}

// Generate all static paths for city-service combinations
export async function generateStaticParams() {
    const [locations, services] = await Promise.all([
        prisma.location.findMany({ where: { isActive: true }, select: { slug: true } }),
        prisma.service.findMany({ where: { isActive: true }, select: { slug: true, slugRu: true } }),
    ]);

    const paths: Array<{ lang: string; serviceCity: string }> = [];

    for (const lang of i18n.locales) {
        for (const service of services) {
            for (const location of locations) {
                const serviceSlug = lang === 'ru' && service.slugRu ? service.slugRu : service.slug;
                paths.push({
                    lang,
                    serviceCity: `${serviceSlug}-${location.slug}`,
                });
            }
        }
    }

    return paths;
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: ServiceCityPageProps): Promise<Metadata> {
    const { lang, serviceCity } = await params;
    const locale = lang as Locale;

    const parsed = parseServiceCitySlug(serviceCity);
    if (!parsed) return {};

    const { serviceSlug, citySlug } = parsed;

    const [location, service] = await Promise.all([
        prisma.location.findUnique({ where: { slug: citySlug } }),
        prisma.service.findFirst({
            where: {
                OR: [
                    { slug: serviceSlug },
                    { slugRu: serviceSlug },
                ],
            },
        }),
    ]);

    if (!location || !service) return {};

    return generateServiceCityMetadata({ location, service, lang: locale });
}

export default async function ServiceCityPage({ params }: ServiceCityPageProps) {
    const { lang, serviceCity } = await params;
    const locale = lang as Locale;

    // Validate language
    if (!i18n.locales.includes(locale)) {
        notFound();
    }

    // Parse the combined slug
    const parsed = parseServiceCitySlug(serviceCity);
    if (!parsed) {
        notFound();
    }

    const { serviceSlug, citySlug } = parsed;

    // Fetch data from database
    const [location, service, faqs] = await Promise.all([
        prisma.location.findUnique({
            where: { slug: citySlug },
        }),
        prisma.service.findFirst({
            where: {
                OR: [
                    { slug: serviceSlug },
                    { slugRu: serviceSlug },
                ],
            },
        }),
        prisma.faq.findMany({
            where: { isActive: true },
            orderBy: { sortOrder: 'asc' },
        }),
    ]);

    // 404 if not found
    if (!location || !service) {
        notFound();
    }

    // Generate JSON-LD structured data
    const jsonLdData = [
        generateLocalBusinessJsonLd({ location, service, lang: locale }),
        generateServiceJsonLd({ location, service, lang: locale }),
        generateBreadcrumbJsonLd({ location, service, lang: locale }),
        generateFaqJsonLd(
            faqs.map((faq) => ({
                question: locale === 'ru' && faq.questionRu ? faq.questionRu : faq.question,
                answer: locale === 'ru' && faq.answerRu ? faq.answerRu : faq.answer,
            }))
        ),
    ];

    return (
        <>
            {/* Structured Data */}
            <JsonLd data={jsonLdData} />

            {/* Hero Section */}
            <Hero location={location} service={service} lang={locale} />

            {/* Trust Indicators */}
            <TrustBlocks location={location} lang={locale} />

            {/* OCR Calculator */}
            <OcrCalculator location={location} service={service} lang={locale} />

            {/* FAQ Section */}
            <FaqBlock faqs={faqs} location={location} lang={locale} />
        </>
    );
}
