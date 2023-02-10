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
        <Hero />
        <Form />
        <Features />
        <CTA />
        <Footer />
      </UrlProvider>
    </>
  );
}

export default App;
