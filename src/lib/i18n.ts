export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'ua', 'de', 'fr', 'es'],
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
    ua: {
        // Hero
        heroSubtitle: 'Професійні перекладацькі послуги',
        instantQuote: 'Отримати розрахунок',
        uploadDocument: 'Завантажити документ',

        // Trust
        ordersCompleted: 'замовлень виконано',
        thisMonth: 'цього місяця',
        trustedBy: 'Нам довіряють',
        clients: 'клієнтів по всьому світу',
        rating: 'Середній рейтинг',
        delivery: 'Швидка доставка',
        hours: 'годин у середньому',

        // Services
        servicesTitle: 'Наші послуги',
        perPage: 'за сторінку',
        learnMore: 'Детальніше',

        // Calculator
        calculatorTitle: 'Калькулятор вартості',
        calculatorSubtitle: 'Завантажте документ або введіть текст для миттєвого розрахунку',
        wordCount: 'Кількість слів',
        pageCount: 'Кількість сторінок',
        estimatedCost: 'Орієнтовна вартість',
        selectService: 'Виберіть тип послуги',
        dragDrop: 'Перетягніть документ сюди',
        orBrowse: 'або натисніть для вибору',
        calculating: 'Розраховуємо...',
        getQuote: 'Отримати повний розрахунок',

        // FAQ
        faqTitle: 'Часті запитання',
        faqSubtitle: 'Все, що потрібно знати про наші перекладацькі послуги',

        // Actions
        call: 'Зателефонувати',
        whatsapp: 'WhatsApp',

        // Footer
        copyright: '© 2024 Translation Center. Всі права захищені.',
        privacy: 'Політика конфіденційності',
        terms: 'Умови використання',
        contact: 'Зв\'язатися з нами',

        // Offline
        offlineTitle: 'Ви офлайн',
        offlineMessage: 'Ваш розрахунок збережено. Ми повідомимо вас, коли ви знову будете онлайн.',

        // Meta
        metaDescription: 'Професійні послуги сертифікованого перекладу',
        metaKeywords: 'переклад, нотаріальний переклад, переклад документів, юридичний переклад',
    },
    de: {
        // Hero
        heroSubtitle: 'Professionelle Übersetzungsdienste',
        instantQuote: 'Sofort-Angebot erhalten',
        uploadDocument: 'Dokument hochladen',

        // Trust
        ordersCompleted: 'Bestellungen abgeschlossen',
        thisMonth: 'diesen Monat',
        trustedBy: 'Vertraut von',
        clients: 'Kunden weltweit',
        rating: 'Durchschnittliche Bewertung',
        delivery: 'Schnelle Lieferung',
        hours: 'Stunden im Durchschnitt',

        // Services
        servicesTitle: 'Unsere Dienstleistungen',
        perPage: 'pro Seite',
        learnMore: 'Mehr erfahren',

        // Calculator
        calculatorTitle: 'Sofort-Preisrechner',
        calculatorSubtitle: 'Laden Sie Ihr Dokument hoch oder geben Sie Text ein für eine sofortige Schätzung',
        wordCount: 'Wortanzahl',
        pageCount: 'Seitenzahl',
        estimatedCost: 'Geschätzte Kosten',
        selectService: 'Dienstleistungstyp wählen',
        dragDrop: 'Dokument hierher ziehen',
        orBrowse: 'oder zum Suchen klicken',
        calculating: 'Berechnung...',
        getQuote: 'Vollständiges Angebot',

        // FAQ
        faqTitle: 'Häufig gestellte Fragen',
        faqSubtitle: 'Alles, was Sie über unsere Übersetzungsdienste wissen müssen',

        // Actions
        call: 'Anrufen',
        whatsapp: 'WhatsApp',

        // Footer
        copyright: '© 2024 Translation Center. Alle Rechte vorbehalten.',
        privacy: 'Datenschutzrichtlinie',
        terms: 'Nutzungsbedingungen',
        contact: 'Kontaktieren Sie uns',

        // Offline
        offlineTitle: 'Sie sind offline',
        offlineMessage: 'Ihr Angebot ist gespeichert. Wir benachrichtigen Sie online.',

        // Meta
        metaDescription: 'Professionelle zertifizierte Übersetzungsdienste',
        metaKeywords: 'Übersetzung, beglaubigte Übersetzung, Dokumentenübersetzung, juristische Übersetzung',
    },
    fr: {
        // Hero
        heroSubtitle: 'Services de traduction professionnelle',
        instantQuote: 'Devis instantané',
        uploadDocument: 'Télécharger un document',

        // Trust
        ordersCompleted: 'commandes terminées',
        thisMonth: 'ce mois-ci',
        trustedBy: 'Approuvé par',
        clients: 'clients dans le monde',
        rating: 'Note moyenne',
        delivery: 'Livraison rapide',
        hours: 'heures en moyenne',

        // Services
        servicesTitle: 'Nos services',
        perPage: 'par page',
        learnMore: 'En savoir plus',

        // Calculator
        calculatorTitle: 'Calculateur de devis instantané',
        calculatorSubtitle: 'Téléchargez votre document pour obtenir une estimation immédiate',
        wordCount: 'Nombre de mots',
        pageCount: 'Nombre de pages',
        estimatedCost: 'Coût estimé',
        selectService: 'Choisir le type de service',
        dragDrop: 'Glissez votre document ici',
        orBrowse: 'ou cliquez pour parcourir',
        calculating: 'Calcul en cours...',
        getQuote: 'Obtenir un devis complet',

        // FAQ
        faqTitle: 'Foire aux questions',
        faqSubtitle: 'Tout ce que vous devez savoir sur nos services de traduction',

        // Actions
        call: 'Appeler',
        whatsapp: 'WhatsApp',

        // Footer
        copyright: '© 2024 Translation Center. Tous droits réservés.',
        privacy: 'Politique de confidentialité',
        terms: 'Conditions d\'utilisation',
        contact: 'Contactez-nous',

        // Offline
        offlineTitle: 'Vous êtes hors ligne',
        offlineMessage: 'Votre devis est enregistré. Nous vous préviendrons en ligne.',

        // Meta
        metaDescription: 'Services de traduction certifiée professionnelle',
        metaKeywords: 'traduction, traduction certifiée, traduction de documents, traduction juridique',
    },
    es: {
        // Hero
        heroSubtitle: 'Servicios de traducción profesional',
        instantQuote: 'Obtener presupuesto instantáneo',
        uploadDocument: 'Subir documento',

        // Trust
        ordersCompleted: 'pedidos completados',
        thisMonth: 'este mes',
        trustedBy: 'Confiado por',
        clients: 'clientes en todo el mundo',
        rating: 'Calificación promedio',
        delivery: 'Entrega rápida',
        hours: 'horas promedio',

        // Services
        servicesTitle: 'Nuestros servicios',
        perPage: 'por página',
        learnMore: 'Saber más',

        // Calculator
        calculatorTitle: 'Calculadora de presupuesto',
        calculatorSubtitle: 'Suba su documento para obtener una estimación inmediata',
        wordCount: 'Recuento de palabras',
        pageCount: 'Recuento de páginas',
        estimatedCost: 'Coste estimado',
        selectService: 'Seleccione tipo de servicio',
        dragDrop: 'Arrastre su documento aquí',
        orBrowse: 'o haga clic para buscar',
        calculating: 'Calculando...',
        getQuote: 'Obtener presupuesto completo',

        // FAQ
        faqTitle: 'Preguntas frecuentes',
        faqSubtitle: 'Todo lo que necesita saber sobre nuestros servicios de traducción',

        // Actions
        call: 'Llamar',
        whatsapp: 'WhatsApp',

        // Footer
        copyright: '© 2024 Translation Center. Todos los derechos reservados.',
        privacy: 'Política de privacidad',
        terms: 'Términos de servicio',
        contact: 'Contáctenos',

        // Offline
        offlineTitle: 'Estás desconectado',
        offlineMessage: 'Su presupuesto está guardado. Le avisaremos cuando vuelva.',

        // Meta
        metaDescription: 'Servicios profesionales de traducción certificada',
        metaKeywords: 'traducción, traducción certificada, traducción de documentos, traducción jurídica',
    },
} as const;

