import ImageSlot from './ImageSlot';

import './Hero.css';

import heroPhoto from '../assets/hero.png';

/** Первый экран: приветствие, заголовок и ссылки к подборке и контактам. */
function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Добро пожаловать</p>
          <h1 id="hero-title">Мебель для уютного дома</h1>
          <p className="hero__lead">
            Гостиная, спальня, столовая — посмотрите примеры мебели и свяжитесь с нами, чтобы
            обсудить, что подойдёт вашему дому.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#collection">
              Смотреть подборку
            </a>
            <a className="button button--secondary" href="#contacts">
              Связаться с нами
            </a>
          </div>
        </div>

        <ImageSlot
          image={{ src: heroPhoto, alt: 'Основное фото сайта с нашей мебелью' }}
          className="hero__media"
          label="Место для фотографии интерьера"
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
