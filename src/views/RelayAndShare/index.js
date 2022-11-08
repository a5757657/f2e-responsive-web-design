import React from "react";
import "./index.scss";
import { data } from "./data";
import LectureCard from "./LectureCard";

const RelayAndShare = () => {
  return (
    <div className="RelayAndShare">
      <div className="SectionTitle">各界大神接力分享</div>
      <div className="CardsContainer">
        {data.map((item) => (
          <LectureCard
            title={item.title}
            time={item.time}
            lecturer={item.lecturer}
          />
        ))}
      </div>
    </div>
  );
};

export default RelayAndShare;
