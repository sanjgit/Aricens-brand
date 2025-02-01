import './App.css';
import * as THREE from 'three'; // ✅ Correct

function App() {

  const canvas = document.getElementById('globeCanvas');

  if (!canvas) {
      console.error('Canvas element not found');
  } else {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas });

      renderer.setSize(window.innerWidth, window.innerHeight);

      const geometry = new THREE.SphereGeometry(5, 32, 32);
      const material = new THREE.MeshStandardMaterial({ color: 0x4dd0e1 });
      const sphere = new THREE.Mesh(geometry, material);

      scene.add(sphere);
      camera.position.z = 10;

      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(10, 10, 10);
      scene.add(light);

      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
      });

      function animate() {
          requestAnimationFrame(animate);
          sphere.rotation.y += 0.01;
          renderer.render(scene, camera);
      }

      animate();
  }

  return (
    <div className="App">
      <header>
      <div class="logo">Futuristic IT</div>
      <nav>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#contact">Contact Us</a>
      </nav>
  </header>

  <div class="hero" id="home">
      <canvas class="hero-canvas" id="globeCanvas"></canvas>
      <div class="hero-content">
          <h1>Innovating Tomorrow's Technology</h1>
          <p>Your Partner in Advanced IT Solutions</p>
          <div class="cta-buttons">
              <a href="#services">Our Services</a>
              <a href="#contact">Get in Touch</a>
          </div>
      </div>
  </div>

  <section id="about">
      <h2>About Us</h2>
      <p>We specialize in delivering futuristic IT consulting services, leveraging advanced technologies to drive innovation.</p>
  </section>

  <section id="services">
      <h2>Our Services</h2>
      <div class="services">
          <div class="card">
              <h3>Cloud Solutions</h3>
              <p>Scalable and secure cloud services for modern businesses.</p>
          </div>
          <div class="card">
              <h3>AI Integration</h3>
              <p>Revolutionize operations with advanced AI-powered tools.</p>
          </div>
          <div class="card">
              <h3>Cybersecurity</h3>
              <p>Protect critical assets with next-gen security solutions.</p>
          </div>
      </div>
  </section>

  <section id="case-studies">
      <h2>Case Studies</h2>
      <div class="case-studies">
          <div class="card">
              <h3>Project Alpha</h3>
              <p>Enhanced operations with 50% improved efficiency using cloud solutions.</p>
          </div>
          <div class="card">
              <h3>SecureTech</h3>
              <p>Reduced cybersecurity breaches by 80% with cutting-edge protection.</p>
          </div>
      </div>
  </section>

  <section id="contact">
      <h2>Contact Us</h2>
      <p>Reach out to discuss how we can transform your business.</p>
  </section>

  <footer>
      <p>&copy; 2025 Futuristic IT Consulting. All rights reserved.</p>
  </footer>

    </div>
  );
}

export default App;
