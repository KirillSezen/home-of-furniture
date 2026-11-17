import { useI18n } from '../i18n/useI18n';
import PageSection from './PageSection';

import './AboutSection.css';

/** Нейтральный блок о выборе мебели — без фактов о конкретном магазине. */
function AboutSection() {
  const { t } = useI18n();
  const { steps } = t.about;

  return (
    <PageSection id="about" title={t.about.title}>
      <div className="about__inner">
        <div className="about__intro">
          {t.about.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ol className="about__steps">
          {steps.map((step, index) => (
            <li key={step.title} className="about__step">
              <span className="about__step-number" aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <h3 className="about__step-title">{step.title}</h3>
                <p className="about__step-text">
                  {step.text}
                  {index === steps.length - 1 && (
                    <>
                      {' '}
                      <a href="#contacts">{t.about.contactsLink}</a>
                    </>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </PageSection>
  );
}

export default AboutSection;