export function getTranslation(locale: Locale) {
    return translations[locale] || translations.en;
}

function getField<T>(item: any, prefix: string, locale: Locale): T {
    const localeSuffix = locale.charAt(0).toUpperCase() + locale.slice(1);
    const localizedKey = `${prefix}${localeSuffix}`;

    if (locale !== 'en' && item[localizedKey]) {
        return item[localizedKey];
    }
    return item[prefix];
}

export function getLocalizedField<T extends { name: string }>(
    item: T,
    locale: Locale
): string {
    return getField<string>(item, 'name', locale);
}

export function getLocalizedSlug<T extends { slug: string }>(
    item: T,
    locale: Locale
): string {
    return getField<string>(item, 'slug', locale);
}

export function getLocalizedContent<T extends { content: string }>(
    item: T,
    locale: Locale
): string {
    return getField<string>(item, 'content', locale);
}

export function getLocalizedDescription<T extends { description?: string | null }>(
    item: T,
    locale: Locale
): string | null {
    return getField<string | null>(item, 'description', locale);
}

export function getLocalizedLocationName<T extends { nameNom: string }>(
    location: T,
    locale: Locale
): string {
    return getField<string>(location, 'nameNom', locale);
}

export function getLocalizedLocationPrep<T extends { namePrep: string }>(
    location: T,
    locale: Locale
): string {
    return getField<string>(location, 'namePrep', locale);
}
