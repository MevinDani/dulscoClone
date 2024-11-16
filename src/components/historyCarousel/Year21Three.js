import React from 'react'
import './HistoryItem.css'

import Y213 from '../../images/2021Three.webp'

const Year21Three = () => {
    return (
        <div className='HistoryItemWrap'>


            {/* hoverText */}
            <div className='HoverTextCont'>
                <div className='HoverText'>
                    The Liquid Treatment Facility (LTF) in Dubai is established
                </div>
            </div>

            <div className='HistoryImgCont'>
                <img src={Y213} alt="" />
            </div>

            <div className='HistoryYearText'>
                2021
            </div>
        </div>
    )
}

export default Year21Three