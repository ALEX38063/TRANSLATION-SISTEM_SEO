import { Metadata } from 'next';
import { Location, Service } from '@prisma/client';
import {
    Locale,
    i18n,
    getLocalizedField,
    getLocalizedSlug,
    getLocalizedLocationName,
    getLocalizedLocationPrep,
    getLocalizedDescription
} from './i18n';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://translation-center.com';
const SITE_NAME = 'Translation Center';

export interface PageSeoData {
    location: Location;
    service: Service;
    lang: Locale;
}

export function generateServiceCityMetadata({ location, service, lang }: PageSeoData): Metadata {
    const serviceName = getLocalizedField(service, lang);
    const cityName = getLocalizedLocationName(location, lang);
    const cityPrep = getLocalizedLocationPrep(location, lang);

    const titleTemplates: Record<Locale, string> = {
        en: `${serviceName} ${cityPrep} | ${SITE_NAME}`,
        ru: `${serviceName} ${cityPrep} | ${SITE_NAME}`,
        ua: `${serviceName} ${cityPrep} | ${SITE_NAME}`,
        de: `${serviceName} ${cityPrep} | ${SITE_NAME}`,
        fr: `${serviceName} ${cityPrep} | ${SITE_NAME}`,
        es: `${serviceName} ${cityPrep} | ${SITE_NAME}`,
    };

    const descTemplates: Record<Locale, string> = {
        en: `${serviceName} ${cityPrep}. Official document translation. Rated 5.0 in ${location.countryCode}. Fast delivery available.`,
        ru: `${serviceName} ${cityPrep}. Профессиональный перевод документов. Рейтинг 5.0 в ${location.countryCode}. Быстрая доставка.`,
        ua: `${serviceName} ${cityPrep}. Професійний переклад документів. Рейтинг 5.0 у ${location.countryCode}. Швидка доставка.`,
        de: `${serviceName} ${cityPrep}. Professionelle Dokumentenübersetzung. Bewertung 5.0 in ${location.countryCode}. Schnelle Lieferung möglich.`,
        fr: `${serviceName} ${cityPrep}. Traduction de documents professionnelle. Noté 5.0 en ${location.countryCode}. Livraison rapide disponible.`,
        es: `${serviceName} ${cityPrep}. Traducción de documentos profesional. Calificación 5.0 en ${location.countryCode}. Entrega rápida disponible.`,
    };

    const title = titleTemplates[lang] || titleTemplates.en;
    const metaDescription = descTemplates[lang] || descTemplates.en;

    // Generate alternate language URLs
    const alternates: Record<string, string> = {};
    for (const locale of i18n.locales) {
        const localizedSlug = getLocalizedSlug(service, locale);
        alternates[locale] = `${SITE_URL}/${locale}/${localizedSlug}-${location.slug}`;
    }

    const keywords: Record<Locale, string> = {
        en: `${serviceName}, translation ${cityPrep}, ${cityName} translation, certified translation`,
        ru: `${serviceName}, перевод ${cityPrep}, ${cityName} перевод, нотариальный перевод`,
        ua: `${serviceName}, переклад ${cityPrep}, ${cityName} переклад, нотаріальний переклад`,
        de: `${serviceName}, Übersetzung ${cityPrep}, ${cityName} Übersetzung, beglaubigte Übersetzung`,
        fr: `${serviceName}, traduction ${cityPrep}, ${cityName} traduction, traduction certifiée`,
        es: `${serviceName}, traducción ${cityPrep}, ${cityName} traducción, traducción certificada`,
    };

    return {
        title,
        description: metaDescription,
        keywords: keywords[lang] || keywords.en,
        openGraph: {
            title,
            description: metaDescription,
            url: alternates[lang],
            siteName: SITE_NAME,
            locale: lang === 'en' ? 'en_GB' : `${lang}_${location.countryCode}`,
            type: 'website',
            images: [
                {
                    url: `${SITE_URL}/og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: `${serviceName} ${cityPrep}`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: metaDescription,
        },
        alternates: {
            canonical: alternates[lang],
            languages: alternates,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export function generateHomeMetadata(lang: Locale): Metadata {
    const titleTemplates: Record<Locale, string> = {
        en: `Professional Document Translation Services | ${SITE_NAME}`,
        ru: `Профессиональный перевод документов | ${SITE_NAME}`,
        ua: `Професійний переклад документів | ${SITE_NAME}`,
        de: `Professionelle Dokumentenübersetzung | ${SITE_NAME}`,
        fr: `Services de traduction professionnelle | ${SITE_NAME}`,
        es: `Servicios de traducción profesional | ${SITE_NAME}`,
    };

    const descTemplates: Record<Locale, string> = {
        en: 'Certified document translation services. Legal, medical, and technical translation. Fast worldwide delivery.',
        ru: 'Сертифицированный перевод документов. Нотариальный, юридический, медицинский перевод. Быстрая доставка по всему миру.',
        ua: 'Сертифікований переклад документів. Нотаріальний, юридичний, медичний переклад. Швидка доставка по всьому світу.',
        de: 'Beglaubigte Dokumentenübersetzung. Juristische, medizinische und technische Übersetzung. Schnelle weltweite Lieferung.',
        fr: 'Services de traduction certifiée. Traduction juridique, médicale et technique. Livraison rapide dans le monde entier.',
        es: 'Servicios de traducción certificada. Traducción jurídica, médica y técnica. Entrega rápida en todo el mundo.',
    };

    const alternates: Record<string, string> = {};
    for (const locale of i18n.locales) {
        alternates[locale] = `${SITE_URL}/${locale}`;
    }

    return {
        title: titleTemplates[lang] || titleTemplates.en,
        description: descTemplates[lang] || descTemplates.en,
        openGraph: {
            title: titleTemplates[lang] || titleTemplates.en,
            description: descTemplates[lang] || descTemplates.en,
            url: `${SITE_URL}/${lang}`,
            siteName: SITE_NAME,
            locale: lang === 'en' ? 'en_GB' : `${lang}_${lang.toUpperCase()}`,
            type: 'website',
        },
        alternates: {
            canonical: `${SITE_URL}/${lang}`,
            languages: alternates,
        },
    };
}

export interface JsonLdData {
    location: Location;
    service: Service;
    lang: Locale;
}

export function generateLocalBusinessJsonLd({ location, service, lang }: JsonLdData) {
    const serviceName = getLocalizedField(service, lang);
    const cityName = getLocalizedLocationName(location, lang);
    const serviceSlug = getLocalizedSlug(service, lang);

    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/${lang}/${serviceSlug}-${location.slug}#localbusiness`,
        name: `${SITE_NAME} - ${cityName}`,
        description: getLocalizedDescription(service, lang) || `${serviceName} services in ${cityName}`,
        url: `${SITE_URL}/${lang}/${serviceSlug}-${location.slug}`,
        telephone: '+44-20-1234-5678',
        email: 'info@translation-center.com',
        priceRange: '££',
        image: `${SITE_URL}/logo.png`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: location.nameNom,
            addressCountry: location.countryCode,
        },
        geo: location.latitude && location.longitude ? {
            '@type': 'GeoCoordinates',
            latitude: location.latitude,
            longitude: location.longitude,
        } : undefined,
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: location.orderCount || 100,
            bestRating: '5',
            worstRating: '1',
        },
        areaServed: {
            '@type': 'City',
            name: location.nameNom,
        },
    };
}

export function generateServiceJsonLd({ location, service, lang }: JsonLdData) {
    const serviceName = getLocalizedField(service, lang);
    const cityName = getLocalizedLocationName(location, lang);
    const serviceSlug = getLocalizedSlug(service, lang);

    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE_URL}/${lang}/${serviceSlug}-${location.slug}#service`,
        name: serviceName,
        description: getLocalizedDescription(service, lang) || `${serviceName} in ${cityName}`,
        provider: {
            '@type': 'LocalBusiness',
            '@id': `${SITE_URL}/${lang}/${serviceSlug}-${location.slug}#localbusiness`,
            name: SITE_NAME,
        },
        areaServed: {
            '@type': 'City',
            name: location.nameNom,
        },
        serviceType: serviceName,
        offers: {
            '@type': 'Offer',
            price: Number(service.pricePerPage),
            priceCurrency: 'GBP',
            priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: Number(service.pricePerPage),
                priceCurrency: 'GBP',
                unitText: 'page',
            },
        },
    };
}

export function generateBreadcrumbJsonLd({ location, service, lang }: JsonLdData) {
    const serviceName = getLocalizedField(service, lang);
    const cityName = getLocalizedLocationName(location, lang);
    const serviceSlug = getLocalizedSlug(service, lang);

    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: lang === 'ru' ? 'Главная' : 'Home',
                item: `${SITE_URL}/${lang}`,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: serviceName,
                item: `${SITE_URL}/${lang}/${service.slug}`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: `${serviceName} ${cityName}`,
                item: `${SITE_URL}/${lang}/${serviceSlug}-${location.slug}`,
            },
        ],
    };
}

export function generateFaqJsonLd(faqs: Array<{ question: string; answer: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

export function generateOrganizationJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        sameAs: [
            'https://www.facebook.com/translationcenter',
            'https://twitter.com/translationcenter',
            'https://www.linkedin.com/company/translationcenter',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+44-20-1234-5678',
            contactType: 'customer service',
            availableLanguage: ['English', 'Russian'],
        },
    };
}
