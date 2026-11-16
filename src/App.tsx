import Hero from './components/Hero';
import PageSection from './components/PageSection';
import Placeholder from './components/Placeholder';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержимому
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />

        <PageSection id="catalog" title="Каталог" lead="Раздел будет заполнен на следующем этапе.">
          <Placeholder label="Здесь появится каталог мебели" />
        </PageSection>

        <PageSection
          id="about"
          title="О магазине"
          lead="Раздел будет заполнен на следующем этапе."
          tone="muted"
        >
          <Placeholder label="Здесь появится рассказ о магазине" />
        </PageSection>

        <PageSection
          id="contacts"
          title="Контакты"
          lead="Раздел будет заполнен на следующем этапе."
        >
          <Placeholder label="Здесь появятся контакты и способы связи" />
        </PageSection>
      </main>

      <SiteFooter />
    </>
  );
}

export default App;
