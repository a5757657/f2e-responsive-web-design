import React from "react";
import "./index.scss";
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";

// Images
import star1 from "./../../asset/AskQuesSponsor/Sponsor/1.png";
import star2 from "./../../asset/AskQuesSponsor/Sponsor/2.png";
import star3 from "./../../asset/AskQuesSponsor/Sponsor/3.png";
import block from "./../../asset/AskQuesSponsor/Sponsor/BlockStudio.png";
import titan from "./../../asset/AskQuesSponsor/Sponsor/TitanSoft.png";
import kdan from "./../../asset/AskQuesSponsor/Sponsor/KDAN.png";

// Links
const titanLink = "https://titansoft.com/tw";
const kdanLink = "https://www.kdanmobile.com/zh-tw";
const blockLink = "https://blockstudio.tw";

const Sponsor = () => {
  return (
    <div className="Sponsor">
      <div className="bg">
        <img id="star1" className="star" src={star1} alt="星星" />
        <img id="star2" className="star" src={star2} alt="星星" />
        <img id="star3" className="star" src={star3} alt="星星" />
      </div>
      <div className="title">贊助單位</div>
      <div className="container">
        <div className="wrapper">
          {/* <Link to={titanLink}> */}
          <div className="blocks">
            <div className="word">鈦坦科技</div>
            <img id="titansoft" src={titan} alt="新加坡商 鈦坦科技" />
          </div>
          {/* </Link> */}
          {/* <Link to={kdanLink}> */}
          <div className="blocks">
            <div className="word">凱鈿科技</div>
            <img id="kdan" src={block} alt="凱鈿科技" />
          </div>
          {/* </Link> */}
          {/* <Link to={blockLink}> */}
          <div className="blocks">
            <div className="word">板塊設計</div>
            <img id="blockstudio" src={kdan} alt="板塊設計" />
          </div>
          {/* </Link> */}
        </div>
        <div className="cooper">
          <p>共同推廣 JIRA、miro、DottedSign</p>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
