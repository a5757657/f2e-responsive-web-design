import React from "react";
import "./index.scss";

// Images
import q11 from "../../asset/AskQuesSponsor/AskQuestion/1-1png";
import q12 from "../../asset/AskQuesSponsor/AskQuestion/1-2png";
import q13 from "../../asset/AskQuesSponsor/AskQuestion/1-3png";
import q14 from "../../asset/AskQuesSponsor/AskQuestion/1-4png";
import q21 from "../../asset/AskQuesSponsor/AskQuestion/2-1png";
import q22 from "../../asset/AskQuesSponsor/AskQuestion/2-2png";
import q23 from "../../asset/AskQuesSponsor/AskQuestion/2-3png";
import q24 from "../../asset/AskQuesSponsor/AskQuestion/2-4png";
import q31 from "../../asset/AskQuesSponsor/AskQuestion/3-1png";
import q32 from "../../asset/AskQuesSponsor/AskQuestion/3-2png";
import q33 from "../../asset/AskQuesSponsor/AskQuestion/3-3png";
import q34 from "../../asset/AskQuesSponsor/AskQuestion/3-4png";

const index = () => {
  return (
    <div className="AskOuestion">
      <div className="title">你是否也有以下困擾？</div>
      <div className="container">
        <div className="grid">
          <div className="block">
            <div className="picGroup">
              <img id="" className="pic pic1" src={q11} alt=""/>
              <img id="" className="pic pic2" src={q12} alt=""/>
              <img id="" className="pic pic3" src={q13} alt=""/>
              <img id="" className="pic pic4" src={q14} alt=""/>
            </div>
            <div className="Ques">羨慕別人的酷酷網頁動畫？</div>
          </div>
          <div className="block">
          <div className="picGroup">
              <img id="" className="pic pic1" src={q21} alt=""/>
              <img id="" className="pic pic2" src={q22} alt=""/>
              <img id="" className="pic pic3" src={q23} alt=""/>
              <img id="" className="pic pic4" src={q24} alt=""/>
            </div>
            <div className="Ques">滿足不了同事的許願？</div>
          </div>
          <div className="block">
          <div className="picGroup">
              <img id="" className="pic pic1" src={q31} alt=""/>
              <img id="" className="pic pic2" src={q32} alt=""/>
              <img id="" className="pic pic3" src={q33} alt=""/>
              <img id="" className="pic pic4" src={q34} alt=""/>
            </div>
            <div className="Ques">動畫技能樹太雜無從下手？</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
