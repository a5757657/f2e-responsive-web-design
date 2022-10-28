import React, { useLayoutEffect } from 'react'
import './index.scss'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
    <div className='BreakTheQuestion'><p>破題</p></div>
  )
}

export default BreakTheQuestion