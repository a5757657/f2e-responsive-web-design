import React from 'react'
import './index.scss'
import { reviewMechanism, awards } from '../../asset/Awards/TextData'

const Awards = () => {
  return (
    <div className='Awards'>
      <p>區區修煉已經無法滿足了嗎？還有比賽等著你！</p>
      <h2>評審機制</h2>
      <div className="selectionWrap">
        {reviewMechanism.map((d, idx) => (
          <div key={`${d.title}-${idx}`} className="awards">
            <h3>{d.title}</h3>
            <p>{d.info}</p>
          </div>
        ))}
      </div>
      <div className="titleWrap">
        <h2>獎項</h2>
        <span className="remark">皆含數位獎狀</span>
      </div>
      <div className="awardsWrap">
        {awards.map((d, idx) => (
          <div key={`${d.title}-${idx}`} className="awards">
            <h3>{d.title}</h3>
            <p>{d.info}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Awards