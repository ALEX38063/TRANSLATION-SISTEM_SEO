export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const translations = {
    en: {
        // Hero
        heroSubtitle: 'Professional Translation Services',
        instantQuote: 'Get Instant Quote',
        uploadDocument: 'Upload Document',

        // Trust
        ordersCompleted: 'orders completed',
        thisMonth: 'this month',
        trustedBy: 'Trusted by',
        clients: 'clients worldwide',
        rating: 'Average rating',
        delivery: 'Fast delivery',
        hours: 'hours average',

        // Services
        servicesTitle: 'Our Services',
        perPage: 'per page',
        learnMore: 'Learn More',

        // Calculator
        calculatorTitle: 'Instant Quote Calculator',
        calculatorSubtitle: 'Upload your document or enter text to get an instant price estimate',
        wordCount: 'Word count',
        pageCount: 'Page count',
        estimatedCost: 'Estimated cost',
        selectService: 'Select service type',
        dragDrop: 'Drag and drop your document here',
        orBrowse: 'or click to browse',
        calculating: 'Calculating...',
        getQuote: 'Get Full Quote',

        // FAQ
        faqTitle: 'Frequently Asked Questions',
        faqSubtitle: 'Everything you need to know about our translation services',

        // Actions
        call: 'Call',
        whatsapp: 'WhatsApp',

        // Footer
        copyright: '© 2024 Translation Center. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact Us',

        // Offline
        offlineTitle: 'You are offline',
        offlineMessage: 'Your quote is saved. We\'ll notify you when you\'re back online.',

        // Meta
        metaDescription: 'Professional certified translation services',
        metaKeywords: 'translation, certified translation, document translation, legal translation',
    },
    ru: {
        // Hero
        heroSubtitle: 'Профессиональные переводческие услуги',
        instantQuote: 'Получить расчёт',
        uploadDocument: 'Загрузить документ',

        // Trust
        ordersCompleted: 'заказов выполнено',
        thisMonth: 'в этом месяце',
        trustedBy: 'Нам доверяют',
        clients: 'клиентов по всему миру',
        rating: 'Средний рейтинг',
        delivery: 'Быстрая доставка',
        hours: 'часов в среднем',

        // Services
        servicesTitle: 'Наши услуги',
        perPage: 'за страницу',
        learnMore: 'Подробнее',

        // Calculator
        calculatorTitle: 'Калькулятор стоимости',
        calculatorSubtitle: 'Загрузите документ или введите текст для мгновенного расчёта',
        wordCount: 'Количество слов',
        pageCount: 'Количество страниц',
        estimatedCost: 'Ориентировочная стоимость',
        selectService: 'Выберите тип услуги',
        dragDrop: 'Перетащите документ сюда',
        orBrowse: 'или нажмите для выбора',
        calculating: 'Рассчитываем...',
        getQuote: 'Получить полный расчёт',

        // FAQ
        faqTitle: 'Часто задаваемые вопросы',
        faqSubtitle: 'Всё, что нужно знать о наших переводческих услугах',

        // Actions
        call: 'Позвонить',
        whatsapp: 'WhatsApp',

        // Footer
        copyright: '© 2024 Translation Center. Все права защищены.',
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
        contact: 'Связаться с нами',

        // Offline
        offlineTitle: 'Вы офлайн',
        offlineMessage: 'Ваш расчёт сохранён. Мы уведомим вас, когда вы снова будете онлайн.',

        // Meta
        metaDescription: 'Профессиональные услуги сертифицированного перевода',
        metaKeywords: 'перевод, нотариальный перевод, перевод документов, юридический перевод',
    },
} as const;

export function getTranslation(locale: Locale) {
    return translations[locale] || translations.en;
}

export function getLocalizedField<T extends { nameRu?: string | null; name: string }>(
    item: T,
    locale: Locale
): string {
    if (locale === 'ru' && item.nameRu) {
        return item.nameRu;
    }
    return item.name;
}

export function getLocalizedSlug<T extends { slugRu?: string | null; slug: string }>(
    item: T,
    locale: Locale
): string {
    if (locale === 'ru' && item.slugRu) {
        return item.slugRu;
    }
    return item.slug;
}

export function getLocalizedContent<T extends { contentRu?: string | null; content: string }>(
    item: T,
    locale: Locale
): string {
    if (locale === 'ru' && item.contentRu) {
        return item.contentRu;
    }
    return item.content;
}

export function getLocalizedDescription<T extends { descriptionRu?: string | null; description?: string | null }>(
    item: T,
    locale: Locale
): string | null {
    if (locale === 'ru' && item.descriptionRu) {
        return item.descriptionRu;
    }
    return item.description || null;
}

export function getLocalizedLocationName<T extends { nameNomRu?: string | null; nameNom: string }>(
    location: T,
    locale: Locale
): string {
    if (locale === 'ru' && location.nameNomRu) {
        return location.nameNomRu;
    }
    return location.nameNom;
}

export function getLocalizedLocationPrep<T extends { namePrepRu?: string | null; namePrep: string }>(
    location: T,
    locale: Locale
): string {
    if (locale === 'ru' && location.namePrepRu) {
        return location.namePrepRu;
    }
    return location.namePrep;
}
