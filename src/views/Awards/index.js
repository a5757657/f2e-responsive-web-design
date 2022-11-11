import React, { useLayoutEffect } from 'react'
import './index.scss'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { reviewMechanism, awards } from '../../asset/Awards/TextData'

const Awards = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      const srollTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".Awards",
          pin: true,
          scrub: true,
        },
      });
      srollTL.to(".bg", { scale: 0 });
      gsap.utils.toArray(".fade-in-right").forEach((ele, index) => {

        ScrollTrigger.create({
          trigger: ele, // 決定scrolltrigger要以哪一個元素作為觸發基準點
          // markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
          start: 'top 100%', // 決定動畫開始點的位置
          end: 'top 0%', // 決定動畫結束點的位置
          // scrub: true,
          onEnter: () => {
            gsap.fromTo(
              ele,
              { x: 100, y: 0, opacity: 0, visibility: "hidden", duration: 2, },
              {
                duration: 2,
                x: 0,
                y: 0,
                visibility: "visible",
                opacity: "1",
                ease: "expo", // 元素的運動速度變化
                overwrite: "auto",
              }
            );
          },
          /* onEnterBack: () => {
            gsap.fromTo(
              ele,
              { x: 100, y: 0, opacity: 0, visibility: "hidden" },
              {
                duration: 2,
                delay: index / 10,
                x: 0,
                y: 0,
                visibility: "visible",
                opacity: "1",
                ease: "expo", // 元素的運動速度變化
                overwrite: "auto",
              }
            );
          }, */
          /* onLeave: () => {
            gsap.to(ele, { opacity: 0, duration: 1, delay: 2 })
          } */
        })
      })
    }, '.App');
    return () => ctx.revert();
  }, [])
  return (
    <div className='Awards'>
      <div className="container">
        <p className='fade-in-right'>區區修煉已經無法滿足了嗎？還有比賽等著你！</p>
        <h2 className='fade-in-right'>評審機制</h2>
        <div className="selectionWrap">
          {reviewMechanism.map((d, idx) => (
            <div key={`${d.title}-${idx}`} className="awards fade-in-right">
              <h3>{d.title}</h3>
              <p>{d.info}</p>
            </div>
          ))}
        </div>
        <div className="titleWrap">
          <h2 className='fade-in-right'>獎項</h2>
          <span className="remark fade-in-right">皆含數位獎狀</span>
        </div>
        <div className="awardsWrap">
          {awards.map((d, idx) => (
            <div key={`${d.title}-${idx}`} className="awards fade-in-right">
              <h3>{d.title}</h3>
              <p>{d.info}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg"></div>
    </div>
  )
}

export default Awards