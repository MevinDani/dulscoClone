import React from 'react'
import './HistoryItem.css'

import Y18 from '../../images/2018Img.webp'

const Year18 = () => {
    return (
        <div className='HistoryItemWrap'>


            {/* hoverText */}
            <div className='HoverTextCont'>
                <div className='HoverText'>
                    Construction and Demolition Waste Recycling business established
                </div>
            </div>

            <div className='HistoryImgCont'>
                <img src={Y18} alt="" />
            </div>

            <div className='HistoryYearText'>
                2018
            </div>
        </div>
    )
}


export default Year18