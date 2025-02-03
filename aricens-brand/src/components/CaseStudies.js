import CaseStudyCard from "./CaseStudyCard";

const CaseStudies = () => {
    const studies = [
      { title: "Project Alpha", description: "Enhanced operations with 50% improved efficiency using cloud solutions." },
      { title: "SecureTech", description: "Reduced cybersecurity breaches by 80% with cutting-edge protection." },
    ];
  
    return (
      <section id="case-studies">
        <h2>Case Studies</h2>
        <div className="case-studies">
          {studies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </section>
    );
  };

  export default CaseStudies;