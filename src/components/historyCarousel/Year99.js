import React from 'react'
import './HistoryItem.css'

import Y99 from '../../images/1999Img.webp'

const Year99 = () => {
    return (
        <div className='HistoryItemWrap'>


            {/* hoverText */}
            <div className='HoverTextCont'>
                <div className='HoverText'>
                    Dulsco enters Abu Dhabi market
                </div>
            </div>

            <div className='HistoryImgCont'>
                <img src={Y99} alt="" />
            </div>

            <div className='HistoryYearText'>
                1999
            </div>
        </div>
    )
}


export default Year99