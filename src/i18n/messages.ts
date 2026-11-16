import type { Locale } from './locales';

/**
 * Тексты интерфейса. Русский словарь задаёт структуру (тип Messages),
 * английский обязан повторять её полностью — иначе TypeScript выдаст ошибку.
 *
 * Названия и описания категорий и товаров лежат в src/data/showcase.ts,
 * контактные данные — в src/data/store.ts.
 */
const ru = {
  meta: {
    /** Заголовок вкладки: «<название магазина> — <title>» */
    title: 'мебель для дома',
    description:
      'Сайт мебельного магазина: примеры мебели для гостиной, спальни, столовой и хранения, каталог с фильтром по комнатам и контакты для связи.',
  },
  skipLink: 'Перейти к содержимому',
  header: {
    navLabel: 'Основная навигация',
    languageLabel: 'Язык сайта',
  },
  nav: {
    categories: 'Категории',
    catalog: 'Каталог',
    about: 'О магазине',
    contacts: 'Контакты',
  },
  hero: {
    eyebrow: 'Добро пожаловать',
    title: 'Мебель для уютного дома',
    lead: 'Гостиная, спальня, столовая — посмотрите примеры мебели и свяжитесь с нами, чтобы обсудить, что подойдёт вашему дому.',
    primaryAction: 'Смотреть каталог',
    secondaryAction: 'Связаться с нами',
    imageAlt:
      'Гостиная с бирюзовым угловым диваном, креслом с жёлтым узором и тёмным деревянным полом',
  },
  categories: {
    title: 'Категории',
    lead: 'Примеры комнат и типов мебели. Выберите комнату, чтобы открыть её в каталоге.',
    cardAction: 'Смотреть в каталоге',
  },
  catalog: {
    title: 'Каталог',
    lead: 'Примеры мебели для разных комнат. Выберите категорию, чтобы посмотреть подходящие предметы. Подробности уточняйте в магазине.',
    filterLabel: 'Категории каталога',
    all: 'Все',
    tag: 'Пример',
    specRoom: 'Комната',
    specType: 'Тип',
    status: (count: number, total: number) => `Показано: ${count} из ${total}`,
    empty: 'В этой категории пока нет примеров.',
  },
  about: {
    title: 'О магазине',
    intro: [
      'Мебель выбирают надолго, поэтому важно, чтобы она подходила и по размеру, и по характеру дома. Спокойный выбор начинается с того, как вы живёте.',
      'Мы поможем разобраться в вариантах: подскажем, на что обратить внимание, и ответим на вопросы о мебели из каталога.',
    ],
    steps: [
      {
        title: 'Измерьте помещение',
        text: 'Запишите размеры комнаты, дверных проёмов и места, где будет стоять мебель.',
      },
      {
        title: 'Подумайте, как будете пользоваться',
        text: 'Отдых, хранение, приём гостей — от этого зависят размер, форма и материалы.',
      },
      {
        title: 'Свяжитесь с нами',
        text: 'Расскажите о своей задаче, и мы ответим на вопросы и поможем сориентироваться.',
      },
    ],
    contactsLink: 'Перейти к контактам',
  },
  contacts: {
    title: 'Контакты',
    lead: 'Позвоните или напишите — ответим на вопросы о мебели из каталога.',
    labels: {
      name: 'Название',
      phone: 'Телефон',
      email: 'Почта',
      address: 'Адрес',
      hours: 'Часы работы',
    },
    /** Показываются, только если значение в src/data/store.ts не заполнено */
    placeholders: {
      name: 'Название магазина',
      phone: 'Номер телефона',
      email: 'Адрес электронной почты',
      address: 'Адрес магазина',
      hours: 'Дни и часы работы',
    },
    placeholderNote: 'заглушка',
  },
  footer: {
    tagline: 'Мебель для дома',
    sectionsHeading: 'Разделы',
    sectionsLabel: 'Разделы страницы',
    contactsHeading: 'Контакты',
  },
  imageSlot: {
    placeholder: 'Фото появится позже',
  },
};

export type Messages = typeof ru;

const en: Messages = {
  meta: {
    title: 'furniture for your home',
    description:
      'Furniture store website: furniture examples for the living room, bedroom, dining room and storage, a catalog filtered by room, and contact details.',
  },
  skipLink: 'Skip to content',
  header: {
    navLabel: 'Main navigation',
    languageLabel: 'Site language',
  },
  nav: {
    categories: 'Categories',
    catalog: 'Catalog',
    about: 'About',
    contacts: 'Contacts',
  },
  hero: {
    eyebrow: 'Welcome',
    title: 'Furniture for a cozy home',
    lead: 'Living room, bedroom, dining room — browse furniture examples and get in touch to discuss what will suit your home.',
    primaryAction: 'Browse the catalog',
    secondaryAction: 'Contact us',
    imageAlt:
      'Living room with a teal corner sofa, an armchair with a yellow pattern and a dark wooden floor',
  },
  categories: {
    title: 'Categories',
    lead: 'Examples of rooms and furniture types. Choose a room to open it in the catalog.',
    cardAction: 'View in catalog',
  },
  catalog: {
    title: 'Catalog',
    lead: 'Furniture examples for different rooms. Choose a category to see matching pieces. Ask the store for details.',
    filterLabel: 'Catalog categories',
    all: 'All',
    tag: 'Example',
    specRoom: 'Room',
    specType: 'Type',
    status: (count: number, total: number) => `Showing ${count} of ${total}`,
    empty: 'There are no examples in this category yet.',
  },
  about: {
    title: 'About the store',
    intro: [
      'Furniture is chosen for years, so it matters that it suits both the size and the character of your home. A calm choice starts with how you live.',
      'We will help you sort through the options: point out what to pay attention to and answer questions about the furniture in the catalog.',
    ],
    steps: [
      {
        title: 'Measure the room',
        text: 'Write down the dimensions of the room, the doorways and the spot where the furniture will stand.',
      },
      {
        title: 'Think about how you will use it',
        text: 'Relaxing, storage, hosting guests — this determines the size, shape and materials.',
      },
      {
        title: 'Get in touch',
        text: 'Tell us what you need, and we will answer your questions and help you find your way.',
      },
    ],
    contactsLink: 'Go to contacts',
  },
  contacts: {
    title: 'Contacts',
    lead: 'Call or write to us — we will answer questions about the furniture in the catalog.',
    labels: {
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Opening hours',
    },
    placeholders: {
      name: 'Store name',
      phone: 'Phone number',
      email: 'Email address',
      address: 'Store address',
      hours: 'Opening days and hours',
    },
    placeholderNote: 'placeholder',
  },
  footer: {
    tagline: 'Furniture for your home',
    sectionsHeading: 'Sections',
    sectionsLabel: 'Page sections',
    contactsHeading: 'Contacts',
  },
  imageSlot: {
    placeholder: 'Photo coming soon',
  },
};

export const MESSAGES: Record<Locale, Messages> = { ru, en };
