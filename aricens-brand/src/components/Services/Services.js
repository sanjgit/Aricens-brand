import ServiceCard from './ServicesCard/ServiceCard';
import "./Services.css";

const Services = () => {
    const services = [
      { title: "Cloud & IT Infrastructure", description: "Build scalable, secure, and resilient IT ecosystems with our cloud solutions and DevOps expertise." },
      { title: "AI & Machine Learning", description: "Transform your business with intelligent automation, predictive analytics, and AI-driven decision-making." },
      { title: "Data Analytics & Insights", description: "Turn raw data into actionable intelligence with AI-powered dashboards and real-time analytics." },
      { title: "Digital Transformation", description: "Reimagine your business processes with cutting-edge tools and technologies designed for the future." },
      { title: "Maintenance and Support", description: "" },
      { title: "Automation Testing", description: "" },
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