import React, { useLayoutEffect, useRef } from 'react'
import './index.scss'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

const NavBar = () => {
  const titleRef = useRef()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollToPlugin)
      titleRef.current.addEventListener('click', () => {
        gsap.to(window, { scrollTo: { y: 0 } })
      })
    }, '.App');
    return () => ctx.revert();
  }, [])
  return (
    <nav>
      <div className="NavBar">
        <div className="left">
          <div ref={titleRef} className="title">The F2E 4th</div>
          <ul>
            <li>三大主題</li>
            <li>活動說明</li>
            <li>獎項說明</li>
            <li>主辦單位</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="right">
          <div className="countDown">
            報名倒數  20 天 1 小時 32 分 20 秒
          </div>
          <button
            className='btn btn-cta'
            onClick={() => window.open("https://2022.thef2e.com/", "_blank")}
          >我要報名</button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar