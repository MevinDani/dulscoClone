import React from 'react'
import './HistoryItem.css'

import Y96 from '../../images/1996Img.webp'

const Year1996 = () => {
    return (
        <div className='HistoryItemWrap'>


            {/* hoverText */}
            <div className='HoverTextCont'>
                <div className='HoverText'>
                    The Environmental Solutions business is established
                </div>
            </div>

            <div className='HistoryImgCont'>
                <img src={Y96} alt="" />
            </div>

            <div className='HistoryYearText'>
                1996
            </div>
        </div>
    )
}

export default Year1996