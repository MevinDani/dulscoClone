import React from 'react'
import './HistoryItem.css'

import Y07 from '../../images/2007Img.webp'

const Year07 = () => {
    return (
        <div className='HistoryItemWrap'>


            {/* hoverText */}
            <div className='HoverTextCont'>
                <div className='HoverText'>
                    Dulsco Village is established
                </div>
            </div>

            <div className='HistoryImgCont'>
                <img src={Y07} alt="" />
            </div>

            <div className='HistoryYearText'>
                2007
            </div>
        </div>
    )
}

export default Year07