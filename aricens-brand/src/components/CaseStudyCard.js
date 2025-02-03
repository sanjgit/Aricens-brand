const CaseStudyCard = ({ title, description }) => {
    return (
      <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

  export default CaseStudyCard;