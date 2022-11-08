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
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      const srollTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".BreakTheQuestion",
          pin: true,
          scrub: true,
          // markers: true,
        },
      });
      srollTL
        .from('.ui1', { translateX: '-125%', translateY: '-100%', rotation: -90, duration: 1 }, '<')
        .from('.ui2', { translateX: '30%', translateY: '-120%', duration: 1.5 }, '<')
        .from('.ui3', { translateX: '250%', duration: 1.2 }, '<')
        .from('.ui4', { translateX: '-165%', translateY: '50%', rotation: -180, duration: 2 }, '<')
        .from('.ui5', { translateX: '100%', translateY: '120%', duration: 2 }, '<')
        .from('.fe1', { translateX: '160%', translateY: '80%', rotation: 90, duration: 1 }, '<')
        .from('.fe2', { translateX: '100%', translateY: '-170%', rotation: -180, duration: 1.5 }, '<')
        .from('.fe3', { translateX: '170%', translateY: '-50%', rotation: 60, duration: 1.2 }, '<')
        .from('.fe4', { translateX: '-20%', translateY: '150%', rotation: 60, duration: 2 }, '<')
        .from('.fe5', { translateX: '70%', translateY: '130%', duration: 2 }, '<')
        .from('.divTitle2', { translateY: '30vh', opacity: 0 }).from('.divTitle1', { translateY: '30vh', opacity: 0 }, '<')


    }, '.App');
    return () => ctx.revert();
  }, [])

  return (
    <div className='BreakTheQuestion'>
      <div className="title">本屆主題：互動式網頁設計</div>
      <div className="container">
        <div className="UI">
          <div className='divTitle divTitle1'>UI 設計師</div>
          <img className='ui1' src={ui1} alt="" />
          <img className='ui5' style={{ zIndex: 1 }} src={ui5} alt="" />
          <img className='ui4' src={ui4} alt="" />
          <img className='ui3' src={ui3} alt="" />
          <img className='ui2' src={ui2} alt="" />
        </div>
        <div className="FE">
          <div className='divTitle divTitle2'>前端工程師</div>
          <img className='fe1' src={fe1} alt="" />
          <img className='fe3' src={fe3} alt="" />
          <img className='fe4' src={fe4} alt="" />
          <img className='fe2' src={fe2} alt="" />
          <img className='fe5' src={fe5} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BreakTheQuestion