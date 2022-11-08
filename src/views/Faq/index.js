import React from 'react'
import './index.scss'

const Faq = () => {
  return (
    <div className='Faq'>
      <div className="title">常見問答</div>
      <div className="container">
        <div className="bg"><img src=""/></div>
        <div className="bg"><img src=""/></div>
        <div className="wrapper">
          <div className='btns'>
            <button className='btn btn-tag'>常見問答</button>
            <button className='btn btn-tag'>UI設計師</button>
            <button className='btn btn-tag'>前端工程師</button>
            <button className='btn btn-tag'>團體組</button>
          </div>
          <div className='cotent'>
            <div className="FAQ"></div>
            <div className="UI"></div>
            <div className="FE"></div>
            <div className="GP"></div>
          </div>
          <div className='joinBtn'>
            <button className='btn btn-cta'>別擔心太多。報名，就對了</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq