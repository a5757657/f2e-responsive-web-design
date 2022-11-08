import React from "react";
import "./index.scss";
import WeekCard from "./WeekCard";
import { data } from "./data";
import { Btn } from "../../components/Button";

const SolutionAndEvent = () => {
  return (
    <div className="SolutionAndEvent">
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
          />
        ))}
      </div>
      <div className="EventInfo">
        <div className="Title">活動說明</div>
        <div className="Descriptions">
          <p className="Description">
            1. 報名時間：10/13～10/30，報名截止前可修改報名組別。
          </p>
          <p className="Description">
            2.
            登錄作品：10/31～11/28，依賽程登錄作品：10/31（一）UI、團體組開賽；11/7（一）前端組開賽
          </p>
          <p className="Description">3. 額外競賽：主題豐厚獎金等著你</p>
          <p className="Description">
            4. 活動採用 UI、前端接力合作形式，前端工程師可採用 UI
            設計師的設計稿，一同產出完整作品。
          </p>
        </div>
      </div>
      <Btn>我要報名</Btn>
    </div>
  );
};

export default SolutionAndEvent;
