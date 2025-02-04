import "./Hero.css";

const Hero = () => {

  return (
    <div className="hero" id="home">
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <h1>Innovating Tomorrow's Technology</h1>
    <p>Your Partner in Advanced IT Solutions</p>
    <div className="cta-buttons">
      <a href="#services" className="btn">Our Services</a>
      <a href="#contact" className="btn">Get in Touch</a>
    </div>
  </div>
</div>

  );
};

export default Hero;
