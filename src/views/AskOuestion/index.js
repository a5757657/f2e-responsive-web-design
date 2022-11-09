import React from "react";
import "./index.scss";
// import '../../styles/global.scss';

const index = () => {
  return (
    <div className="AskOuestion">
      <div className="title">你是否也有以下困擾？</div>
      <div className="container">
        <div className="grid">
          <div className="block">
            <div className="picGroup">
              <img id="" className="pic pic1" src="" alt=""/>
              <img id="" className="pic pic2" src="" alt=""/>
              <img id="" className="pic pic3" src="" alt=""/>
              <img id="" className="pic pic4" src="" alt=""/>
            </div>
            <div className="Ques">羨慕別人的酷酷網頁動畫？</div>
          </div>
          <div className="block">
          <div className="picGroup">
              <img id="" className="pic pic1" src="" alt=""/>
              <img id="" className="pic pic2" src="" alt=""/>
              <img id="" className="pic pic3" src="" alt=""/>
              <img id="" className="pic pic4" src="" alt=""/>
            </div>
            <div className="Ques">滿足不了同事的許願？</div>
          </div>
          <div className="block">
          <div className="picGroup">
              <img id="" className="pic pic1" src="" alt=""/>
              <img id="" className="pic pic2" src="" alt=""/>
              <img id="" className="pic pic3" src="" alt=""/>
              <img id="" className="pic pic4" src="" alt=""/>
            </div>
            <div className="Ques">動畫技能樹太雜無從下手？</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
