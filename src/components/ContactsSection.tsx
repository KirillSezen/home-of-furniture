import { useI18n } from '../i18n/useI18n';
import PageSection from './PageSection';
import StoreValue from './StoreValue';

import './ContactsSection.css';

/** Поля и способ вывода. Значения — в src/data/store.ts, подписи — в src/i18n/messages.ts. */
const FIELDS = [
  { key: 'name' },
  { key: 'phone', linkAs: 'tel' },
  { key: 'email', linkAs: 'mailto' },
  { key: 'address' },
  { key: 'hours' },
] as const;

function ContactsSection() {
  const { t } = useI18n();

  return (
    <PageSection id="contacts" title={t.contacts.title} lead={t.contacts.lead} tone="muted">
      <div className="contacts__card">
        <dl className="contacts__list">
          {FIELDS.map((item) => (
            <div key={item.key} className="contacts__row">
              <dt>{t.contacts.labels[item.key]}</dt>
              <dd>
                <StoreValue field={item.key} linkAs={'linkAs' in item ? item.linkAs : undefined} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </PageSection>
  );
}

export default ContactsSection;
