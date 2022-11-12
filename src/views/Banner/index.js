import React, { useLayoutEffect } from "react";
import "./index.scss";
import purple from "../../asset/Img/purple.svg";
import blue from "../../asset/Img/blue.svg";
import green from "../../asset/Img/green.svg";
import pink from "../../asset/Img/pink.svg";
import arrowDown from "../../asset/Img/arrow_down.svg";
import { Btn } from "../../components/Button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Banner = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const scrollTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: ".Banner",
          pin: true,
          scrub: true,
        },
      });
      const vw = window.innerWidth;
      const letterSpacing = vw < 756 ? 18 : 50;
      scrollTimeLine.to(".FilledBlue", {
        height: "100%",
      });
      scrollTimeLine.to(".FilledPink", {
        height: "100%",
      });
      scrollTimeLine.to(".FilledGreen", {
        height: "100%",
      });
      scrollTimeLine.to(".ActionText", { letterSpacing: `${letterSpacing}px` });
    });
    return () => ctx.revert();
  }, []);
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
          <div className="TitleGroup">
            <div className="Title">The F2E 4th</div>
            <div className="Subtitle">互動式網頁設計</div>
          </div>
          <div className="TitleGroup AnimationTitle FilledBlue">
            <div className="Title ">The F2E 4th</div>
            <div className="Subtitle">互動式網頁設計</div>
          </div>
          <div className="TitleGroup AnimationTitle FilledPink">
            <div className="Title">The F2E 4th</div>
            <div className="Subtitle">互動式網頁設計</div>
          </div>
          <div className="TitleGroup AnimationTitle FilledGreen">
            <div className="Title">The F2E 4th</div>
            <div className="Subtitle">互動式網頁設計</div>
          </div>
        </div>
        <div className="ActionContainer">
          <p className="ActionText">創造 屬於你的互動</p>
          <Btn content="我要報名" />
          <img src={arrowDown} alt="arrowDown" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
