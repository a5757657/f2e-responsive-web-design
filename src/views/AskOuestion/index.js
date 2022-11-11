import React, { useLayoutEffect } from "react";
import "./index.scss";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Images
import q11 from "../../asset/AskQuesSponsor/AskQuestion/1-1.png";
import q12 from "../../asset/AskQuesSponsor/AskQuestion/1-2.png";
import q13 from "../../asset/AskQuesSponsor/AskQuestion/1-3.png";
import q14 from "../../asset/AskQuesSponsor/AskQuestion/1-4.png";
import q21 from "../../asset/AskQuesSponsor/AskQuestion/3-1.png";
import q22 from "../../asset/AskQuesSponsor/AskQuestion/3-2.png";
import q23 from "../../asset/AskQuesSponsor/AskQuestion/3-3.png";
import q24 from "../../asset/AskQuesSponsor/AskQuestion/3-4.png";
import q31 from "../../asset/AskQuesSponsor/AskQuestion/2-1.png";
import q32 from "../../asset/AskQuesSponsor/AskQuestion/2-2.png";
import q33 from "../../asset/AskQuesSponsor/AskQuestion/2-3.png";
import q34 from "../../asset/AskQuesSponsor/AskQuestion/2-4.png";

const index = () => {

  useLayoutEffect(()=>{
    const context = gsap.context(()=>{
      gsap.registerPlugin(ScrollTrigger)
        gsap.utils.toArray(".block").forEach((e, i)=>{
          ScrollTrigger.create({
            ScrollTrigger:"title",
            markers: true,
            start: "top 100%",
            end: "top 0%",
            onEnter:()=>{
              gsap.fromTo(
                e,
                {x:0, y:100, opacity:0,visibility:"hidden",duration:2,},
                {x:0, y:0, visibility:"visible",opacity:"1",duration:2,ease:"expo",overwrite:"auto"}
              );
            },
          })
        })
    },'.App');
    return() => context.revert();
  },[])
  
  return (
    <div className="AskQuestion">
      <div className="title">你是否也有以下困擾？</div>
      <div className="container">
        <div className="grid">
          <div className="block tri1">
            <div className="Ques large">羨慕別人的酷酷網頁動畫？</div>
            <div className="picGroup">
              <img id="" className="pic pic1" src={q11} alt="" />
              <img id="" className="pic pic2" src={q12} alt="" />
              <img id="" className="pic pic3" src={q13} alt="" />
              <img id="" className="pic pic4" src={q14} alt="" />
            </div>
            <div className="Ques small">羨慕別人的酷酷網頁動畫？</div>
          </div>
          <div className="block tri2">
            <div className="picGroup">
              <img id="" className="pic pic1" src={q21} alt="" />
              <img id="" className="pic pic2" src={q22} alt="" />
              <img id="" className="pic pic3" src={q23} alt="" />
              <img id="" className="pic pic4" src={q24} alt="" />
            </div>
            <div className="Ques">滿足不了同事的許願？</div>
          </div>
          <div className="block tri3">
            <div className="Ques large">動畫技能樹太雜無從下手？</div>
            <div className="picGroup">
              <img id="" className="pic pic1" src={q31} alt="" />
              <img id="" className="pic pic2" src={q32} alt="" />
              <img id="" className="pic pic3" src={q33} alt="" />
              <img id="" className="pic pic4" src={q34} alt="" />
            </div>
            <div className="Ques small">動畫技能樹太雜無從下手？</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
