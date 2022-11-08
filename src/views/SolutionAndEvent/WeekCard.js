import React from "react";
import "./weekCard.scss";

const WeekCard = (props) => {
  const { index, title, tag1, tag2, timeRange1, timeRange2 } = props;
  return (
    <div className={`Container Order${index}`}>
      <div className="WeekCard">
        <div className="Top">
          <div className="TitleContainer">
            <h4 className="Title">Week {index}</h4>
          </div>
          <div className="SubtitleContainer">
            <div className="Subtitle">
              <span>{title}</span>
            </div>
            <div className="TagsContainer">
              <div className="Tag">
                <span>{tag1}</span>
              </div>
              <div className="Tag">
                <span>{tag2}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="Bottom">
          <div className="InfoContainer">
            <div className="InfoGroup">
              <div className="InfoTitle">UI 組投稿區間：</div>
              <div className="InfoContent">{timeRange1}</div>
            </div>
            <div className="InfoGroup">
              <div className="InfoTitle">前端組投稿區間：</div>
              <div className="InfoContent">{timeRange2}</div>
            </div>
          </div>
          <div className="DetailedButton">關卡細節</div>
        </div>
      </div>
    </div>
  );
};

export default WeekCard;
