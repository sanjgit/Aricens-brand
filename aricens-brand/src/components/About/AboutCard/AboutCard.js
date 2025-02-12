import "./AboutCard.css";

const AboutCard = ({ name, role, avatar }) => {
    return (
      <div className="card">
        <div className="image-container "><img className="team-avatar" src={avatar} alt="Team member avatar"/></div>
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    );
  };

  export default AboutCard;