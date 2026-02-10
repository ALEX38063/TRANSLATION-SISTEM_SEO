import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const locations: Prisma.LocationCreateInput[] = [
  // United Kingdom
  { slug: 'london', nameNom: 'London', namePrep: 'in London', nameNomRu: 'Лондон', namePrepRu: 'в Лондоне', countryCode: 'GB', localAuthority: 'City of London Corporation', deliveryHours: '24 hours', population: 8982000, orderCount: 523 },
  { slug: 'manchester', nameNom: 'Manchester', namePrep: 'in Manchester', nameNomRu: 'Манчестер', namePrepRu: 'в Манчестере', countryCode: 'GB', localAuthority: 'Manchester City Council', deliveryHours: '24-48 hours', population: 547627, orderCount: 187 },
  { slug: 'birmingham', nameNom: 'Birmingham', namePrep: 'in Birmingham', nameNomRu: 'Бирмингем', namePrepRu: 'в Бирмингеме', countryCode: 'GB', localAuthority: 'Birmingham City Council', deliveryHours: '24-48 hours', population: 1141816, orderCount: 234 },
  { slug: 'leeds', nameNom: 'Leeds', namePrep: 'in Leeds', nameNomRu: 'Лидс', namePrepRu: 'в Лидсе', countryCode: 'GB', localAuthority: 'Leeds City Council', deliveryHours: '48 hours', population: 793139, orderCount: 156 },
  { slug: 'glasgow', nameNom: 'Glasgow', namePrep: 'in Glasgow', nameNomRu: 'Глазго', namePrepRu: 'в Глазго', countryCode: 'GB', localAuthority: 'Glasgow City Council', deliveryHours: '48 hours', population: 635640, orderCount: 143 },
  { slug: 'edinburgh', nameNom: 'Edinburgh', namePrep: 'in Edinburgh', nameNomRu: 'Эдинбург', namePrepRu: 'в Эдинбурге', countryCode: 'GB', localAuthority: 'City of Edinburgh Council', deliveryHours: '48 hours', population: 524930, orderCount: 178 },
  { slug: 'liverpool', nameNom: 'Liverpool', namePrep: 'in Liverpool', nameNomRu: 'Ливерпуль', namePrepRu: 'в Ливерпуле', countryCode: 'GB', localAuthority: 'Liverpool City Council', deliveryHours: '48 hours', population: 498042, orderCount: 121 },
  { slug: 'bristol', nameNom: 'Bristol', namePrep: 'in Bristol', nameNomRu: 'Бристоль', namePrepRu: 'в Бристоле', countryCode: 'GB', localAuthority: 'Bristol City Council', deliveryHours: '48 hours', population: 463377, orderCount: 134 },

  // Germany
  { slug: 'berlin', nameNom: 'Berlin', namePrep: 'in Berlin', nameNomRu: 'Берлин', namePrepRu: 'в Берлине', countryCode: 'DE', localAuthority: 'Senatsverwaltung', deliveryHours: '24 hours', population: 3748148, orderCount: 412 },
  { slug: 'munich', nameNom: 'Munich', namePrep: 'in Munich', nameNomRu: 'Мюнхен', namePrepRu: 'в Мюнхене', countryCode: 'DE', localAuthority: 'Landeshauptstadt München', deliveryHours: '24-48 hours', population: 1488202, orderCount: 289 },
  { slug: 'hamburg', nameNom: 'Hamburg', namePrep: 'in Hamburg', nameNomRu: 'Гамбург', namePrepRu: 'в Гамбурге', countryCode: 'DE', localAuthority: 'Freie und Hansestadt Hamburg', deliveryHours: '24-48 hours', population: 1899160, orderCount: 198 },
  { slug: 'frankfurt', nameNom: 'Frankfurt', namePrep: 'in Frankfurt', nameNomRu: 'Франкфурт', namePrepRu: 'во Франкфурте', countryCode: 'DE', localAuthority: 'Stadt Frankfurt am Main', deliveryHours: '24-48 hours', population: 753056, orderCount: 267 },

  // France
  { slug: 'paris', nameNom: 'Paris', namePrep: 'in Paris', nameNomRu: 'Париж', namePrepRu: 'в Париже', countryCode: 'FR', localAuthority: 'Mairie de Paris', deliveryHours: '24 hours', population: 2161000, orderCount: 478 },
  { slug: 'lyon', nameNom: 'Lyon', namePrep: 'in Lyon', nameNomRu: 'Лион', namePrepRu: 'в Лионе', countryCode: 'FR', localAuthority: 'Métropole de Lyon', deliveryHours: '24-48 hours', population: 522250, orderCount: 145 },
  { slug: 'marseille', nameNom: 'Marseille', namePrep: 'in Marseille', nameNomRu: 'Марсель', namePrepRu: 'в Марселе', countryCode: 'FR', localAuthority: 'Ville de Marseille', deliveryHours: '48 hours', population: 870731, orderCount: 132 },

  // Netherlands
  { slug: 'amsterdam', nameNom: 'Amsterdam', namePrep: 'in Amsterdam', nameNomRu: 'Амстердам', namePrepRu: 'в Амстердаме', countryCode: 'NL', localAuthority: 'Gemeente Amsterdam', deliveryHours: '24 hours', population: 872680, orderCount: 234 },
  { slug: 'rotterdam', nameNom: 'Rotterdam', namePrep: 'in Rotterdam', nameNomRu: 'Роттердам', namePrepRu: 'в Роттердаме', countryCode: 'NL', localAuthority: 'Gemeente Rotterdam', deliveryHours: '24-48 hours', population: 651446, orderCount: 156 },

  // Spain
  { slug: 'madrid', nameNom: 'Madrid', namePrep: 'in Madrid', nameNomRu: 'Мадрид', namePrepRu: 'в Мадриде', countryCode: 'ES', localAuthority: 'Ayuntamiento de Madrid', deliveryHours: '24 hours', population: 3223334, orderCount: 312 },
  { slug: 'barcelona', nameNom: 'Barcelona', namePrep: 'in Barcelona', nameNomRu: 'Барселона', namePrepRu: 'в Барселоне', countryCode: 'ES', localAuthority: 'Ajuntament de Barcelona', deliveryHours: '24 hours', population: 1620343, orderCount: 287 },

  // Italy
  { slug: 'rome', nameNom: 'Rome', namePrep: 'in Rome', nameNomRu: 'Рим', namePrepRu: 'в Риме', countryCode: 'IT', localAuthority: 'Roma Capitale', deliveryHours: '24-48 hours', population: 2873000, orderCount: 245 },
  { slug: 'milan', nameNom: 'Milan', namePrep: 'in Milan', nameNomRu: 'Милан', namePrepRu: 'в Милане', countryCode: 'IT', localAuthority: 'Comune di Milano', deliveryHours: '24 hours', population: 1396059, orderCount: 298 },

  // Poland
  { slug: 'warsaw', nameNom: 'Warsaw', namePrep: 'in Warsaw', nameNomRu: 'Варшава', namePrepRu: 'в Варшаве', countryCode: 'PL', localAuthority: 'Urząd m.st. Warszawy', deliveryHours: '24-48 hours', population: 1793579, orderCount: 189 },
  { slug: 'krakow', nameNom: 'Krakow', namePrep: 'in Krakow', nameNomRu: 'Краков', namePrepRu: 'в Кракове', countryCode: 'PL', localAuthority: 'Urząd Miasta Krakowa', deliveryHours: '48 hours', population: 779115, orderCount: 134 },

  // Austria
  { slug: 'vienna', nameNom: 'Vienna', namePrep: 'in Vienna', nameNomRu: 'Вена', namePrepRu: 'в Вене', countryCode: 'AT', localAuthority: 'Stadt Wien', deliveryHours: '24 hours', population: 1911191, orderCount: 267 },

  // Switzerland  
  { slug: 'zurich', nameNom: 'Zurich', namePrep: 'in Zurich', nameNomRu: 'Цюрих', namePrepRu: 'в Цюрихе', countryCode: 'CH', localAuthority: 'Stadt Zürich', deliveryHours: '24 hours', population: 421878, orderCount: 234 },
  { slug: 'geneva', nameNom: 'Geneva', namePrep: 'in Geneva', nameNomRu: 'Женева', namePrepRu: 'в Женеве', countryCode: 'CH', localAuthority: 'Ville de Genève', deliveryHours: '24 hours', population: 203951, orderCount: 189 },

  // Belgium
  { slug: 'brussels', nameNom: 'Brussels', namePrep: 'in Brussels', nameNomRu: 'Брюссель', namePrepRu: 'в Брюсселе', countryCode: 'BE', localAuthority: 'Ville de Bruxelles', deliveryHours: '24 hours', population: 185103, orderCount: 178 },

  // Portugal
  { slug: 'lisbon', nameNom: 'Lisbon', namePrep: 'in Lisbon', nameNomRu: 'Лиссабон', namePrepRu: 'в Лиссабоне', countryCode: 'PT', localAuthority: 'Câmara Municipal de Lisboa', deliveryHours: '24-48 hours', population: 544851, orderCount: 145 },

  // Ireland
  { slug: 'dublin', nameNom: 'Dublin', namePrep: 'in Dublin', nameNomRu: 'Дублин', namePrepRu: 'в Дублине', countryCode: 'IE', localAuthority: 'Dublin City Council', deliveryHours: '24 hours', population: 1173179, orderCount: 198 },

  // Czech Republic
  { slug: 'prague', nameNom: 'Prague', namePrep: 'in Prague', nameNomRu: 'Прага', namePrepRu: 'в Праге', countryCode: 'CZ', localAuthority: 'Magistrát hlavního města Prahy', deliveryHours: '24-48 hours', population: 1335084, orderCount: 167 },
];

