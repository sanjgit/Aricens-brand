import React from "react";
import "./About.css"; // Import external CSS for styling
import ServiceCard from "../Services/ServicesCard/ServiceCard";
import AboutCard from "./AboutCard/AboutCard";
import nandaImage from "../../img/nanda.png";
import sanjeevImage from "../../img/sanjeev.jpeg";
import DataService from "../../services/DataService";
import ExpertiseCard from "./ExpertiseCard/ExpertiseCard";

const About = () => {

  const aboutAricens = [
    { title: "Mission", description: "To empower businesses with innovative technology solutions that drive growth and efficiency." },
      { title: "Vision", description: "A future where technology and humanity coexist seamlessly, unlocking limitless possibilities." }
  ];

  const team = [
    { name: "Nandakumar Shivaramareddy", role: "", avatar: nandaImage },
    { name: "Sanjeevkumar Ujjinkopp", role: "", avatar: sanjeevImage }
  ];

  const expertisedAreas = DataService.getExpertisedAreasData();
console.log(expertisedAreas);
  return (
    <section id="about">
      <h2>About Us</h2>
      <div className="aboutus">
        {aboutAricens.map((about, index) => (
          <ServiceCard key={index} {...about} />
        ))}
      </div>

      <h2>Innovative Solutions for Your Business</h2>
      <div>
      <ExpertiseCard data={expertisedAreas}/>
      </div>

      <h2>Meet the Team</h2>
      <div className="aboutus">
        {team.map((t, index) => (
          <AboutCard key={index} {...t} />
        ))}
      </div>
  </section>
  );
}

export default About;