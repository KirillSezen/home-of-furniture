import Placeholder from './Placeholder';

import './Hero.css';

/** Первый экран. Тексты — нейтральные заглушки до согласования реальных. */
function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 id="hero-title">Главный заголовок сайта</h1>
          <p className="hero__lead">
            Здесь будет короткое описание магазина. Текст появится после согласования.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#catalog">
              Перейти к каталогу
            </a>
            <a className="button button--secondary" href="#contacts">
              Контакты
            </a>
          </div>
        </div>

        <Placeholder kind="image" label="Место для фотографии интерьера" />
      </div>
    </section>
  );
}

export default Hero;
