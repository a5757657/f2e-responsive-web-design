import React from 'react'
import './index.scss'

const Faq = () => {
  return (
    <div className='Faq'>
      <h5>常見問答</h5>
      <div className='btns'>
        <button className='btn btn-tag'>常見問答</button>
        <button className='btn btn-tag'>UI設計師</button>
        <button className='btn btn-tag'>前端工程師</button>
        <button className='btn btn-tag'>團體組</button>
      </div>
      <div className='cotent'></div>
      <div className='joinBtn'>
        <button className='btn btn-cta'>別擔心太多。報名，就對了</button>
      </div>
    </div>
  )
}

export default Faq