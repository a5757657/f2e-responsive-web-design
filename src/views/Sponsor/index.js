import React from "react";
import "./index.scss";
import AOS from 'aos'
import 'aos/dist/aos.css'

// Images
import block from "./../../asset/AskQuesSponsor/Sponsor/BlockStudio.png"
import titan from "./../../asset/AskQuesSponsor/Sponsor/TitanSoft.png"
import kdan from "./../../asset/AskQuesSponsor/Sponsor/KDAN.png"

// Links
const titanLink = "https://titansoft.com/tw"
const kdanLink = "https://www.kdanmobile.com/zh-tw"
const blockLink = "https://blockstudio.tw"

const Sponsor = () => {
  return (
    <div className="Sponsor">
      <div className="bg">
        <img src=""/>
      </div>
      <div className="title">贊助單位</div>
      <div className="container">
        <div className="wrapper">
          <LINK to={titanLink}>
          <div className="blocks"  data-aos="fade-left" data-aos-anchor-placement="top-bottom">
            <div className="word">鈦坦科技</div>
            <img id="titansoft" src={titan} alt="新加坡商 鈦坦科技" />
          </div>
          </LINK>
          <LINK to={kdanLink}>
          <div className="blocks"  data-aos-anchor-placement="top-bottom">
            <div className="word">凱鈿科技</div>
            <img id="kdan" src={block} alt="凱鈿科技" />
          </div>
          </LINK>
          <LINK to={blockLink}>
          <div className="blocks" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
            <div className="word">板塊設計</div>
            <img id="blockstudio" src={kdan} alt="板塊設計" />
          </div>
          </LINK>
        </div>
        <div className="cooper">
          <p>共同推廣 JIRA、miro、DottedSign</p>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
