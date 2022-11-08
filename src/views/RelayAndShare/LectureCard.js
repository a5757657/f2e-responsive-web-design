import React from "react";
import "./LectureCard.scss";

const LectureCard = (props) => {
  const { title, time, lecturer } = props;
  return (
    <div className="LectureCard">
      <div className="Title">{title}</div>
      <div className="Info">
        <p className="Time">{time}</p>
        <p className="Lecturer">{lecturer}</p>
      </div>
      <div className="LinkButton">免費公開場</div>
    </div>
  );
};

export default LectureCard;
