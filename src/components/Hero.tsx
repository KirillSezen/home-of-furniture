import { useI18n } from '../i18n/useI18n';
import ImageSlot from './ImageSlot';

import './Hero.css';

import heroPhoto from '../assets/hero.png';

/** Первый экран: приветствие, заголовок и ссылки к каталогу и контактам. */
function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 id="hero-title">{t.hero.title}</h1>
          <p className="hero__lead">{t.hero.lead}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#catalog">
              {t.hero.primaryAction}
            </a>
            <a className="button button--secondary" href="#contacts">
              {t.hero.secondaryAction}
            </a>
          </div>
        </div>

        <ImageSlot className="hero__media" src={heroPhoto} alt={t.hero.imageAlt} priority />
      </div>
    </section>
  );
}

export default Hero;
