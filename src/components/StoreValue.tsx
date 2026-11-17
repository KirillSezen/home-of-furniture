import { STORE } from '../data/store';
import type { StoreFieldKey } from '../data/store';
import { useI18n } from '../i18n/useI18n';

import './StoreValue.css';

type StoreValueProps = {
  field: StoreFieldKey;
  /** Как превратить значение в ссылку */
  linkAs?: 'tel' | 'mailto';
};

/**
 * Значение из src/data/store.ts. Если значения нет — выводит заглушку
 * в пунктирной рамке с пометкой «заглушка» для скринридеров.
 */
function StoreValue({ field, linkAs }: StoreValueProps) {
  const { t } = useI18n();
  const value = STORE[field];

  if (!value) {
    return (
      <span className="store-slot">
        {t.contacts.placeholders[field]}
        <span className="visually-hidden"> ({t.contacts.placeholderNote})</span>
      </span>
    );
  }

  if (linkAs === 'tel') {
    return <a href={`tel:${value.replace(/[^\d+]/g, '')}`}>{value}</a>;
  }

  if (linkAs === 'mailto') {
    return <a href={`mailto:${value}`}>{value}</a>;
  }

  return <>{value}</>;
}

export default StoreValue;