const services: Prisma.ServiceCreateInput[] = [
  {
    slug: 'certified-translation',
    slugRu: 'notarialnyi-perevod',
    name: 'Certified Translation',
    nameRu: 'Нотариальный перевод',
    category: 'legal',
    pricePerPage: 35.00,
    description: 'Official certified translations accepted by government agencies, courts, and institutions worldwide.',
    descriptionRu: 'Официальные заверенные переводы, принимаемые государственными органами, судами и учреждениями по всему миру.',
    icon: 'FileCheck'
  },
  {
    slug: 'document-translation',
    slugRu: 'perevod-dokumentov',
    name: 'Document Translation',
    nameRu: 'Перевод документов',
    category: 'document',
    pricePerPage: 25.00,
    description: 'Professional translation of business documents, contracts, and correspondence.',
    descriptionRu: 'Профессиональный перевод деловых документов, контрактов и корреспонденции.',
    icon: 'FileText'
  },
  {
    slug: 'legal-translation',
    slugRu: 'yuridicheskiy-perevod',
    name: 'Legal Translation',
    nameRu: 'Юридический перевод',
    category: 'legal',
    pricePerPage: 45.00,
    description: 'Expert translation of legal documents by certified legal translators.',
    descriptionRu: 'Экспертный перевод юридических документов сертифицированными переводчиками.',
    icon: 'Scale'
  },
  {
    slug: 'medical-translation',
    slugRu: 'meditsinskiy-perevod',
    name: 'Medical Translation',
    nameRu: 'Медицинский перевод',
    category: 'medical',
    pricePerPage: 40.00,
    description: 'Accurate translation of medical records, reports, and clinical documents.',
    descriptionRu: 'Точный перевод медицинских записей, отчётов и клинических документов.',
    icon: 'Stethoscope'
  },
  {
    slug: 'technical-translation',
    slugRu: 'tekhnicheskiy-perevod',
    name: 'Technical Translation',
    nameRu: 'Технический перевод',
    category: 'technical',
    pricePerPage: 35.00,
    description: 'Specialized translation of technical manuals, specifications, and engineering documents.',
    descriptionRu: 'Специализированный перевод технических руководств, спецификаций и инженерных документов.',
    icon: 'Cog'
  },
  {
    slug: 'website-translation',
    slugRu: 'perevod-saytov',
    name: 'Website Translation',
    nameRu: 'Перевод сайтов',
    category: 'digital',
    pricePerPage: 30.00,
    description: 'Complete website localization and translation services.',
    descriptionRu: 'Полная локализация и перевод веб-сайтов.',
    icon: 'Globe'
  },
  {
    slug: 'apostille-services',
    slugRu: 'apostil-uslugi',
    name: 'Apostille Services',
    nameRu: 'Услуги апостиля',
    category: 'legal',
    pricePerPage: 75.00,
    description: 'Document legalization and apostille services for international use.',
    descriptionRu: 'Легализация документов и услуги апостиля для международного использования.',
    icon: 'Stamp'
  },
  {
    slug: 'birth-certificate-translation',
    slugRu: 'perevod-svidetelstva-o-rozhdenii',
    name: 'Birth Certificate Translation',
    nameRu: 'Перевод свидетельства о рождении',
    category: 'document',
    pricePerPage: 30.00,
    description: 'Certified translation of birth certificates for immigration and legal purposes.',
    descriptionRu: 'Заверенный перевод свидетельств о рождении для иммиграционных и юридических целей.',
    icon: 'Baby'
  },
  {
    slug: 'marriage-certificate-translation',
    slugRu: 'perevod-svidetelstva-o-brake',
    name: 'Marriage Certificate Translation',
    nameRu: 'Перевод свидетельства о браке',
    category: 'document',
    pricePerPage: 30.00,
    description: 'Official translation of marriage certificates with certification.',
    descriptionRu: 'Официальный перевод свидетельств о браке с сертификацией.',
    icon: 'Heart'
  },
  {
    slug: 'diploma-translation',
    slugRu: 'perevod-diploma',
    name: 'Diploma Translation',
    nameRu: 'Перевод диплома',
    category: 'education',
    pricePerPage: 35.00,
    description: 'Certified translation of academic diplomas, transcripts, and certificates.',
    descriptionRu: 'Заверенный перевод дипломов, транскриптов и академических сертификатов.',
    icon: 'GraduationCap'
  },
];

