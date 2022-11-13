import React, { useEffect, useLayoutEffect } from "react";
import "./index.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Images
import star1 from "./../../asset/AskQuesSponsor/Sponsor/1.png";
import star2 from "./../../asset/AskQuesSponsor/Sponsor/2.png";
import star3 from "./../../asset/AskQuesSponsor/Sponsor/3.png";
import block from "./../../asset/AskQuesSponsor/Sponsor/BlockStudio.png";
import titan from "./../../asset/AskQuesSponsor/Sponsor/TitanSoft.png";
import kdan from "./../../asset/AskQuesSponsor/Sponsor/KDAN.png";

// Links
const titanLink = "https://titansoft.com/tw";
const kdanLink = "https://www.kdanmobile.com/zh-tw";
const blockLink = "https://blockstudio.tw";

const Sponsor = () => {
  useEffect(() => {
    document.addEventListener('mousemove', parallax)
    function parallax(e) {
      this.querySelectorAll('.layer').forEach((layer) => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 25
        const y = (window.innerHeight - e.pageY * speed) / 250

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    }
  })

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".fade-in-right").forEach((e, i) => {
        ScrollTrigger.create({
          trigger: e,
          start: "top 100%",
          end: "top 0%",
          onEnter: () => {
            gsap.fromTo(
              e,
              { x: 100, y: 0, opacity: 0, visibility: "hidden", duration: 2 },
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
    }, ".App");
    return () => ctx.revert();
  }, []);

  return (
    <div className="Sponsor">
      <div className="bg">
        <img id="star1" className="star layer" data-speed="1" src={star1} alt="星星" />
        <img id="star2" className="star layer" data-speed="1" src={star2} alt="星星" />
        <img id="star3" className="star layer" data-speed="1" src={star3} alt="星星" />
      </div>
      <div className="title fade-in-right">贊助單位</div>
      <div className="container">
        <div className="wrapper">
          <a href={titanLink} target="_blank">
          <div className="blocks">
            <div className="word">鈦坦科技</div>
            <img id="titansoft" src={titan} alt="新加坡商 鈦坦科技" />
          </div>
          </a>
          <a href={kdanLink}>
          <div className="blocks" target="_blank">
            <div className="word">凱鈿科技</div>
            <img id="kdan" src={block} alt="凱鈿科技" />
          </div>
          </a>
          <a href={blockLink}>
          <div className="blocks" target="_blank">
            <div className="word">板塊設計</div>
            <img id="blockstudio" src={kdan} alt="板塊設計" />
          </div>
          </a>
        </div>
        <div className="cooper fade-in-right">
          <p>共同推廣 JIRA、miro、DottedSign</p>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
