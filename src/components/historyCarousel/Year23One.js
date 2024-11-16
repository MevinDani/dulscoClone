import React from 'react'
import './HistoryItem.css'

import Y23One from '../../images/2023One.webp'

const Year23One = () => {
    return (
        <div className='HistoryItemWrap'>


            {/* hoverText */}
            <div className='HoverTextCont'>
                <div className='HoverText'>
                    Dulsco acquires Advance Global Recruitment (AGR)
                </div>
            </div>

            <div className='HistoryImgCont'>
                <img src={Y23One} alt="" />
            </div>

            <div className='HistoryYearText'>
                2023
            </div>
        </div>
    )
}

export default Year23One