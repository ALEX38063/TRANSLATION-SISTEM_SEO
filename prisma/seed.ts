import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const locations: Prisma.LocationCreateInput[] = [
  // United Kingdom
  { slug: 'london', nameNom: 'London', namePrep: 'in London', nameNomRu: 'Лондон', namePrepRu: 'в Лондоне', nameNomUa: 'Лондон', namePrepUa: 'у Лондоні', nameNomDe: 'London', namePrepDe: 'in London', nameNomFr: 'Londres', namePrepFr: 'à Londres', nameNomEs: 'Londres', namePrepEs: 'en Londres', countryCode: 'GB', localAuthority: 'City of London Corporation', deliveryHours: '24 hours', population: 8982000, orderCount: 523 },
  { slug: 'manchester', nameNom: 'Manchester', namePrep: 'in Manchester', nameNomRu: 'Манчестер', namePrepRu: 'в Манчестере', nameNomUa: 'Манчестер', namePrepUa: 'у Манчестері', nameNomDe: 'Manchester', namePrepDe: 'in Manchester', nameNomFr: 'Manchester', namePrepFr: 'à Manchester', nameNomEs: 'Mánchester', namePrepEs: 'en Mánchester', countryCode: 'GB', localAuthority: 'Manchester City Council', deliveryHours: '24-48 hours', population: 547627, orderCount: 187 },
  { slug: 'birmingham', nameNom: 'Birmingham', namePrep: 'in Birmingham', nameNomRu: 'Бирмингем', namePrepRu: 'в Бирмингеме', nameNomUa: 'Бірмінгем', namePrepUa: 'у Бірмінгемі', nameNomDe: 'Birmingham', namePrepDe: 'in Birmingham', nameNomFr: 'Birmingham', namePrepFr: 'à Birmingham', nameNomEs: 'Birmingham', namePrepEs: 'en Birmingham', countryCode: 'GB', localAuthority: 'Birmingham City Council', deliveryHours: '24-48 hours', population: 1141816, orderCount: 234 },
  { slug: 'leeds', nameNom: 'Leeds', namePrep: 'in Leeds', nameNomRu: 'Лидс', namePrepRu: 'в Лидсе', nameNomUa: 'Лідс', namePrepUa: 'у Лідсі', nameNomDe: 'Leeds', namePrepDe: 'in Leeds', nameNomFr: 'Leeds', namePrepFr: 'à Leeds', nameNomEs: 'Leeds', namePrepEs: 'en Leeds', countryCode: 'GB', localAuthority: 'Leeds City Council', deliveryHours: '48 hours', population: 793139, orderCount: 156 },
  { slug: 'glasgow', nameNom: 'Glasgow', namePrep: 'in Glasgow', nameNomRu: 'Глазго', namePrepRu: 'в Глазго', nameNomUa: 'Глазго', namePrepUa: 'у Глазго', nameNomDe: 'Glasgow', namePrepDe: 'in Glasgow', nameNomFr: 'Glasgow', namePrepFr: 'à Glasgow', nameNomEs: 'Glasgow', namePrepEs: 'en Glasgow', countryCode: 'GB', localAuthority: 'Glasgow City Council', deliveryHours: '48 hours', population: 635640, orderCount: 143 },
  { slug: 'edinburgh', nameNom: 'Edinburgh', namePrep: 'in Edinburgh', nameNomRu: 'Эдинбург', namePrepRu: 'в Эдинбурге', nameNomUa: 'Единбург', namePrepUa: 'в Единбурзі', nameNomDe: 'Edinburgh', namePrepDe: 'in Edinburgh', nameNomFr: 'Édimbourg', namePrepFr: 'à Édimbourg', nameNomEs: 'Edimburgo', namePrepEs: 'en Edimburgo', countryCode: 'GB', localAuthority: 'City of Edinburgh Council', deliveryHours: '48 hours', population: 524930, orderCount: 178 },
  { slug: 'liverpool', nameNom: 'Liverpool', namePrep: 'in Liverpool', nameNomRu: 'Ливерпуль', namePrepRu: 'в Ливерпуле', nameNomUa: 'Ліверпуль', namePrepUa: 'у Ліверпулі', nameNomDe: 'Liverpool', namePrepDe: 'in Liverpool', nameNomFr: 'Liverpool', namePrepFr: 'à Liverpool', nameNomEs: 'Liverpool', namePrepEs: 'en Liverpool', countryCode: 'GB', localAuthority: 'Liverpool City Council', deliveryHours: '48 hours', population: 498042, orderCount: 121 },
  { slug: 'bristol', nameNom: 'Bristol', namePrep: 'in Bristol', nameNomRu: 'Бристоль', namePrepRu: 'в Бристоле', nameNomUa: 'Брістоль', namePrepUa: 'у Брістолі', nameNomDe: 'Bristol', namePrepDe: 'in Bristol', nameNomFr: 'Bristol', namePrepFr: 'à Bristol', nameNomEs: 'Bristol', namePrepEs: 'en Bristol', countryCode: 'GB', localAuthority: 'Bristol City Council', deliveryHours: '48 hours', population: 463377, orderCount: 134 },

  // Germany
  { slug: 'berlin', nameNom: 'Berlin', namePrep: 'in Berlin', nameNomRu: 'Берлин', namePrepRu: 'в Берлине', nameNomUa: 'Берлін', namePrepUa: 'у Берліні', nameNomDe: 'Berlin', namePrepDe: 'in Berlin', nameNomFr: 'Berlin', namePrepFr: 'à Berlin', nameNomEs: 'Berlín', namePrepEs: 'en Berlín', countryCode: 'DE', localAuthority: 'Senatsverwaltung', deliveryHours: '24 hours', population: 3748148, orderCount: 412 },
  { slug: 'munich', nameNom: 'Munich', namePrep: 'in Munich', nameNomRu: 'Мюнхен', namePrepRu: 'в Мюнхене', nameNomUa: 'Мюнхен', namePrepUa: 'у Мюнхені', nameNomDe: 'München', namePrepDe: 'in München', nameNomFr: 'Munich', namePrepFr: 'à Munich', nameNomEs: 'Múnich', namePrepEs: 'en Múnich', countryCode: 'DE', localAuthority: 'Landeshauptstadt München', deliveryHours: '24-48 hours', population: 1488202, orderCount: 289 },
  { slug: 'hamburg', nameNom: 'Hamburg', namePrep: 'in Hamburg', nameNomRu: 'Гамбург', namePrepRu: 'в Гамбурге', nameNomUa: 'Гамбург', namePrepUa: 'у Гамбурзі', nameNomDe: 'Hamburg', namePrepDe: 'in Hamburg', nameNomFr: 'Hambourg', namePrepFr: 'à Hambourg', nameNomEs: 'Hamburgo', namePrepEs: 'en Hamburgo', countryCode: 'DE', localAuthority: 'Freie und Hansestadt Hamburg', deliveryHours: '24-48 hours', population: 1899160, orderCount: 198 },
  { slug: 'frankfurt', nameNom: 'Frankfurt', namePrep: 'in Frankfurt', nameNomRu: 'Франкфурт', namePrepRu: 'во Франкфурте', nameNomUa: 'Франкфурт', namePrepUa: 'у Франкфурті', nameNomDe: 'Frankfurt', namePrepDe: 'in Frankfurt', nameNomFr: 'Francfort', namePrepFr: 'à Francfort', nameNomEs: 'Fráncfort', namePrepEs: 'en Fráncfort', countryCode: 'DE', localAuthority: 'Stadt Frankfurt am Main', deliveryHours: '24-48 hours', population: 753056, orderCount: 267 },

  // France
  { slug: 'paris', nameNom: 'Paris', namePrep: 'in Paris', nameNomRu: 'Париж', namePrepRu: 'в Париже', nameNomUa: 'Париж', namePrepUa: 'у Парижі', nameNomDe: 'Paris', namePrepDe: 'in Paris', nameNomFr: 'Paris', namePrepFr: 'à Paris', nameNomEs: 'París', namePrepEs: 'en París', countryCode: 'FR', localAuthority: 'Mairie de Paris', deliveryHours: '24 hours', population: 2161000, orderCount: 478 },
  { slug: 'lyon', nameNom: 'Lyon', namePrep: 'in Lyon', nameNomRu: 'Лион', namePrepRu: 'в Лионе', nameNomUa: 'Ліон', namePrepUa: 'у Ліоні', nameNomDe: 'Lyon', namePrepDe: 'in Lyon', nameNomFr: 'Lyon', namePrepFr: 'à Lyon', nameNomEs: 'Lyon', namePrepEs: 'en Lyon', countryCode: 'FR', localAuthority: 'Métropole de Lyon', deliveryHours: '24-48 hours', population: 522250, orderCount: 145 },
  { slug: 'marseille', nameNom: 'Marseille', namePrep: 'in Marseille', nameNomRu: 'Марсель', namePrepRu: 'в Марселе', nameNomUa: 'Марсель', namePrepUa: 'у Марселі', nameNomDe: 'Marseille', namePrepDe: 'in Marseille', nameNomFr: 'Marseille', namePrepFr: 'à Marseille', nameNomEs: 'Marsella', namePrepEs: 'en Marsella', countryCode: 'FR', localAuthority: 'Ville de Marseille', deliveryHours: '48 hours', population: 870731, orderCount: 132 },

  // Netherlands
  { slug: 'amsterdam', nameNom: 'Amsterdam', namePrep: 'in Amsterdam', nameNomRu: 'Амстердам', namePrepRu: 'в Амстердаме', nameNomUa: 'Амстердам', namePrepUa: 'в Амстердамі', nameNomDe: 'Amsterdam', namePrepDe: 'in Amsterdam', nameNomFr: 'Amsterdam', namePrepFr: 'à Amsterdam', nameNomEs: 'Ámsterdam', namePrepEs: 'en Ámsterdam', countryCode: 'NL', localAuthority: 'Gemeente Amsterdam', deliveryHours: '24 hours', population: 872680, orderCount: 234 },
  { slug: 'rotterdam', nameNom: 'Rotterdam', namePrep: 'in Rotterdam', nameNomRu: 'Роттердам', namePrepRu: 'в Роттердаме', nameNomUa: 'Роттердам', namePrepUa: 'у Роттердамі', nameNomDe: 'Rotterdam', namePrepDe: 'in Rotterdam', nameNomFr: 'Rotterdam', namePrepFr: 'à Rotterdam', nameNomEs: 'Róterdam', namePrepEs: 'en Róterdam', countryCode: 'NL', localAuthority: 'Gemeente Rotterdam', deliveryHours: '24-48 hours', population: 651446, orderCount: 156 },

  // Spain
  { slug: 'madrid', nameNom: 'Madrid', namePrep: 'in Madrid', nameNomRu: 'Мадрид', namePrepRu: 'в Мадриде', nameNomUa: 'Мадрид', namePrepUa: 'у Мадриді', nameNomDe: 'Madrid', namePrepDe: 'in Madrid', nameNomFr: 'Madrid', namePrepFr: 'à Madrid', nameNomEs: 'Madrid', namePrepEs: 'en Madrid', countryCode: 'ES', localAuthority: 'Ayuntamiento de Madrid', deliveryHours: '24 hours', population: 3223334, orderCount: 312 },
  { slug: 'barcelona', nameNom: 'Barcelona', namePrep: 'in Barcelona', nameNomRu: 'Барселона', namePrepRu: 'в Барселоне', nameNomUa: 'Барселона', namePrepUa: 'у Барселоні', nameNomDe: 'Barcelona', namePrepDe: 'in Barcelona', nameNomFr: 'Barcelone', namePrepFr: 'à Barcelone', nameNomEs: 'Barcelona', namePrepEs: 'en Barcelona', countryCode: 'ES', localAuthority: 'Ajuntament de Barcelona', deliveryHours: '24 hours', population: 1620343, orderCount: 287 },

  // Italy
  { slug: 'rome', nameNom: 'Rome', namePrep: 'in Rome', nameNomRu: 'Рим', namePrepRu: 'в Риме', nameNomUa: 'Рим', namePrepUa: 'у Римі', nameNomDe: 'Rom', namePrepDe: 'in Rom', nameNomFr: 'Rome', namePrepFr: 'à Rome', nameNomEs: 'Roma', namePrepEs: 'en Roma', countryCode: 'IT', localAuthority: 'Roma Capitale', deliveryHours: '24-48 hours', population: 2873000, orderCount: 245 },
  { slug: 'milan', nameNom: 'Milan', namePrep: 'in Milan', nameNomRu: 'Милан', namePrepRu: 'в Милане', nameNomUa: 'Мілан', namePrepUa: 'у Мілані', nameNomDe: 'Mailand', namePrepDe: 'in Mailand', nameNomFr: 'Milan', namePrepFr: 'à Milan', nameNomEs: 'Milán', namePrepEs: 'en Milán', countryCode: 'IT', localAuthority: 'Comune di Milano', deliveryHours: '24 hours', population: 1396059, orderCount: 298 },

  // Poland
  { slug: 'warsaw', nameNom: 'Warsaw', namePrep: 'in Warsaw', nameNomRu: 'Варшава', namePrepRu: 'в Варшаве', nameNomUa: 'Варшава', namePrepUa: 'у Варшаві', nameNomDe: 'Warschau', namePrepDe: 'in Warschau', nameNomFr: 'Varsovie', namePrepFr: 'à Varsovie', nameNomEs: 'Varsovia', namePrepEs: 'en Varsovia', countryCode: 'PL', localAuthority: 'Urząd m.st. Warszawy', deliveryHours: '24-48 hours', population: 1793579, orderCount: 189 },
  { slug: 'krakow', nameNom: 'Krakow', namePrep: 'in Krakow', nameNomRu: 'Краков', namePrepRu: 'в Кракове', nameNomUa: 'Краків', namePrepUa: 'у Кракові', nameNomDe: 'Krakau', namePrepDe: 'in Krakau', nameNomFr: 'Cracovie', namePrepFr: 'à Cracovie', nameNomEs: 'Cracovia', namePrepEs: 'en Cracovia', countryCode: 'PL', localAuthority: 'Urząd Miasta Krakowa', deliveryHours: '48 hours', population: 779115, orderCount: 134 },

  // Austria
  { slug: 'vienna', nameNom: 'Vienna', namePrep: 'in Vienna', nameNomRu: 'Вена', namePrepRu: 'в Вене', nameNomUa: 'Відень', namePrepUa: 'у Відні', nameNomDe: 'Wien', namePrepDe: 'in Wien', nameNomFr: 'Vienne', namePrepFr: 'à Vienne', nameNomEs: 'Viena', namePrepEs: 'en Viena', countryCode: 'AT', localAuthority: 'Stadt Wien', deliveryHours: '24 hours', population: 1911191, orderCount: 267 },

  // Switzerland  
  { slug: 'zurich', nameNom: 'Zurich', namePrep: 'in Zurich', nameNomRu: 'Цюрих', namePrepRu: 'в Цюрихе', nameNomUa: 'Цюрих', namePrepUa: 'у Цюриху', nameNomDe: 'Zürich', namePrepDe: 'in Zürich', nameNomFr: 'Zurich', namePrepFr: 'à Zurich', nameNomEs: 'Zúrich', namePrepEs: 'en Zúrich', countryCode: 'CH', localAuthority: 'Stadt Zürich', deliveryHours: '24 hours', population: 421878, orderCount: 234 },
  { slug: 'geneva', nameNom: 'Geneva', namePrep: 'in Geneva', nameNomRu: 'Женева', namePrepRu: 'в Женеве', nameNomUa: 'Женева', namePrepUa: 'у Женеві', nameNomDe: 'Genf', namePrepDe: 'in Genf', nameNomFr: 'Genève', namePrepFr: 'à Genève', nameNomEs: 'Ginebra', namePrepEs: 'en Ginebra', countryCode: 'CH', localAuthority: 'Ville de Genève', deliveryHours: '24 hours', population: 203951, orderCount: 189 },

  // Belgium
  { slug: 'brussels', nameNom: 'Brussels', namePrep: 'in Brussels', nameNomRu: 'Брюссель', namePrepRu: 'в Брюсселе', nameNomUa: 'Брюссель', namePrepUa: 'у Брюсселі', nameNomDe: 'Brüssel', namePrepDe: 'in Brüssel', nameNomFr: 'Bruxelles', namePrepFr: 'à Bruxelles', nameNomEs: 'Bruselas', namePrepEs: 'en Bruselas', countryCode: 'BE', localAuthority: 'Ville de Bruxelles', deliveryHours: '24 hours', population: 185103, orderCount: 178 },

  // Portugal
  { slug: 'lisbon', nameNom: 'Lisbon', namePrep: 'in Lisbon', nameNomRu: 'Лиссабон', namePrepRu: 'в Лиссабоне', nameNomUa: 'Лісабон', namePrepUa: 'у Лісабоні', nameNomDe: 'Lissabon', namePrepDe: 'in Lissabon', nameNomFr: 'Lisbonne', namePrepFr: 'à Lisbonne', nameNomEs: 'Lisboa', namePrepEs: 'en Lisboa', countryCode: 'PT', localAuthority: 'Câmara Municipal de Lisboa', deliveryHours: '24-48 hours', population: 544851, orderCount: 145 },

  // Ireland
  { slug: 'dublin', nameNom: 'Dublin', namePrep: 'in Dublin', nameNomRu: 'Дублин', namePrepRu: 'в Дублине', nameNomUa: 'Дублін', namePrepUa: 'у Дубліні', nameNomDe: 'Dublin', namePrepDe: 'in Dublin', nameNomFr: 'Dublin', namePrepFr: 'à Dublin', nameNomEs: 'Dublín', namePrepEs: 'en Dublín', countryCode: 'IE', localAuthority: 'Dublin City Council', deliveryHours: '24 hours', population: 1173179, orderCount: 198 },

  // Czech Republic
  { slug: 'prague', nameNom: 'Prague', namePrep: 'in Prague', nameNomRu: 'Прага', namePrepRu: 'в Праге', nameNomUa: 'Прага', namePrepUa: 'у Празі', nameNomDe: 'Prag', namePrepDe: 'in Prag', nameNomFr: 'Prague', namePrepFr: 'à Prague', nameNomEs: 'Praga', namePrepEs: 'en Praga', countryCode: 'CZ', localAuthority: 'Magistrát hlavního města Prahy', deliveryHours: '24-48 hours', population: 1335084, orderCount: 167 },
];

const services: Prisma.ServiceCreateInput[] = [
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
    pricePerPage: 35.00,
    description: 'Official certified translations accepted by government agencies, courts, and institutions worldwide.',
    descriptionRu: 'Официальные заверенные переводы, принимаемые государственными органами, судами и учреждениями по всему миру.',
    descriptionUa: 'Офіційні завірені переклади, що приймаються державними органами, судами та установами по всьому світу.',
    descriptionDe: 'Amtliche beglaubigte Übersetzungen, die von Regierungsbehörden, Gerichten und Institutionen weltweit akzeptiert werden.',
    descriptionFr: 'Traductions certifiées officielles acceptées par les agences gouvernementales, les tribunaux et les institutions du monde entier.',
    descriptionEs: 'Traducciones certificadas oficiales aceptadas por agencias gubernamentales, tribunales e instituciones de todo el mundo.',
    icon: 'FileCheck'
  },
  {
    slug: 'document-translation',
    slugRu: 'perevod-dokumentov',
    slugUa: 'pereklad-dokumentiv',
    slugDe: 'dokumentenubersetzung',
    slugFr: 'traduction-de-documents',
    slugEs: 'traduccion-de-documentos',
    name: 'Document Translation',
    nameRu: 'Перевод документов',
    nameUa: 'Переклад документів',
    nameDe: 'Dokumentenübersetzung',
    nameFr: 'Traduction de Documents',
    nameEs: 'Traducción de Documentos',
    category: 'document',
    pricePerPage: 25.00,
    description: 'Professional translation of business documents, contracts, and correspondence.',
    descriptionRu: 'Профессиональный перевод деловых документов, контрактов и корреспонденции.',
    descriptionUa: 'Професійний переклад ділових документів, контрактів та кореспонденції.',
    descriptionDe: 'Professionelle Übersetzung von Geschäftsunterlagen, Verträgen und Korrespondenz.',
    descriptionFr: 'Traduction professionnelle de documents commerciaux, contrats et correspondance.',
    descriptionEs: 'Traducción profesional de documentos comerciales, contratos y correspondencia.',
    icon: 'FileText'
  },
  {
    slug: 'legal-translation',
    slugRu: 'yuridicheskiy-perevod',
    slugUa: 'yurydychnyi-pereklad',
    slugDe: 'juristische-ubersetzung',
    slugFr: 'traduction-juridique',
    slugEs: 'traduccion-juridica',
    name: 'Legal Translation',
    nameRu: 'Юридический перевод',
    nameUa: 'Юридичний переклад',
    nameDe: 'Juristische Übersetzung',
    nameFr: 'Traduction Juridique',
    nameEs: 'Traducción Jurídica',
    category: 'legal',
    pricePerPage: 45.00,
    description: 'Expert translation of legal documents by certified legal translators.',
    descriptionRu: 'Экспертный перевод юридических документов сертифицированными переводчиками.',
    descriptionUa: 'Експертний переклад юридичних документів сертифікованими перекладачами.',
    descriptionDe: 'Fachübersetzung juristischer Dokumente durch zertifizierte juristische Übersetzer.',
    descriptionFr: 'Traduction experte de documents juridiques par des traducteurs juridiques certifiés.',
    descriptionEs: 'Traducción experta de documentos legales por traductores jurídicos certificados.',
    icon: 'Scale'
  },
  {
    slug: 'medical-translation',
    slugRu: 'meditsinskiy-perevod',
    slugUa: 'medychnyi-pereklad',
    slugDe: 'medizinische-ubersetzung',
    slugFr: 'traduction-medicale',
    slugEs: 'traduccion-medica',
    name: 'Medical Translation',
    nameRu: 'Медицинский перевод',
    nameUa: 'Медичний переклад',
    nameDe: 'Medizinische Übersetzung',
    nameFr: 'Traduction Médicale',
    nameEs: 'Traducción Médica',
    category: 'medical',
    pricePerPage: 40.00,
    description: 'Accurate translation of medical records, reports, and clinical documents.',
    descriptionRu: 'Точный перевод медицинских записей, отчётов и клинических документов.',
    descriptionUa: 'Точний переклад медичних записів, звітів та клінічних документів.',
    descriptionDe: 'Genaue Übersetzung von Krankenakten, Berichten und klinischen Dokumenten.',
    descriptionFr: 'Traduction précise des dossiers médicaux, rapports et documents cliniques.',
    descriptionEs: 'Traducción precisa de historiales médicos, informes y documentos clínicos.',
    icon: 'Stethoscope'
  },
  {
    slug: 'technical-translation',
    slugRu: 'tekhnicheskiy-perevod',
    slugUa: 'tekhnichnyi-pereklad',
    slugDe: 'technische-ubersetzung',
    slugFr: 'traduction-technique',
    slugEs: 'traduccion-tecnica',
    name: 'Technical Translation',
    nameRu: 'Технический перевод',
    nameUa: 'Технічний переклад',
    nameDe: 'Technische Übersetzung',
    nameFr: 'Traduction Technique',
    nameEs: 'Traducción Técnica',
    category: 'technical',
    pricePerPage: 35.00,
    description: 'Specialized translation of technical manuals, specifications, and engineering documents.',
    descriptionRu: 'Специализированный перевод технических руководств, спецификаций и инженерных документов.',
    descriptionUa: 'Спеціалізований переклад технічних посібників, специфікацій та інженерних документів.',
    descriptionDe: 'Spezialisierte Übersetzung von technischen Handbüchern, Spezifikationen und Ingenieurdokumenten.',
    descriptionFr: 'Traduction spécialisée de manuels techniques, spécifications et documents d\'ingénierie.',
    descriptionEs: 'Traducción especializada de manuales técnicos, especificaciones y documentos de ingeniería.',
    icon: 'Cog'
  },
  {
    slug: 'website-translation',
    slugRu: 'perevod-saytov',
    slugUa: 'pereklad-saitiv',
    slugDe: 'webseitenubersetzung',
    slugFr: 'traduction-de-sites-web',
    slugEs: 'traduccion-de-sitios-web',
    name: 'Website Translation',
    nameRu: 'Перевод сайтов',
    nameUa: 'Переклад сайтів',
    nameDe: 'Webseitenübersetzung',
    nameFr: 'Traduction de Sites Web',
    nameEs: 'Traducción de Sitios Web',
    category: 'digital',
    pricePerPage: 30.00,
    description: 'Complete website localization and translation services.',
    descriptionRu: 'Полная локализация и перевод веб-сайтов.',
    descriptionUa: 'Повна локалізація та переклад веб-сайтів.',
    descriptionDe: 'Komplette Website-Lokalisierungs- und Übersetzungsdienste.',
    descriptionFr: 'Services complets de localisation et de traduction de sites web.',
    descriptionEs: 'Servicios completos de localización y traducción de sitios web.',
    icon: 'Globe'
  },
  {
    slug: 'apostille-services',
    slugRu: 'apostil-uslugi',
    slugUa: 'apostyl-posluhy',
    slugDe: 'apostille-dienste',
    slugFr: 'services-d-apostille',
    slugEs: 'servicios-de-apostilla',
    name: 'Apostille Services',
    nameRu: 'Услуги апостиля',
    nameUa: 'Послуги апостиля',
    nameDe: 'Apostille-Dienste',
    nameFr: 'Services d\'Apostille',
    nameEs: 'Servicios de Apostilla',
    category: 'legal',
    pricePerPage: 75.00,
    description: 'Document legalization and apostille services for international use.',
    descriptionRu: 'Легализация документов и услуги апостиля для международного использования.',
    descriptionUa: 'Легалізація документів та послуги апостиля для міжнародного використання.',
    descriptionDe: 'Dokumentenlegalisierung und Apostille-Dienste für den internationalen Gebrauch.',
    descriptionFr: 'Services de légalisation de documents et d\'apostille pour usage international.',
    descriptionEs: 'Servicios de legalización de documentos y apostilla para uso internacional.',
    icon: 'Stamp'
  },
  {
    slug: 'birth-certificate-translation',
    slugRu: 'perevod-svidetelstva-o-rozhdenii',
    slugUa: 'pereklad-svidotstva-pro-narodzhennya',
    slugDe: 'geburtsurkundenubersetzung',
    slugFr: 'traduction-acte-de-naissance',
    slugEs: 'traduccion-certificado-nacimiento',
    name: 'Birth Certificate Translation',
    nameRu: 'Перевод свидетельства о рождении',
    nameUa: 'Переклад свідоцтва про народження',
    nameDe: 'Geburtsurkundenübersetzung',
    nameFr: 'Traduction d\'Acte de Naissance',
    nameEs: 'Traducción de Certificado de Nacimiento',
    category: 'document',
    pricePerPage: 30.00,
    description: 'Certified translation of birth certificates for immigration and legal purposes.',
    descriptionRu: 'Заверенный перевод свидетельств о рождении для иммиграционных и юридических целей.',
    descriptionUa: 'Засвідчений переклад свідоцтв про народження для імміграційних та юридичних цілей.',
    descriptionDe: 'Beglaubigte Übersetzung von Geburtsurkunden für Einwanderungs- und Rechtszwecke.',
    descriptionFr: 'Traduction certifiée d\'actes de naissance à des fins d\'immigration et juridiques.',
    descriptionEs: 'Traducción certificada de certificados de nacimiento para fines migratorios y legales.',
    icon: 'Baby'
  },
  {
    slug: 'marriage-certificate-translation',
    slugRu: 'perevod-svidetelstva-o-brake',
    slugUa: 'pereklad-svidotstva-pro-shlyub',
    slugDe: 'heiratsurkundenubersetzung',
    slugFr: 'traduction-acte-de-mariage',
    slugEs: 'traduccion-certificado-matrimonio',
    name: 'Marriage Certificate Translation',
    nameRu: 'Перевод свидетельства о браке',
    nameUa: 'Переклад свідоцтва про шлюб',
    nameDe: 'Heiratsurkundenübersetzung',
    nameFr: 'Traduction d\'Acte de Mariage',
    nameEs: 'Traducción de Certificado de Matrimonio',
    category: 'document',
    pricePerPage: 30.00,
    description: 'Official translation of marriage certificates with certification.',
    descriptionRu: 'Официальный перевод свидетельств о браке с сертификацией.',
    descriptionUa: 'Офіційний переклад свідоцтв про шлюб із сертифікацією.',
    descriptionDe: 'Amtliche Übersetzung von Heiratsurkunden mit Beglaubigung.',
    descriptionFr: 'Traduction officielle d\'actes de mariage avec certification.',
    descriptionEs: 'Traducción oficial de certificados de matrimonio con certificación.',
    icon: 'Heart'
  },
  {
    slug: 'diploma-translation',
    slugRu: 'perevod-diploma',
    slugUa: 'pereklad-dyploma',
    slugDe: 'diplomubersetzung',
    slugFr: 'traduction-de-diplome',
    slugEs: 'traduccion-de-diploma',
    name: 'Diploma Translation',
    nameRu: 'Перевод диплома',
    nameUa: 'Переклад диплома',
    nameDe: 'Diplomübersetzung',
    nameFr: 'Traduction de Diplôme',
    nameEs: 'Traducción de Diploma',
    category: 'education',
    pricePerPage: 35.00,
    description: 'Certified translation of academic diplomas, transcripts, and certificates.',
    descriptionRu: 'Заверенный перевод дипломов, транскриптов и академических сертификатов.',
    descriptionUa: 'Засвідчений переклад академічних дипломів, транскриптів та сертифікатів.',
    descriptionDe: 'Beglaubigte Übersetzung von akademischen Diplomen, Zeugnissen und Zertifikaten.',
    descriptionFr: 'Traduction certifiée de diplômes universitaires, relevés de notes et certificats.',
    descriptionEs: 'Traducción certificada de diplomas académicos, expedientes y certificados.',
    icon: 'GraduationCap'
  },
];

