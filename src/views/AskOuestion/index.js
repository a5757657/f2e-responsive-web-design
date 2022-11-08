import React from "react";
import { Form } from "react-router-dom";
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
          <div className="blocks">
            <img id="" src="" alt="" />
            <div className="Q1">羨慕別人的酷酷網頁動畫？</div>
          </div>
          <div className="blocks">
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
