import CTA from './components/CTA';
import Features from './components/Features';
import Footer from './components/Footer';
import Form from './components/Form';
import Hero from './components/Hero';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <header>
        {/* <Nav /> */}
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
    </>
  );
}

export default App;