const reviews: Prisma.ReviewCreateInput[] = [
  { rating: 5, content: 'Excellent service! Got my certified translation within 24 hours. Very professional.', contentRu: 'Отличный сервис! Получил заверенный перевод в течение 24 часов. Очень профессионально.', contentUa: 'Відмінний сервіс! Отримав свій засвідчений переклад протягом 24 годин. Дуже професійно.', contentDe: 'Exzellenter Service! Habe meine beglaubigte Übersetzung innerhalb von 24 Stunden erhalten. Sehr professionell.', contentFr: 'Excellent service ! J\'ai reçu ma traduction certifiée en 24 heures. Très professionnel.', contentEs: '¡Excelente servicio! Recibí mi traducción certificada en 24 horas. Muy profesional.', authorName: 'James Wilson', authorCity: 'London', isVerified: true, isFeatured: true },
  { rating: 5, content: 'Fast, reliable, and affordable. Highly recommend for legal documents.', contentRu: 'Быстро, надёжно и доступно. Очень рекомендую для юридических документов.', contentUa: 'Швидко, надійно та доступно. Дуже рекомендую для юридичних документів.', contentDe: 'Schnell, zuverlässig und erschwinglich. Sehr empfehlenswert für juristische Dokumente.', contentFr: 'Rapide, fiable et abordable. Je recommande vivement pour les documents juridiques.', contentEs: 'Rápido, fiable y asequible. Muy recomendable para documentos legales.', authorName: 'Maria Schmidt', authorCity: 'Berlin', isVerified: true, isFeatured: true },
  { rating: 5, content: 'The best translation service I have used. Perfect quality every time.', contentRu: 'Лучший переводческий сервис, которым я пользовался. Идеальное качество каждый раз.', contentUa: 'Найкращий перекладацький сервіс, яким я користувався. Ідеальна якість щоразу.', contentDe: 'Der beste Übersetzungsdienst, den ich je genutzt habe. Jedes Mal perfekte Qualität.', contentFr: 'Le meilleur service de traduction que j\'ai utilisé. Qualité parfaite à chaque fois.', contentEs: 'El mejor servicio de traducción que he usado. Calidad perfecta en todo momento.', authorName: 'Pierre Dupont', authorCity: 'Paris', isVerified: true, isFeatured: true },
  { rating: 5, content: 'Outstanding customer service and incredibly fast turnaround.', contentRu: 'Выдающееся обслуживание клиентов и невероятно быстрое выполнение.', contentUa: 'Видатне обслуговування клієнтів та неймовірно швидке виконання.', contentDe: 'Hervorragender Kundenservice und unglaublich schnelle Bearbeitung.', contentFr: 'Service client exceptionnel et délai d\'exécution incroyablement rapide.', contentEs: 'Excelente servicio al cliente y un tiempo de respuesta increíblemente rápido.', authorName: 'Anna Kowalski', authorCity: 'Warsaw', isVerified: true, isFeatured: false },
  { rating: 4, content: 'Great service for document translation. Will use again.', contentRu: 'Отличный сервис для перевода документов. Буду пользоваться снова.', contentUa: 'Чудовий сервіс для перекладу документів. Буду користуватися знову.', contentDe: 'Toller Service für die Dokumentenübersetzung. Werde ich wieder nutzen.', contentFr: 'Excellent service de traduction de documents. Je l\'utiliserai à nouveau.', contentEs: 'Gran servicio de traducción de documentos. Lo usaré de nuevo.', authorName: 'Marco Rossi', authorCity: 'Milan', isVerified: true, isFeatured: false },
  { rating: 5, content: 'Certified translation was accepted immediately by the embassy. Thank you!', contentRu: 'Заверенный перевод сразу приняли в посольстве. Спасибо!', contentUa: 'Засвідчений переклад одразу прийняли в посольстві. Дякую!', contentDe: 'Die beglaubigte Übersetzung wurde sofort von der Botschaft akzeptiert. Danke!', contentFr: 'La traduction certifiée a été acceptée immédiatement par l\'ambassade. Merci !', contentEs: 'La traducción certificada fue aceptada inmediatamente por la embajada. ¡Gracias!', authorName: 'Elena Petrova', authorCity: 'Prague', isVerified: true, isFeatured: true },
];

const faqs: Prisma.FaqCreateInput[] = [
  {
    question: 'How long does a certified translation take?',
    questionRu: 'Сколько времени занимает нотариальный перевод?',
    questionUa: 'Скільки часу займає нотаріальний переклад?',
    questionDe: 'Wie lange dauert eine beglaubigte Übersetzung?',
    questionFr: 'Combien de temps prend une traduction certifiée ?',
    questionEs: '¿Cuánto tiempo tarda una traducción certificada?',
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