const reviews: Prisma.ReviewCreateInput[] = [
  { rating: 5, content: 'Excellent service! Got my certified translation within 24 hours. Very professional.', contentRu: 'Отличный сервис! Получил заверенный перевод в течение 24 часов. Очень профессионально.', authorName: 'James Wilson', authorCity: 'London', isVerified: true, isFeatured: true },
  { rating: 5, content: 'Fast, reliable, and affordable. Highly recommend for legal documents.', contentRu: 'Быстро, надёжно и доступно. Очень рекомендую для юридических документов.', authorName: 'Maria Schmidt', authorCity: 'Berlin', isVerified: true, isFeatured: true },
  { rating: 5, content: 'The best translation service I have used. Perfect quality every time.', contentRu: 'Лучший переводческий сервис, которым я пользовался. Идеальное качество каждый раз.', authorName: 'Pierre Dupont', authorCity: 'Paris', isVerified: true, isFeatured: true },
  { rating: 5, content: 'Outstanding customer service and incredibly fast turnaround.', contentRu: 'Выдающееся обслуживание клиентов и невероятно быстрое выполнение.', authorName: 'Anna Kowalski', authorCity: 'Warsaw', isVerified: true, isFeatured: false },
  { rating: 4, content: 'Great service for document translation. Will use again.', contentRu: 'Отличный сервис для перевода документов. Буду пользоваться снова.', authorName: 'Marco Rossi', authorCity: 'Milan', isVerified: true, isFeatured: false },
  { rating: 5, content: 'Certified translation was accepted immediately by the embassy. Thank you!', contentRu: 'Заверенный перевод сразу приняли в посольстве. Спасибо!', authorName: 'Elena Petrova', authorCity: 'Prague', isVerified: true, isFeatured: true },
];

