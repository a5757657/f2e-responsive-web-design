import React from "react";
import "./index.scss";
import WeekCard from "./WeekCard";
import { data } from "./data";
import { Btn } from "../../components/Button";
import pink from "../../asset/Img/pink_opacity.svg";
import green from "../../asset/Img/green_opacity.svg";
import purple from "../../asset/Img/purple_opacity.svg";
import blue from "../../asset/Img/blue_opacity.svg";
import curlyLine from "../../asset/Img/curlyLine_opacity.svg";
import stars from "../../asset/Img/stars.svg";
import dotLine from "../../asset/Img/dotLine.svg";
import EventInfoCard from "./EventInfoCard";
import { eventInfoData } from "./data";

const SolutionAndEvent = () => {
  return (
    <div className="SolutionAndEvent">
      <div className="BackgroundContainer">
        <img
          className="BackgroundElement blue"
          src={blue}
          alt="backgroundElement"
        />
        <img
          className="BackgroundElement curlyLine"
          src={curlyLine}
          alt="backgroundElement"
        />
        <img
          className="BackgroundElement purple"
          src={purple}
          alt="backgroundElement"
        />
        <img
          className="BackgroundElement stars"
          src={stars}
          alt="backgroundElement"
        />
        <img
          className="BackgroundElement green"
          src={green}
          alt="backgroundElement"
        />
        <img
          className="BackgroundElement pink"
          src={pink}
          alt="backgroundElement"
        />
      </div>
      <div className="Main">
        <div className="SectionTitle">年度最強合作，三大主題來襲</div>
        <div className="SectionSubtitle">
          各路廠商強強聯手，共同設計出接地氣的網頁互動挑戰關卡
        </div>
        {data.map((item, index) => (
          <WeekCard
            key={item.title + index}
            index={index + 1}
            title={item.title}
            tag1={item.tag1}
            tag2={item.tag2}
            timeRange1={item.timeRange1}
            timeRange2={item.timeRange2}
            exLink={item.exLink}
          />
        ))}
        <div className="EventInfoContainer">
          <div className="Title">活動說明</div>
          <div className="CardsContainer">
            <img className="DotLine" src={dotLine} alt="dotLine" />
            <div className="SideContainer Right">
              <EventInfoCard
                title={eventInfoData[0].title}
                description={eventInfoData[0].description}
              />
              <EventInfoCard
                title={eventInfoData[2].title}
                description={eventInfoData[2].description}
              />
            </div>
            <div className="SideContainer Left">
              <EventInfoCard
                title={eventInfoData[1].title}
                description={eventInfoData[1].description}
              />
              <EventInfoCard
                title={eventInfoData[3].title}
                description={eventInfoData[3].description}
              />
            </div>
          </div>
          <div className="CardsContainer-Mobile">
            {eventInfoData.map((item, index) => (
              <EventInfoCard
                key={item.title + index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="TheButtonContainer">
        <Btn content="我要報名" />
      </div>
    </div>
  );
};

export default SolutionAndEvent;
