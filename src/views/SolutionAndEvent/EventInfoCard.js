import React from "react";
import "./EventInfoCard.scss";

const EventInfoCard = (props) => {
  const { title, description } = props;
  return (
    <div className="EventInfoCard">
      <div className="CardTitle">{title}</div>
      <div className="CardDescription">
        {description.map((item, index) => (
          <p key={item[0] + index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default EventInfoCard;
