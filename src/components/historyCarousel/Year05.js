import React from 'react'
import './HistoryItem.css'

import Y05 from '../../images/2005Img.webp'

const Year05 = () => {
    return (
        <div className='HistoryItemWrap'>


            {/* hoverText */}
            <div className='HoverTextCont'>
                <div className='HoverText'>
                    Dulsco becomes a Limited Liability Company and expands its geographical presence to include all of UAE Emirates.
                </div>
            </div>

            <div className='HistoryImgCont'>
                <img src={Y05} alt="" />
            </div>

            <div className='HistoryYearText'>
                2005
            </div>
        </div>
    )
}

export default Year05