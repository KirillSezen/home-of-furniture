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
    image: { src: livingRoomPhoto, alt: 'Фото гостиной из раздела категории' },
  },
  {
    id: 'bedroom',
    title: 'Спальня',
    description: 'Например, кровати, прикроватные тумбы и комоды.',
    image: { src: bedroomPhoto, alt: 'Фото спальни из раздела категории' },
  },
  {
    id: 'dining-room',
    title: 'Столовая',
    description: 'Например, обеденные столы и стулья.',
    image: { src: diningRoomPhoto, alt: 'Фото кухни из раздела категории' },
  },
  {
    id: 'storage',
    title: 'Хранение',
    description: 'Например, комоды, стеллажи и шкафы.',
    image: { src: storagePhoto, alt: 'Фото гардероба из раздела категории' },
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
    image: { src: sofaPhoto, alt: 'Фото дивана из подборки мебели' },
  },
  {
    id: 'armchair',
    name: 'Кресло для отдыха',
    specs: [
      { label: 'Комната', value: 'Гостиная' },
      { label: 'Тип', value: 'Кресло' },
    ],
    image: { src: armchairPhoto, alt: 'Фото стула из подборки мебели' },
  },
  {
    id: 'coffee-table',
    name: 'Журнальный столик',
    specs: [
      { label: 'Комната', value: 'Гостиная' },
      { label: 'Тип', value: 'Стол' },
    ],
    image: { src: coffeeTablePhoto, alt: 'Фото журнального столика из подборки мебели' },
  },
  {
    id: 'bed',
    name: 'Двуспальная кровать',
    specs: [
      { label: 'Комната', value: 'Спальня' },
      { label: 'Тип', value: 'Кровать' },
    ],
    image: { src: bedPhoto, alt: 'Фото кровати из подборки мебели' },
  },
  {
    id: 'chest',
    name: 'Комод',
    specs: [
      { label: 'Комната', value: 'Спальня' },
      { label: 'Тип', value: 'Хранение' },
    ],
    image: { src: chestPhoto, alt: 'Фото комода из подборки мебели' },
  },
  {
    id: 'dining-set',
    name: 'Обеденная группа',
    specs: [
      { label: 'Комната', value: 'Столовая' },
      { label: 'Тип', value: 'Стол и стулья' },
    ],
    image: { src: diningSetPhoto, alt: 'Фото кухонного набора из подборки мебели' },
  },
];
