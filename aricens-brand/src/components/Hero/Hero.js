import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./Hero.css";
// import HomeImage from "../../../public/assets/Home";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 1); // Set background to transparent

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0x4dd0e1, 
      metalness: 0.6,  
      roughness: 0.1,  
    });
    const sphere = new THREE.Mesh(geometry, material);

    scene.add(sphere);
    camera.position.z = 10;
    

    const light = new THREE.PointLight(0xffffff, 10, 5000, 1);
    light.position.set(5, 5, 5);
    light.castShadow = true;
    light.shadow.radius = 100;
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    let animationFrameId;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero" id="home">
      {/* <canvas className="hero-canvas" ref={canvasRef}></canvas> */}
      <div className="hero-content">
        <h1>Innovating Tomorrow's Technology</h1>
        <p>Your Partner in Advanced IT Solutions</p>
        <div className="cta-buttons">
          <a href="#services">Our Services</a>
          <a href="#contact">Get in Touch</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
