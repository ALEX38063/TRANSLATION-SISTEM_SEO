import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// ПЕРЕДАЕМ ПЕРЕМЕННЫЕ ВНУТРЬ СКОБОК
const supabase = createClient(supabaseUrl!, supabaseKey!);



// Далее ваш код с данными (locations и т.д.)
// ================= ДАННЫЕ =================

const locations = [
    {
        slug: 'london',
        nameNom: 'London',
        namePrep: 'in London',
        nameNomRu: 'Лондон',
        namePrepRu: 'в Лондоне',
        nameNomUa: 'Лондон',
        namePrepUa: 'у Лондоні',
        nameNomDe: 'London',
        namePrepDe: 'in London',
        nameNomFr: 'Londres',
        namePrepFr: 'à Londres',
        nameNomEs: 'Londres',
        namePrepEs: 'en Londres',
        countryCode: 'GB',
        localAuthority: 'City of London Corporation',
        deliveryHours: '24 hours',
        population: 8982000,
        orderCount: 523,
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        slug: 'berlin',
        nameNom: 'Berlin',
        namePrep: 'in Berlin',
        nameNomRu: 'Берлин',
        namePrepRu: 'в Берлине',
        nameNomUa: 'Берлін',
        namePrepUa: 'у Берліні',
        nameNomDe: 'Berlin',
        namePrepDe: 'in Berlin',
        nameNomFr: 'Berlin',
        namePrepFr: 'à Berlin',
        nameNomEs: 'Berlín',
        namePrepEs: 'en Berlín',
        countryCode: 'DE',
        localAuthority: 'Senatsverwaltung',
        deliveryHours: '24 hours',
        population: 3748148,
        orderCount: 412,
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
]

const services = [
    {
        slug: 'certified-translation',
        slugRu: 'notarialnyi-perevod',
        slugUa: 'notarialnyi-pereklad',
        slugDe: 'beglaubigte-ubersetzung',
        slugFr: 'traduction-certifiee',
        slugEs: 'traduccion-certificada',
        name: 'Certified Translation',
        nameRu: 'Нотариальный перевод',
        nameUa: 'Нотаріальний переклад',
        nameDe: 'Beglaubigte Übersetzung',
        nameFr: 'Traduction Certifiée',
        nameEs: 'Traducción Certificada',
        category: 'legal',
        pricePerPage: 35,
        description: 'Official certified translations.',
        descriptionRu: 'Официальные переводы.',
        descriptionUa: 'Офіційні переклади.',
        descriptionDe: 'Amtliche Übersetzungen.',
        descriptionFr: 'Traductions officielles.',
        descriptionEs: 'Traducciones oficiales.',
        icon: 'FileCheck',
        isActive: true,
        createdAt: new Date().toISOString(),
        // updatedAt not in schema for Service in some versions, but added to avoid issues
    }
]

const reviews = [
    {
        rating: 5,
        content: 'Excellent service!',
        contentRu: 'Отличный сервис!',
        contentUa: 'Відмінний сервіс!',
        contentDe: 'Exzellenter Service!',
        contentFr: 'Excellent service !',
        contentEs: '¡Excelente servicio!',
        authorName: 'James Wilson',
        authorCity: 'London',
        language: 'en',
        isVerified: true,
        isFeatured: true,
        createdAt: new Date().toISOString()
    }
]

const faqs = [
    {
        question: 'How long does translation take?',
        questionRu: 'Сколько времени занимает перевод?',
        questionUa: 'Скільки часу займає переклад?',
        questionDe: 'Wie lange dauert die Übersetzung?',
        questionFr: 'Combien de temps prend la traduction ?',
        questionEs: '¿Cuánto tiempo toma la traducción?',
        answer: '24–48 hours normally.',
        answerRu: 'Обычно 24–48 часов.',
        answerUa: 'Зазвичай 24–48 годин.',
        answerDe: 'Normalerweise 24–48 Stunden.',
        answerFr: '24–48 heures normalement.',
        answerEs: '24–48 horas normalmente.',
        category: 'general',
        sortOrder: 1,
        isActive: true,
        createdAt: new Date().toISOString()
    }
]

// ================= ЗАГРУЗКА =================

async function seed() {
    try {
        console.log('🧹 Очистка таблиц...')
        // Удаляем записи. .neq('id', '_') — хак, чтобы удалить всё в текстовых ID
        await supabase.from('Review').delete().neq('id', '_')
        await supabase.from('Faq').delete().neq('id', '_')
        await supabase.from('Service').delete().neq('id', '_')
        await supabase.from('Location').delete().neq('id', '_')

        console.log('📍 Добавление Location...')
        const { data: locData, error: locError } = await supabase
            .from('Location')
            .insert(locations)
            .select()
        if (locError) throw locError

        console.log('🛠 Добавление Service...')
        const { data: srvData, error: srvError } = await supabase
            .from('Service')
            .insert(services)
            .select()
        if (srvError) throw srvError

        console.log('⭐ Добавление Review...')
        for (const review of reviews) {
            const randomLocation = locData[Math.floor(Math.random() * locData.length)]
            const randomService = srvData[Math.floor(Math.random() * srvData.length)]

            const { error } = await supabase.from('Review').insert({
                ...review,
                locationId: randomLocation.id, // Маппинг на locationId из схемы
                serviceId: randomService.id    // Маппинг на serviceId из схемы
            })
            if (error) throw error
        }

        console.log('❓ Добавление Faq...')
        const { error: faqError } = await supabase.from('Faq').insert(faqs)
        if (faqError) throw faqError

        console.log('🎉 ДАННЫЕ УСПЕШНО ОБНОВЛЕНЫ')

    } catch (err) {
        console.error('❌ ОШИБКА:', err)
    }
}

seed()