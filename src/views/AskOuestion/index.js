import React from "react";
import "./index.scss";
// import '../../styles/global.scss';

const index = () => {
  return (
    <div className="AskOuestion">
      <div className="title">你是否也有以下困擾？</div>
      <div className="container">
        <div className="grid">
          <img id="" src="" alt="" />
          <div className="Q1">
            <p>羨慕別人的酷酷網頁動畫？</p>
          </div>
          <div className="box">
            <div className="Q2">
              <p>滿足不了同事的許願？</p>
            </div>
            <img id="" className="none" src="" alt="" />
          </div>
          <div className="box">
            <img id="" className="" src="" alt="" />
            <div className="Q2 none">
              <p>滿足不了同事的許願？</p>
            </div>
          </div>
          <img id="" src="" alt="" />
          <div className="Q3">
            <p>動畫技能樹太雜無從下手？</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
