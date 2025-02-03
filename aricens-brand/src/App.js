import './App.css';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
