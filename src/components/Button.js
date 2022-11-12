import React from "react";
import "./Button.scss";

export const Btn = (props) => {
  const { content } = props;
  return (
    <div
      className="ButtonContainer"
      onClick={() => window.open("https://2022.thef2e.com/", "_blank")}
    >
      <div className="Button">
        <div className="ButtonText">{content}</div>
      </div>
      <div className="Button ButtonFilled">
        <div className="ButtonText">{content}</div>
      </div>
    </div>
  );
};

export default Btn;
