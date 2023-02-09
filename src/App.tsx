import CTA from './components/CTA';
import Features from './components/Features';
import Footer from './components/Footer';
import Form from './components/Form';
import Hero from './components/Hero';
import { UrlProvider } from './context/UrlContext';

function App() {
  return (
    <>
      <UrlProvider>
        <header>
          <Hero />
        </header>
        <main>
          <Form />
        </main>
        <section>
          <Features />
        </section>
        <CTA />
        <footer>
          <Footer />
        </footer>
      </UrlProvider>
    </>
  );
}

export default App;
