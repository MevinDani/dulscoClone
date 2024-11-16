import React from 'react'
import './HistoryItem.css'

import Y22One from '../../images/2022One.webp'

const Year22One = () => {
    return (
        <div className='HistoryItemWrap'>


            {/* hoverText */}
            <div className='HoverTextCont'>
                <div className='HoverText'>
                    Dulsco acquires Parisima
                </div>
            </div>

            <div className='HistoryImgCont'>
                <img src={Y22One} alt="" />
            </div>

            <div className='HistoryYearText'>
                2022
            </div>
        </div>
    )
}

export default Year22One