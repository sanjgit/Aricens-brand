import "../AboutCard/AboutCard.css";
import highlightIcon from "../../../img/highlight.svg";
import { Fragment } from "react";

const ExpertiseCard = ({ data }) => {
    return (
        <div className="aboutus">
            {data.map((area, index) => (
                <div className="card">
                    <h3>{area.title}</h3>
                    <p className="description">{area.description}</p>
                    <div>{area.highlights.map((highlight, i) => (
                        <div className="highlightsContainer">
                            <img src={highlightIcon} alt="Work highlight"/>
                            <p key={i}>{highlight}</p>
                        </div>
                        ))}
                    </div>
                </div>
            ))}
      </div>
    );
  };

  export default ExpertiseCard;