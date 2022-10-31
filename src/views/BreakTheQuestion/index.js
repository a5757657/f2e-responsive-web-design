import React, { useLayoutEffect } from 'react'
import './index.scss'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import fe1 from './../../asset/BreakTheQuestion/images/FE-1.svg'
import fe2 from './../../asset/BreakTheQuestion/images/FE-2.svg'
import fe3 from './../../asset/BreakTheQuestion/images/FE-3.svg'
import fe4 from './../../asset/BreakTheQuestion/images/FE-4.svg'
import fe5 from './../../asset/BreakTheQuestion/images/FE-5.svg'
import ui1 from './../../asset/BreakTheQuestion/images/UI-1.svg'
import ui2 from './../../asset/BreakTheQuestion/images/UI-2.svg'
import ui3 from './../../asset/BreakTheQuestion/images/UI-3.svg'
import ui4 from './../../asset/BreakTheQuestion/images/UI-4.svg'
import ui5 from './../../asset/BreakTheQuestion/images/UI-5.svg'

const BreakTheQuestion = () => {

  /* useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      ScrollTrigger.create({
        trigger: '.BreakTheQuestion', // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: 'top 100%', // 決定動畫開始點的位置
        end: 'top 0%', // 決定動畫結束點的位置
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            '.BreakTheQuestion',
            { x: 100, y: 0, opacity: 0, visibility: "hidden", duration: 2, },
            {
              duration: 2,
              delay: 0.2,
              x: 0,
              y: 0,
              visibility: "visible",
              opacity: "1",
              ease: "expo", // 元素的運動速度變化
              overwrite: "auto",
            }
          );
        },
        onEnterBack: () => {
          gsap.fromTo(
            '.BreakTheQuestion',
            { x: 100, y: 0, opacity: 0, visibility: "hidden" },
            {
              duration: 1,
              delay: 0.2,
              x: 0,
              y: 0,
              visibility: "visible",
              opacity: "1",
              ease: "expo", // 元素的運動速度變化
              overwrite: "auto",
            }
          );
        },
        onLeave: function () {
          gsap.set('.BreakTheQuestion', { opacity: 0, visibility: "hidden" });
        },
      })
    }, '.App');
    return () => ctx.revert();
  }, []) */
  return (
    <div className='BreakTheQuestion'>
      <div className="title">本屆主題：互動式網頁設計</div>
      <div className="container">
        <div className="UI">
          <div>UI 設計師</div>
          <img src={ui1} alt="" />
          <img src={ui5} alt="" />
          <img src={ui4} alt="" />
          <img src={ui3} alt="" />
          <img src={ui2} alt="" />
        </div>
        <div className="FE">
          <div>前端工程師</div>
          <img src={fe1} alt="" />
          <img src={fe3} alt="" />
          <img src={fe4} alt="" />
          <img src={fe2} alt="" />
          <img src={fe5} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BreakTheQuestion