import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import {ContactForm} from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CookieConsent from "./components/Cookie/CookieConsent";

function App() {
  return (
    <div className="App">
    <CookieConsent />
      <Header />
      <div className="bodyContainer">
        <Hero />
        <About />
        <Services />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
