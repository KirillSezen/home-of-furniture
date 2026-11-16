import PageSection from './PageSection';

import './AboutSection.css';

const STEPS = [
  {
    title: 'Измерьте помещение',
    text: 'Запишите размеры комнаты, дверных проёмов и места, где будет стоять мебель.',
  },
  {
    title: 'Подумайте, как будете пользоваться',
    text: 'Отдых, хранение, приём гостей — от этого зависят размер, форма и материалы.',
  },
  {
    title: 'Свяжитесь с нами',
    text: 'Расскажите о своей задаче, и мы ответим на вопросы и поможем сориентироваться.',
  },
];

/** Нейтральный блок о выборе мебели — без фактов о конкретном магазине. */
function AboutSection() {
  return (
    <PageSection id="about" title="О магазине">
      <div className="about__inner">
        <div className="about__intro">
          <p>
            Мебель выбирают надолго, поэтому важно, чтобы она подходила и по размеру, и по характеру
            дома. Спокойный выбор начинается с того, как вы живёте.
          </p>
          <p>
            Мы поможем разобраться в вариантах: подскажем, на что обратить внимание, и ответим на
            вопросы о мебели из подборки.
          </p>
        </div>

        <ol className="about__steps">
          {STEPS.map((step, index) => (
            <li key={step.title} className="about__step">
              <span className="about__step-number" aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <h3 className="about__step-title">{step.title}</h3>
                <p className="about__step-text">
                  {step.text}
                  {index === STEPS.length - 1 && (
                    <>
                      {' '}
                      <a href="#contacts">Перейти к контактам</a>
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
