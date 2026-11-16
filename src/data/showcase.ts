import type { Localized } from '../i18n/locales';

import armchairPhoto from '../assets/armchair.png';
import bedPhoto from '../assets/bed.png';
import bedroomPhoto from '../assets/bedroom.png';
import chestPhoto from '../assets/chest.png';
import coffeeTablePhoto from '../assets/coffee-table.png';
import diningRoomPhoto from '../assets/dining-room.png';
import diningSetPhoto from '../assets/dining-set.png';
import livingRoomPhoto from '../assets/living-room.png';
import sofaPhoto from '../assets/sofa.png';
import storagePhoto from '../assets/storage.png';

/**
 * Каталог главной страницы: категории и демонстрационные товары.
 * Это примеры для оформления, а не подтверждённый ассортимент магазина.
 * Каждый текст задаётся на русском и английском.
 *
 * Как добавить товар:
 *   1. Положите фото в src/assets/ и импортируйте его в этом файле.
 *   2. Добавьте объект в PRODUCTS: id, name, type, categories и image с alt на обоих языках.
 *   3. В categories укажите одну или несколько категорий — по ним работает фильтр каталога.
 *      Первая категория выводится в карточке как «Комната».
 * Цены, наличие, размеры и материалы намеренно не указываются, пока их не подтвердит магазин.
 */

export type ImageSource = {
  src: string;
  /** Описание того, что изображено на фото, — для скринридеров */
  alt: Localized;
};

export type CategoryId = 'living-room' | 'bedroom' | 'dining-room' | 'storage';

export type Category = {
  id: CategoryId;
  title: Localized;
  description: Localized;
  image?: ImageSource;
};

export type Product = {
  id: string;
  name: Localized;
  /** Тип предмета, например «Диван» */
  type: Localized;
  /** Категории для фильтра; первая — комната в карточке */
  categories: [CategoryId, ...CategoryId[]];
  image?: ImageSource;
};

export const CATEGORIES: Category[] = [
  {
    id: 'living-room',
    title: { ru: 'Гостиная', en: 'Living room' },
    description: {
      ru: 'Например, диваны, кресла и журнальные столики.',
      en: 'For example, sofas, armchairs and coffee tables.',
    },
    image: {
      src: livingRoomPhoto,
      alt: {
        ru: 'Светлая гостиная с бирюзовым диваном, круглым журнальным столиком и телевизором на мраморной стене',
        en: 'Bright living room with a teal sofa, a round coffee table and a TV on a marble wall',
      },
    },
  },
  {
    id: 'bedroom',
    title: { ru: 'Спальня', en: 'Bedroom' },
    description: {
      ru: 'Например, кровати, прикроватные тумбы и комоды.',
      en: 'For example, beds, bedside tables and chests of drawers.',
    },
    image: {
      src: bedroomPhoto,
      alt: {
        ru: 'Спальня с бирюзовой кроватью у стены с подсвеченными вертикальными панелями',
        en: 'Bedroom with a teal bed against a backlit wall of vertical panels',
      },
    },
  },
  {
    id: 'dining-room',
    title: { ru: 'Столовая', en: 'Dining room' },
    description: {
      ru: 'Например, обеденные столы и стулья.',
      en: 'For example, dining tables and chairs.',
    },
    image: {
      src: diningRoomPhoto,
      alt: {
        ru: 'Столовая с белым круглым столом, бирюзовыми стульями и люстрой в форме шара',
        en: 'Dining room with a white round table, teal chairs and a sputnik chandelier',
      },
    },
  },
  {
    id: 'storage',
    title: { ru: 'Хранение', en: 'Storage' },
    description: {
      ru: 'Например, комоды, стеллажи и шкафы.',
      en: 'For example, chests of drawers, shelving and wardrobes.',
    },
    image: {
      src: storagePhoto,
      alt: {
        ru: 'Гардеробная со шкафами со стеклянными дверцами и рядами выдвижных ящиков',
        en: 'Walk-in closet with glass-door wardrobes and rows of drawers',
      },
    },
  },
];

/** Только название, тип и комната: без цен, наличия, размеров и материалов. */
export const PRODUCTS: Product[] = [
  {
    id: 'sofa',
    name: { ru: 'Трёхместный диван', en: 'Three-seat sofa' },
    type: { ru: 'Диван', en: 'Sofa' },
    categories: ['living-room'],
    image: {
      src: sofaPhoto,
      alt: {
        ru: 'Два голубых трёхместных дивана и деревянный журнальный столик в светлой гостиной',
        en: 'Two blue three-seat sofas and a wooden coffee table in a bright living room',
      },
    },
  },
  {
    id: 'armchair',
    name: { ru: 'Кресло для отдыха', en: 'Lounge armchair' },
    type: { ru: 'Кресло', en: 'Armchair' },
    categories: ['living-room'],
    image: {
      src: armchairPhoto,
      alt: {
        ru: 'Широкое серое мягкое кресло с подушкой у светлой стены',
        en: 'Wide gray upholstered armchair with a cushion by a light wall',
      },
    },
  },
  {
    id: 'coffee-table',
    name: { ru: 'Журнальный столик', en: 'Coffee table' },
    type: { ru: 'Стол', en: 'Table' },
    categories: ['living-room'],
    image: {
      src: coffeeTablePhoto,
      alt: {
        ru: 'Круглый чёрный журнальный столик на трёх ножках на белом пушистом ковре',
        en: 'Round black three-legged coffee table on a white fluffy rug',
      },
    },
  },
  {
    id: 'bed',
    name: { ru: 'Двуспальная кровать', en: 'Double bed' },
    type: { ru: 'Кровать', en: 'Bed' },
    categories: ['bedroom'],
    image: {
      src: bedPhoto,
      alt: {
        ru: 'Двуспальная кровать с бирюзовым мягким изголовьем и серым постельным бельём',
        en: 'Double bed with a teal upholstered headboard and gray bedding',
      },
    },
  },
  {
    id: 'chest',
    name: { ru: 'Комод', en: 'Chest of drawers' },
    type: { ru: 'Хранение', en: 'Storage' },
    categories: ['bedroom', 'storage'],
    image: {
      src: chestPhoto,
      alt: {
        ru: 'Серо-зелёный комод с четырьмя ящиками и круглыми золотистыми ручками',
        en: 'Gray-green chest with four drawers and round gold-colored handles',
      },
    },
  },
  {
    id: 'dining-set',
    name: { ru: 'Обеденная группа', en: 'Dining set' },
    type: { ru: 'Стол и стулья', en: 'Table and chairs' },
    categories: ['dining-room'],
    image: {
      src: diningSetPhoto,
      alt: {
        ru: 'Деревянный обеденный стол с бирюзовыми стульями в светлой столовой',
        en: 'Wooden dining table with teal chairs in a bright dining room',
      },
    },
  },
];

/** Фильтр каталога: все товары или одна категория */
export type CatalogFilter = 'all' | CategoryId;

export function productsFor(filter: CatalogFilter): Product[] {
  return filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.categories.includes(filter));
}

export function categoryTitle(id: CategoryId): Localized {
  return CATEGORIES.find((c) => c.id === id)?.title ?? { ru: id, en: id };
}
