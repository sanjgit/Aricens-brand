import ServiceCard from './ServiceCard';

const Services = () => {
    const services = [
      { title: "Cloud Solutions", description: "Scalable and secure cloud services for modern businesses." },
      { title: "AI Integration", description: "Revolutionize operations with advanced AI-powered tools." },
      { title: "Cybersecurity", description: "Protect critical assets with next-gen security solutions." },
    ];
  
    return (
      <section id="services">
        <h2>Our Services</h2>
        <div className="services">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
    );
  };

  export default Services;