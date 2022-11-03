import React from "react";
import styled from "styled-components";
import "./index.scss";
import { colors } from "../../styles/global";
import purple from "../../asset/Img/purple.svg";
import blue from "../../asset/Img/blue.svg";
import green from "../../asset/Img/green.svg";
import pink from "../../asset/Img/pink.svg";
import arrowDown from "../../asset/Img/arrow_down.svg";
import { Btn } from "../../components/Button";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="BackgroundContainer">
        <img
          className="BackgroundImageElement purple"
          src={purple}
          alt="purple"
        />
        <img className="BackgroundImageElement green" src={green} alt="green" />
        <img className="BackgroundImageElement blue" src={blue} alt="blue" />
        <img className="BackgroundImageElement pink" src={pink} alt="pink" />
      </div>
      <div className="MainContainer">
        <div className="TitleContainer">
          <h1 className="Title">The F2E 4th</h1>
          <h2 className="Subtitle">互動式網頁設計</h2>
        </div>
        <div className="ActionContainer">
          <p className="ActionText">創造 屬於你的互動</p>
          <Btn>我要報名</Btn>
          <img src={arrowDown} alt="arrowDown" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
