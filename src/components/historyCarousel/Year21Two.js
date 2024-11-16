import React from 'react'
import './HistoryItem.css'

import Y212 from '../../images/2021Two.webp'

const Year21Two = () => {
    return (
        <div className='HistoryItemWrap'>


            {/* hoverText */}
            <div className='HoverTextCont'>
                <div className='HoverText'>
                    Material Recovery Facility (MRF) in Ras Al Khor, Dubai is established
                </div>
            </div>

            <div className='HistoryImgCont'>
                <img src={Y212} alt="" />
            </div>

            <div className='HistoryYearText'>
                2021
            </div>
        </div>
    )
}

export default Year21Two