const faqs: Prisma.FaqCreateInput[] = [
  {
    question: 'How long does a certified translation take?',
    questionRu: 'Сколько времени занимает нотариальный перевод?',
    answer: 'Standard certified translations are completed within 24-48 hours. Express service is available for urgent documents with delivery in as little as 4 hours.',
    answerRu: 'Стандартные нотариальные переводы выполняются в течение 24-48 часов. Срочная услуга доступна для срочных документов с доставкой всего за 4 часа.',
    category: 'general',
    sortOrder: 1
  },
  {
    question: 'Are your translations accepted by government agencies?',
    questionRu: 'Принимаются ли ваши переводы государственными органами?',
    answer: 'Yes, all our certified translations are accepted by government agencies, courts, immigration authorities, and educational institutions worldwide.',
    answerRu: 'Да, все наши заверенные переводы принимаются государственными органами, судами, иммиграционными властями и образовательными учреждениями по всему миру.',
    category: 'legal',
    sortOrder: 2
  },
  {
    question: 'What documents can you translate?',
    questionRu: 'Какие документы вы можете перевести?',
    answer: 'We translate all types of documents including birth certificates, marriage certificates, diplomas, legal contracts, medical records, technical manuals, and more.',
    answerRu: 'Мы переводим все виды документов, включая свидетельства о рождении, свидетельства о браке, дипломы, юридические договоры, медицинские записи, технические руководства и многое другое.',
    category: 'general',
    sortOrder: 3
  },
  {
    question: 'How much does translation cost?',
    questionRu: 'Сколько стоит перевод?',
    answer: 'Pricing depends on the document type and service level. Certified translations start at £25 per page. Use our instant quote calculator for accurate pricing.',
    answerRu: 'Цена зависит от типа документа и уровня обслуживания. Заверенные переводы начинаются от 25 фунтов за страницу. Используйте наш калькулятор мгновенной оценки.',
    category: 'pricing',
    sortOrder: 4
  },
  {
    question: 'Do you provide apostille services?',
    questionRu: 'Предоставляете ли вы услуги апостиля?',
    answer: 'Yes, we offer complete apostille and document legalization services for international use. We handle the entire process from translation to final apostille certification.',
    answerRu: 'Да, мы предлагаем полные услуги апостиля и легализации документов для международного использования. Мы берём на себя весь процесс от перевода до финальной сертификации апостилем.',
    category: 'legal',
    sortOrder: 5
  },
  {
    question: 'How do I submit documents for translation?',
    questionRu: 'Как отправить документы на перевод?',
    answer: 'You can upload documents directly through our secure website, email them to us, or use our WhatsApp upload feature. All methods are secure and encrypted.',
    answerRu: 'Вы можете загрузить документы напрямую через наш защищённый сайт, отправить их по электронной почте или использовать нашу функцию загрузки WhatsApp.',
    category: 'process',
    sortOrder: 6
  },
];

