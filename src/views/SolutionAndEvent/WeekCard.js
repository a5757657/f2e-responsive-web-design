import React, { useEffect } from "react";
import "./weekCard.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const WeekCard = (props) => {
  const { index, title, tag1, tag2, timeRange1, timeRange2 } = props;
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`Container Order${index}`}>
      <div
        className="WeekCard"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        <div className="Top">
          <div className="TitleContainer">
            <h4 className="Title">{`Week ${index}`}</h4>
            <h4 className="Title TitleFilled">{`Week ${index}`}</h4>
          </div>
          <div className="SubtitleContainer">
            <div className="Subtitle">
              <span>{title}</span>
              <span className="SubtitleFilled">{title}</span>
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
          <div className="DetailedButtonContainer">
            <div className="DetailedButton">
              <p className="ButtonText">關卡細節</p>
            </div>
            <div className="DetailedButton ButtonFilled">
              <p className="ButtonText">關卡細節</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekCard;
