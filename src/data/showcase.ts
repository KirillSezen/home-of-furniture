/**
 * Демонстрационные данные главной страницы.
 * Это примеры для оформления, а не фактический ассортимент магазина.
 *
 * Как заменить заглушку фотографией:
 *   1. Положите файл в src/assets/, например src/assets/sofa.jpg.
 *   2. Импортируйте его в этом файле: import sofaPhoto from '../assets/sofa.jpg';
 *   3. Добавьте карточке поле image: { src: sofaPhoto, alt: 'Описание фото' }.
 * Пока поля image нет, выводится иллюстрация-заглушка из `art`.
 */

export type ImageSource = {
  src: string;
  /** Описание фотографии для скринридеров */
  alt: string;
};

type WithImage = {
  /** Фотография; если не задана, показывается заглушка `art` */
  image?: ImageSource;
};

export type Category = WithImage & {
  id: string;
  title: string;
  description: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = WithImage & {
  id: string;
  name: string;
  specs: ProductSpec[];
};

export const CATEGORIES: Category[] = [
  {
    id: 'living-room',
    title: 'Гостиная',
    description: 'Например, диваны, кресла и журнальные столики.',
  },
  {
    id: 'bedroom',
    title: 'Спальня',
    description: 'Например, кровати, прикроватные тумбы и комоды.',
  },
  {
    id: 'dining-room',
    title: 'Столовая',
    description: 'Например, обеденные столы и стулья.',
  },
  {
    id: 'storage',
    title: 'Хранение',
    description: 'Например, комоды, стеллажи и шкафы.',
  },
];

/** Только название и общие признаки: без цен, наличия, размеров и материалов. */
export const PRODUCTS: Product[] = [
  {
    id: 'sofa',
    name: 'Трёхместный диван',
    specs: [
      { label: 'Комната', value: 'Гостиная' },
      { label: 'Тип', value: 'Диван' },
    ],
  },
  {
    id: 'armchair',
    name: 'Кресло для отдыха',
    specs: [
      { label: 'Комната', value: 'Гостиная' },
      { label: 'Тип', value: 'Кресло' },
    ],
  },
  {
    id: 'coffee-table',
    name: 'Журнальный столик',
    specs: [
      { label: 'Комната', value: 'Гостиная' },
      { label: 'Тип', value: 'Стол' },
    ],
  },
  {
    id: 'bed',
    name: 'Двуспальная кровать',
    specs: [
      { label: 'Комната', value: 'Спальня' },
      { label: 'Тип', value: 'Кровать' },
    ],
  },
  {
    id: 'chest',
    name: 'Комод',
    specs: [
      { label: 'Комната', value: 'Спальня' },
      { label: 'Тип', value: 'Хранение' },
    ],
  },
  {
    id: 'dining-set',
    name: 'Обеденная группа',
    specs: [
      { label: 'Комната', value: 'Столовая' },
      { label: 'Тип', value: 'Стол и стулья' },
    ],
  },
];
