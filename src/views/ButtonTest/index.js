import React from "react";
import "./index.scss";

const Banner = () => {
  return (
    <div className="Buttontest">
      <div className="box">
        <p className="testTitle">Btn測試</p>
      </div>
      <div className="wrap">
        <button className="btn btn-cta" id="btn01">
          我要報名
        </button>
        <button className="btn btn-tag" id="btn03">
          常見問答
        </button>
      </div>
    </div>
  );
};

export default Banner;
