import type { StoreField } from '../data/store';

import './StoreValue.css';

type StoreValueProps = {
  field: StoreField;
  /** Как превратить реальное значение в ссылку */
  linkAs?: 'tel' | 'mailto';
};

/**
 * Значение из данных магазина. Пока значения нет — выводит заглушку
 * в пунктирной рамке с пометкой «заглушка» для скринридеров.
 */
function StoreValue({ field, linkAs }: StoreValueProps) {
  if (!field.value) {
    return (
      <span className="store-slot">
        {field.placeholder}
        <span className="visually-hidden"> (заглушка)</span>
      </span>
    );
  }

  if (linkAs === 'tel') {
    return <a href={`tel:${field.value.replace(/[^\d+]/g, '')}`}>{field.value}</a>;
  }

  if (linkAs === 'mailto') {
    return <a href={`mailto:${field.value}`}>{field.value}</a>;
  }

  return <>{field.value}</>;
}

export default StoreValue;
