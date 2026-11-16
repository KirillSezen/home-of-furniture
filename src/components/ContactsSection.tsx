import { STORE } from '../data/store';
import PageSection from './PageSection';
import StoreValue from './StoreValue';

import './ContactsSection.css';

/** Поля и способ вывода. Значения берутся из src/data/store.ts. */
const FIELDS = [
  { key: 'name' },
  { key: 'phone', linkAs: 'tel' },
  { key: 'email', linkAs: 'mailto' },
  { key: 'address' },
  { key: 'hours' },
] as const;

function ContactsSection() {
  return (
    <PageSection
      id="contacts"
      title="Контакты"
      lead="Позвоните или напишите — ответим на вопросы о мебели из подборки."
      tone="muted"
    >
      <div className="contacts__card">
        <dl className="contacts__list">
          {FIELDS.map((item) => (
            <div key={item.key} className="contacts__row">
              <dt>{STORE[item.key].label}</dt>
              <dd>
                <StoreValue
                  field={STORE[item.key]}
                  linkAs={'linkAs' in item ? item.linkAs : undefined}
                />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </PageSection>
  );
}

export default ContactsSection;
