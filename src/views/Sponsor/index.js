import React from "react";
import "./index.scss";
// Images
import block from "./../../asset/AskQuesSponsor/Sponsor/BlockStudio.png"
import titan from "./../../asset/AskQuesSponsor/Sponsor/TitanSoft.png"
import kdan from "./../../asset/AskQuesSponsor/Sponsor/KDAN.png"

const Sponsor = () => {
  return (
    <div className="Sponsor">
      <div className="title">贊助單位</div>
      <div className="container">
        <div className="wrapper">
          <div className="bg">
            <img id="titansoft" src={titan} alt="新加坡商 鈦坦科技" />
          </div>
          <div className="bg">
            <img id="kdan" src={block} alt="" />
          </div>
          <div className="bg">
            <img id="blockstudio" src={kdan} alt="板塊設計" />
          </div>
        </div>
        <div className="cooper">
          <p>共同推廣 JIRA、miro、DottedSign</p>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