async function main() {
  console.log('🌱 Starting seed...');

  // Clear existing data
  await prisma.review.deleteMany();
  await prisma.faq.deleteMany();
  await prisma.service.deleteMany();
  await prisma.location.deleteMany();

  console.log('📍 Creating locations...');
  for (const location of locations) {
    await prisma.location.create({ data: location });
  }

  console.log('🔧 Creating services...');
  for (const service of services) {
    await prisma.service.create({ data: service });
  }

  console.log('⭐ Creating reviews...');
  const allLocations = await prisma.location.findMany();
  const allServices = await prisma.service.findMany();

  for (const review of reviews) {
    const randomLocation = allLocations[Math.floor(Math.random() * allLocations.length)];
    const randomService = allServices[Math.floor(Math.random() * allServices.length)];
    await prisma.review.create({
      data: {
        ...review,
        location: { connect: { id: randomLocation.id } },
        service: { connect: { id: randomService.id } },
      }
    });
  }

  console.log('❓ Creating FAQs...');
  for (const faq of faqs) {
    await prisma.faq.create({ data: faq });
  }

  console.log('✅ Seed completed successfully!');
  console.log(`   - ${locations.length} locations`);
  console.log(`   - ${services.length} services`);
  console.log(`   - ${reviews.length} reviews`);
  console.log(`   - ${faqs.length} FAQs`);
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
