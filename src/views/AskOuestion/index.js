import React, { useEffect, useLayoutEffect } from "react";
import "./index.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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

const AskQuestion = () => {
  useEffect(() => {
    document.addEventListener('mousemove', parallax)
    function parallax(e) {
      this.querySelectorAll('.tri').forEach((layer) => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 25
        const y = (window.innerHeight - e.pageY * speed) / 175

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    }
  })

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".tri").forEach((e, i) => {
        ScrollTrigger.create({
          trigger: e,
          start: "top 100%",
          end: "top 0%",
          onEnter: () => {
            gsap.fromTo(
              e,
              { x: 0, y: -100, opacity: 0, visibility: "hidden", duration: 2 },
              {
                duration: 2,
                x: 0,
                y: 0,
                visibility: "visible",
                opacity: "1",
                ease: "expo",
                overwrite: "auto",
              }
            );
          },
        });
      });

      // const scrollTL = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".AskQuestion",
      //     start: "top 40%",
      //     end: "top 15%",
      //     scrub: true,
      //     // markers: true,
      //   },
      // });
      // scrollTL
      //   .from(".tri1", { y: -50, duration: 1 })
      //   .from(".tri2", { y: -50, duration: 1 })
      //   .from(".tri3", { y: -50, duration: 1 });
    }, ".App");
    return () => context.revert();
  }, []);

  return (
    <div className="AskQuestion" id="AskQuestion">
      <div className="title">??????????????????????????????</div>
      <div className="container">
        <div className="grid">
          <div className="block tri tri1" data-speed='1'>
            <div className="Ques large">????????????????????????????????????</div>
            <div className="picGroup">
              <img id="" className="pic pic1" src={q11} alt="" />
              <img id="" className="pic pic2" src={q12} alt="" />
              <img id="" className="pic pic3" src={q13} alt="" />
              <img id="" className="pic pic4" src={q14} alt="" />
            </div>
            <div className="Ques small">????????????????????????????????????</div>
          </div>
          <div className="block tri tri2" data-speed='1'>
            <div className="picGroup">
              <img id="" className="pic pic1" src={q21} alt="" />
              <img id="" className="pic pic2" src={q22} alt="" />
              <img id="" className="pic pic3" src={q23} alt="" />
              <img id="" className="pic pic4" src={q24} alt="" />
            </div>
            <div className="Ques">??????????????????????????????</div>
          </div>
          <div className="block tri tri3" data-speed='1'>
            <div className="Ques large">????????????????????????????????????</div>
            <div className="picGroup">
              <img id="" className="pic pic1" src={q31} alt="" />
              <img id="" className="pic pic2" src={q32} alt="" />
              <img id="" className="pic pic3" src={q33} alt="" />
              <img id="" className="pic pic4" src={q34} alt="" />
            </div>
            <div className="Ques small">????????????????????????????????????</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
