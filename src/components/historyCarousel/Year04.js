import React from 'react'
import './HistoryItem.css'

import Y04 from '../../images/2004Img.webp'

const Year04 = () => {
    return (
        <div className='HistoryItemWrap'>


            {/* hoverText */}
            <div className='HoverTextCont'>
                <div className='HoverText'>
                    White collar staff outsourcing established
                </div>
            </div>

            <div className='HistoryImgCont'>
                <img src={Y04} alt="" />
            </div>

            <div className='HistoryYearText'>
                2004
            </div>
        </div>
    )
}

export default Year04