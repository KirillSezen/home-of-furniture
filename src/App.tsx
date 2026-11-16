import AboutSection from './components/AboutSection';
import CategoriesSection from './components/CategoriesSection';
import CollectionSection from './components/CollectionSection';
import ContactsSection from './components/ContactsSection';
import Hero from './components/Hero';
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
        <CategoriesSection />
        <CollectionSection />
        <AboutSection />
        <ContactsSection />
      </main>

      <SiteFooter />
    </>
  );
}

export default App;
